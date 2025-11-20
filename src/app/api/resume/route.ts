import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";

export async function GET() {
  try {
    // Prefer resume in writable temp dir (serverless), then repo uploads, then public images
    const tmpUploads = path.join(os.tmpdir(), "bosco-resume-uploads", "resume.pdf");
    const uploaded = path.join(process.cwd(), "uploads", "resume.pdf");
    const publicFallback = path.join(process.cwd(), "public", "images", "Bosco Ng Resume.pdf");

    let servePath = "";
    if (fs.existsSync(tmpUploads)) {
      servePath = tmpUploads;
    } else if (fs.existsSync(uploaded)) {
      servePath = uploaded;
    } else if (fs.existsSync(publicFallback)) {
      servePath = publicFallback;
    } else {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 });
    }

    const file = fs.readFileSync(servePath);
    // Add cache control to avoid serving stale PDF from browser cache or CDN.
    return new NextResponse(file, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=resume.pdf",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
