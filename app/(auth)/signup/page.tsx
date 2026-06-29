"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthAlert, AuthCard, AuthField, AuthSubmitButton } from "@/components/auth/auth-ui";
import { GoogleAuthButton } from "@/components/auth/google-auth-button";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { syncSessionToCookies } from "@/lib/auth/session";
import type { AuthFormState } from "@/types/auth";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formState, setFormState] = useState<AuthFormState>({ status: "idle", message: "" });

  const isLoading = formState.status === "loading";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: "loading", message: "" });

    const supabase = createBrowserSupabaseClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setFormState({ status: "error", message: error.message });
      return;
    }

    if (data.session) {
      await syncSessionToCookies(data.session.access_token, data.session.refresh_token);
      setFormState({ status: "success", message: "Account created. Redirecting…" });
      router.push("/dashboard");
      router.refresh();
      return;
    }

    setFormState({
      status: "success",
      message: "Check your email to confirm your account before signing in.",
    });
  };

  return (
    <AuthCard
      title="Create your account"
      subtitle="Start discovering opportunities tailored to you"
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-indigo-600 hover:underline dark:text-indigo-400">
            Sign in
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
          id="name"
          label="Full name"
          value={name}
          onChange={setName}
          autoComplete="name"
          disabled={isLoading}
        />
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
          autoComplete="new-password"
          disabled={isLoading}
          placeholder="At least 6 characters"
        />

        <AuthSubmitButton loading={isLoading}>Create Account</AuthSubmitButton>

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
