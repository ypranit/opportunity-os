import { SessionSync } from "@/components/auth/session-sync";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[400px]" />
      <SessionSync />
      {children}
    </div>
  );
}
