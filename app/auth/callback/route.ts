import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { AUTH_COOKIE_OPTIONS, ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "@/lib/supabase/cookies";
import { getSupabaseEnv } from "@/lib/supabase/env";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/dashboard";

  if (!code) {
    return NextResponse.redirect(`${origin}/login?error=auth_callback_failed`);
  }

  const { url, anonKey } = getSupabaseEnv();
  const supabase = createClient(url, anonKey, {
    auth: { flowType: "pkce", autoRefreshToken: false, persistSession: false },
  });

  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error || !data.session) {
    return NextResponse.redirect(`${origin}/login?error=auth_callback_failed`);
  }

  const response = NextResponse.redirect(`${origin}${next}`);
  response.cookies.set(ACCESS_TOKEN_COOKIE, data.session.access_token, AUTH_COOKIE_OPTIONS);
  response.cookies.set(REFRESH_TOKEN_COOKIE, data.session.refresh_token, AUTH_COOKIE_OPTIONS);
  return response;
}
