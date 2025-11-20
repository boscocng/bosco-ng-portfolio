import { NextResponse } from "next/server";

const COOKIE_NAME = "bosco_admin_auth";
const COOKIE_MAX_AGE = 60 * 60 * 24; // 1 day
const HARD_CODED_PASSWORD = "ChrisChester20$"; // temporary hard-coded password

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { password?: string } | null;
    const { password } = body ?? {};
    // Use environment variable if present, otherwise fall back to the hard-coded password
    const real = process.env.ADMIN_PASSWORD || HARD_CODED_PASSWORD;

    if (password !== real) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true });
    // Set an HttpOnly cookie to mark admin as logged in
    const isProd = process.env.NODE_ENV === "production";
    const secureFlag = isProd ? "; Secure" : "";
    res.headers.set(
      "Set-Cookie",
      `${COOKIE_NAME}=1; Path=/; HttpOnly; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax${secureFlag}`
    );
    return res;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
