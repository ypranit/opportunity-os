import Link from "next/link";
import { PageHeader, SectionCard } from "@/components/dashboard/dashboard-ui";
import { createServerSupabaseClient } from "@/lib/supabase/server";

function getFieldValue(value: unknown, fallback = "Not set") {
  if (typeof value === "string" && value.trim()) return value;
  return fallback;
}

export default async function ProfilePage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const metadata = user?.user_metadata ?? {};
  const name = getFieldValue(metadata.full_name, "Not set");
  const email = user?.email ?? "Not set";
  const education = getFieldValue(metadata.education);
  const skills = getFieldValue(metadata.skills, "No skills added yet");

  const profileFields = [
    { label: "Full Name", value: name },
    { label: "Email", value: email },
    { label: "Education", value: education },
    { label: "Skills", value: skills },
  ];

  return (
    <div>
      <PageHeader
        title="Profile"
        description="Your student profile powers opportunity matching and eligibility checks."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <SectionCard title="Profile Overview">
          <div className="flex flex-col items-center text-center">
            <div className="gradient-bg flex h-20 w-20 items-center justify-center rounded-2xl text-2xl font-bold text-white">
              {name !== "Not set" ? name.charAt(0).toUpperCase() : "?"}
            </div>
            <h2 className="mt-4 text-xl font-semibold">{name}</h2>
            <p className="text-sm text-muted">{email}</p>
            <p className="mt-4 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">
              Profile editing — coming soon
            </p>
          </div>
        </SectionCard>

        <div className="space-y-6 lg:col-span-2">
          <SectionCard title="Personal Information">
            <dl className="space-y-4">
              {profileFields.map((field) => (
                <div
                  key={field.label}
                  className="flex flex-col gap-1 rounded-xl bg-black/5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between dark:bg-white/5"
                >
                  <dt className="text-sm text-muted">{field.label}</dt>
                  <dd className="text-sm font-medium">{field.value}</dd>
                </div>
              ))}
            </dl>
          </SectionCard>

          <SectionCard title="Resume Status">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium">No resume uploaded</p>
                <p className="mt-1 text-sm text-muted">
                  Upload your resume to enable AI profile extraction and better matching.
                </p>
              </div>
              <Link
                href="/dashboard/documents"
                className="gradient-bg shrink-0 rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Upload Resume
              </Link>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
