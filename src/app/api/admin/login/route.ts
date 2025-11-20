import { NextResponse } from "next/server";

const COOKIE_NAME = "bosco_admin_auth";
const COOKIE_MAX_AGE = 60 * 60 * 24; // 1 day

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { password } = body || {};
    const real = process.env.ADMIN_PASSWORD;
    if (!real) {
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    if (password !== real) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true });
    // Set an HttpOnly cookie to mark admin as logged in
    res.headers.set("Set-Cookie", `${COOKIE_NAME}=1; Path=/; HttpOnly; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`);
    return res;
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
