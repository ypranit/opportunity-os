"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface AuthAlertProps {
  variant: "error" | "success";
  message: string;
}

export function AuthAlert({ variant, message }: AuthAlertProps) {
  const styles =
    variant === "error"
      ? "border-red-500/20 bg-red-500/10 text-red-700 dark:text-red-300"
      : "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300";

  return (
    <div className={`rounded-xl border px-4 py-3 text-sm ${styles}`} role="alert">
      {message}
    </div>
  );
}

interface AuthFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
  disabled?: boolean;
  required?: boolean;
}

export function AuthField({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
  disabled,
  required = true,
}: AuthFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        required={required}
        className="w-full rounded-xl border border-black/10 bg-white/50 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-60 dark:border-white/10 dark:bg-white/5"
      />
    </div>
  );
}

interface AuthSubmitButtonProps {
  loading: boolean;
  children: ReactNode;
}

export function AuthSubmitButton({ loading, children }: AuthSubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="gradient-bg flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      )}
      {children}
    </button>
  );
}

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function AuthCard({ title, subtitle, children, footer }: AuthCardProps) {
  return (
    <div className="glass w-full max-w-md rounded-2xl p-8">
      <div className="mb-6 text-center">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Opportunity<span className="gradient-text">OS</span>
        </Link>
        <h1 className="mt-4 text-2xl font-bold">{title}</h1>
        <p className="mt-2 text-sm text-muted">{subtitle}</p>
      </div>
      {children}
      {footer && <div className="mt-6 text-center text-sm text-muted">{footer}</div>}
    </div>
  );
}
