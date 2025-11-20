import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const COOKIE_NAME = "bosco_admin_auth";

export async function POST(req: Request) {
  try {
    // simple auth: either an admin cookie is present, or the ADMIN_PASSWORD env matches a posted password field
    const cookieHeader = req.headers.get("cookie") || "";
    const hasCookie = cookieHeader.includes(`${COOKIE_NAME}=`);

  const form = await req.formData();
  const pwRaw = form.get("password");
  const pw = typeof pwRaw === "string" ? pwRaw : null;
    const envPw = process.env.ADMIN_PASSWORD || null;

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

    // Save under ./uploads/resume.pdf relative to repo root
    const uploadsDir = path.resolve(process.cwd(), "uploads");
    if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
    const outPath = path.join(uploadsDir, "resume.pdf");
    fs.writeFileSync(outPath, buffer);

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
