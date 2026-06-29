"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { AuthAlert, AuthCard, AuthField, AuthSubmitButton } from "@/components/auth/auth-ui";
import { GoogleAuthButton } from "@/components/auth/google-auth-button";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { syncSessionToCookies } from "@/lib/auth/session";
import type { AuthFormState } from "@/types/auth";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/dashboard";
  const callbackError = searchParams.get("error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formState, setFormState] = useState<AuthFormState>({
    status: callbackError ? "error" : "idle",
    message: callbackError ? "Authentication failed. Please try again." : "",
  });

  const isLoading = formState.status === "loading";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: "loading", message: "" });

    const supabase = createBrowserSupabaseClient();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setFormState({ status: "error", message: error.message });
      return;
    }

    if (data.session) {
      await syncSessionToCookies(data.session.access_token, data.session.refresh_token);
    }

    setFormState({ status: "success", message: "Signed in successfully. Redirecting…" });
    router.push(next);
    router.refresh();
  };

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Sign in to your OpportunityOS account"
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-indigo-600 hover:underline dark:text-indigo-400">
            Sign up
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {formState.message && (
          <AuthAlert
            variant={formState.status === "success" ? "success" : "error"}
            message={formState.message}
          />
        )}

        <AuthField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          disabled={isLoading}
        />
        <AuthField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          autoComplete="current-password"
          disabled={isLoading}
        />

        <div className="text-right">
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
          >
            Forgot password?
          </Link>
        </div>

        <AuthSubmitButton loading={isLoading}>Sign In</AuthSubmitButton>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-black/10 dark:border-white/10" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-transparent px-2 text-muted">or</span>
          </div>
        </div>

        <GoogleAuthButton
          disabled={isLoading}
          onError={(message) => setFormState({ status: "error", message })}
          onLoadingChange={(loading) =>
            setFormState((prev) => ({ ...prev, status: loading ? "loading" : prev.status }))
          }
        />
      </form>
    </AuthCard>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="glass flex h-40 w-full max-w-md items-center justify-center rounded-2xl">
          <span className="h-6 w-6 animate-spin rounded-full border-2 border-indigo-500/30 border-t-indigo-500" />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
