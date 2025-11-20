"use client";

import React, { useState, useRef } from "react";

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  try {
    return String(err);
  } catch {
    return "Unknown error";
  }
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  async function tryPassword(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Authenticating...");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setAuthed(true);
        setStatus(null);
      } else {
        const json = await res.json().catch(() => null);
        setStatus((json && json.error) || `Auth failed (${res.status})`);
      }
    } catch (err: unknown) {
      setStatus(getErrorMessage(err));
    }
  }

  async function upload(e: React.FormEvent) {
    e.preventDefault();
    // If user hasn't chosen a file yet, open the file picker
    if (!file) {
      try {
        fileInputRef.current?.click();
      } catch {
        // ignore
      }
      setStatus("Please choose a PDF file to upload.");
      return;
    }

    setStatus("Uploading...");

    try {
      const form = new FormData();
      form.append("file", file);

      const res = await fetch("/api/upload-resume", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        setStatus("Upload complete. Resume should update on the public resume page.");
        // open public resume and local resume with cache-busting timestamp so you can immediately verify
        const ts = Date.now();
        try {
          // open public site
          window.open(`https://boscong.dev/resume?cb=${ts}`, "_blank");
        } catch {
          // ignore in server-side rendering
        }
        try {
          // open local dev page too
          window.open(`/resume?cb=${ts}`, "_blank");
        } catch {
          // ignore
        }
      } else {
        const json = (await res.json().catch(() => null)) as { error?: string } | null;
        setStatus(json?.error ?? `Upload failed (${res.status})`);
      }
    } catch (err: unknown) {
      setStatus(getErrorMessage(err));
    }
  }

  return (
    <main className="min-h-screen notebook-paper">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">Admin — Resume Upload</h2>

        {!authed ? (
          <form onSubmit={tryPassword} className="space-y-4 max-w-md">
            <label className="block">
              <span className="text-sm font-medium">Enter admin password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </label>
            <div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded" type="submit">
                Unlock
              </button>
            </div>
            {status && <p className="text-sm text-red-600 mt-2">{status}</p>}
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">Authenticated. Choose a PDF to replace the public resume.</p>
            <form onSubmit={upload} className="space-y-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                className="hidden"
              />
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  Choose file
                </button>
                <span className="text-sm text-gray-700">{file ? file.name : "No file chosen"}</span>
              </div>
              <div>
                <button className="px-4 py-2 bg-green-600 text-white rounded" type="submit">
                  Upload Resume
                </button>
              </div>
            </form>
            {status && <p className="text-sm text-gray-700">{status}</p>}
          </div>
        )}
      </div>
    </main>
  );
}
