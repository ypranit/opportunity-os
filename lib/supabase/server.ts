import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "./cookies";
import { getSupabaseEnv } from "./env";

export async function createServerSupabaseClient(): Promise<SupabaseClient> {
  const { url, anonKey } = getSupabaseEnv();
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;
  const refreshToken = cookieStore.get(REFRESH_TOKEN_COOKIE)?.value;

  const client = createClient(url, anonKey, {
    auth: {
      flowType: "pkce",
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });

  if (accessToken && refreshToken) {
    await client.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
  }

  return client;
}
