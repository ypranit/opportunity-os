"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { dashboardNavItems, isNavItemActive } from "@/lib/dashboard/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

interface SidebarProps {
  onNavigate?: () => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createBrowserSupabaseClient();
    await supabase.auth.signOut();
    await fetch("/api/auth/session", { method: "DELETE" });
    router.push("/");
    router.refresh();
  };

  return (
    <aside className="flex h-full flex-col">
      <div className="border-b border-black/5 px-6 py-5 dark:border-white/10">
        <Link href="/dashboard" className="text-lg font-bold tracking-tight" onClick={onNavigate}>
          Opportunity<span className="gradient-text">OS</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4" aria-label="Dashboard">
        {dashboardNavItems.map((item) => {
          const active = isNavItemActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                  : "text-muted hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5"
              }`}
              aria-current={active ? "page" : undefined}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-black/5 p-3 dark:border-white/10">
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-500/10 dark:text-red-400"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
          Logout
        </button>
      </div>
    </aside>
  );
}
