"use client";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseEnv } from "./env";

let browserClient: SupabaseClient | null = null;

export function createBrowserSupabaseClient() {
  if (browserClient) return browserClient;

  const { url, anonKey } = getSupabaseEnv();
  browserClient = createClient(url, anonKey, {
    auth: {
      flowType: "pkce",
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  });

  return browserClient;
}
