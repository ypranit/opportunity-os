"use client";

import { useEffect } from "react";
import { syncSessionToCookies } from "@/lib/auth/session";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

async function syncSession(accessToken: string, refreshToken: string) {
  await syncSessionToCookies(accessToken, refreshToken);
}

async function clearSession() {
  await fetch("/api/auth/session", { method: "DELETE" });
}

export function SessionSync() {
  useEffect(() => {
    const supabase = createBrowserSupabaseClient();

    const syncFromSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        await syncSession(data.session.access_token, data.session.refresh_token);
      }
    };

    void syncFromSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session) {
        await syncSession(session.access_token, session.refresh_token);
      } else {
        await clearSession();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return null;
}
