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
    const pw = form.get("password") as string | null;
    const envPw = process.env.ADMIN_PASSWORD || null;

    if (!hasCookie) {
      if (!envPw || pw !== envPw) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    const file = form.get("file") as any;
    if (!file || typeof file.arrayBuffer !== "function") {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Save under ./uploads/resume.pdf relative to repo root
    const uploadsDir = path.resolve(process.cwd(), "uploads");
    if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
    const outPath = path.join(uploadsDir, "resume.pdf");
    fs.writeFileSync(outPath, buffer);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
