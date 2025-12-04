import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// In production, serverless file systems are ephemeral, so we always serve
// the bundled resume PDF from the public folder. To update your resume,
// replace the file at public/images/Bosco Ng Resume.pdf and redeploy.
export async function GET() {
  try {
    const publicPath = path.join(
      process.cwd(),
      "public",
      "images",
      "Bosco Ng Resume.pdf"
    );

    if (!fs.existsSync(publicPath)) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 });
    }

    const file = fs.readFileSync(publicPath);
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
