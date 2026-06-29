import Link from "next/link";
import type { ReactNode } from "react";

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="glass flex flex-col items-center rounded-2xl px-6 py-12 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-muted">{description}</p>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="gradient-bg mt-6 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  hint?: string;
}

export function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <div className="glass rounded-2xl p-5 transition hover:-translate-y-0.5">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
    </div>
  );
}

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
      <p className="mt-2 text-muted">{description}</p>
    </div>
  );
}

interface SectionCardProps {
  title: string;
  children: ReactNode;
  action?: ReactNode;
}

export function SectionCard({ title, children, action }: SectionCardProps) {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
}
