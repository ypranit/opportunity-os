"use client";

import { useState } from "react";
import type { User } from "@supabase/supabase-js";
import { SessionSync } from "@/components/auth/session-sync";
import { Sidebar } from "./sidebar";
import { TopNav } from "./top-nav";

interface AppShellProps {
  user: User;
  children: React.ReactNode;
}

export function AppShell({ user, children }: AppShellProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const userName =
    (user.user_metadata?.full_name as string | undefined) ??
    user.email?.split("@")[0] ??
    "Student";

  return (
    <div className="flex min-h-screen bg-background">
      <SessionSync />

      <div className="hidden w-64 shrink-0 bg-slate-950 border-r border-white/10 lg:block">
        <Sidebar />
      </div>

      {mobileNavOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close navigation menu"
            onClick={() => setMobileNavOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-72 bg-slate-950 border-r border-white/10 shadow-2xl">
            <Sidebar onNavigate={() => setMobileNavOpen(false)} />
          </div>
        </div>
      )}
    

      <div className="flex min-w-0 flex-1 flex-col">
        <TopNav
          userName={userName}
          userEmail={user.email ?? ""}
          onMenuClick={() => setMobileNavOpen(true)}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
