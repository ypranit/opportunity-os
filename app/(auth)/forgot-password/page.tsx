"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthAlert, AuthCard, AuthField, AuthSubmitButton } from "@/components/auth/auth-ui";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { AuthFormState } from "@/types/auth";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<AuthFormState>({ status: "idle", message: "" });

  const isLoading = formState.status === "loading";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: "loading", message: "" });

    const supabase = createBrowserSupabaseClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/dashboard/settings`,
    });

    if (error) {
      setFormState({ status: "error", message: error.message });
      return;
    }

    setFormState({
      status: "success",
      message: "Password reset link sent. Check your email inbox.",
    });
  };

  return (
    <AuthCard
      title="Reset your password"
      subtitle="We'll send you a link to create a new password"
      footer={
        <>
          Remember your password?{" "}
          <Link href="/login" className="font-medium text-indigo-600 hover:underline dark:text-indigo-400">
            Back to sign in
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

        <AuthSubmitButton loading={isLoading}>Send Reset Link</AuthSubmitButton>
      </form>
    </AuthCard>
  );
}
