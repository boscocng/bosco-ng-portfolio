import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const uploaded = path.join(process.cwd(), "uploads", "resume.pdf");
    let servePath = "";
    if (fs.existsSync(uploaded)) {
      servePath = uploaded;
    } else {
      servePath = path.join(process.cwd(), "public", "images", "Bosco Ng Resume.pdf");
    }

    if (!fs.existsSync(servePath)) {
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
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
