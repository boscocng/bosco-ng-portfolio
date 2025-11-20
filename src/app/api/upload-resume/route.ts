import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";

const COOKIE_NAME = "bosco_admin_auth";
const HARD_CODED_PASSWORD = "ChrisChester20$"; // temporary fallback password

export async function POST(req: Request) {
  try {
    // simple auth: either an admin cookie is present, or the ADMIN_PASSWORD env matches a posted password field
    const cookieHeader = req.headers.get("cookie") || "";
    const hasCookie = cookieHeader.includes(`${COOKIE_NAME}=`);

  const form = await req.formData();
  const pwRaw = form.get("password");
  const pw = typeof pwRaw === "string" ? pwRaw : null;
  const envPw = process.env.ADMIN_PASSWORD || HARD_CODED_PASSWORD;

    if (!hasCookie) {
      if (!envPw || pw !== envPw) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

  const fileRaw = form.get("file");
  type FileLike = { arrayBuffer: () => Promise<ArrayBuffer> };
  const file = fileRaw && typeof (fileRaw as FileLike).arrayBuffer === "function" ? (fileRaw as FileLike) : null;
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Save under a writable temp directory on serverless platforms (e.g. Vercel uses /tmp)
    // This is ephemeral storage — consider S3 for persistence.
    const tmpBase = os.tmpdir();
    let uploadsDir = path.join(tmpBase, "bosco-resume-uploads");
    if (!fs.existsSync(uploadsDir)) {
      try {
        fs.mkdirSync(uploadsDir, { recursive: true });
      } catch (mkdirErr) {
        // Fallback to project uploads folder (useful for local dev)
        const fallback = path.resolve(process.cwd(), "uploads");
        if (!fs.existsSync(fallback)) fs.mkdirSync(fallback, { recursive: true });
        uploadsDir = fallback;
      }
    }
    const outPath = path.join(uploadsDir, "resume.pdf");
    fs.writeFileSync(outPath, buffer);

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
