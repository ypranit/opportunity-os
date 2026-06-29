"use client";

interface TopNavProps {
  userName: string;
  userEmail: string;
  onMenuClick: () => void;
}

export function TopNav({ userName, userEmail, onMenuClick }: TopNavProps) {
  const initials = userName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="glass sticky top-0 z-30 flex h-16 items-center justify-between border-b border-black/5 px-4 dark:border-white/10 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-lg p-2 text-foreground lg:hidden"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="hidden sm:block">
          <p className="text-sm font-medium">Welcome back, {userName}</p>
          <p className="text-xs text-muted">Your opportunity command center</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-full p-2 text-muted transition hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10"
          aria-label="Notifications"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>
        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium">{userName}</p>
            <p className="text-xs text-muted">{userEmail}</p>
          </div>
          <div className="gradient-bg flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white">
            {initials || "U"}
          </div>
        </div>
      </div>
    </header>
  );
}
