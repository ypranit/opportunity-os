import { NextResponse, type NextRequest } from "next/server";
import { ACCESS_TOKEN_COOKIE, AUTH_COOKIE_OPTIONS, REFRESH_TOKEN_COOKIE } from "@/lib/supabase/cookies";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      access_token?: string;
      refresh_token?: string;
    };

    if (!body.access_token || !body.refresh_token) {
      return NextResponse.json({ error: "Missing session tokens." }, { status: 400 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(ACCESS_TOKEN_COOKIE, body.access_token, AUTH_COOKIE_OPTIONS);
    response.cookies.set(REFRESH_TOKEN_COOKIE, body.refresh_token, AUTH_COOKIE_OPTIONS);
    return response;
  } catch {
    return NextResponse.json({ error: "Invalid session payload." }, { status: 400 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(ACCESS_TOKEN_COOKIE, "", { ...AUTH_COOKIE_OPTIONS, maxAge: 0 });
  response.cookies.set(REFRESH_TOKEN_COOKIE, "", { ...AUTH_COOKIE_OPTIONS, maxAge: 0 });
  return response;
}
