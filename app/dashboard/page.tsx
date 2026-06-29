import Link from "next/link";
import { EmptyState, SectionCard, StatCard } from "@/components/dashboard/dashboard-ui";
import { OpportunityCardGrid } from "@/components/dashboard/opportunity-card";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { ActivityItem, DeadlinePreview, OpportunityPreview } from "@/types/dashboard";

function getDisplayName(metadata: Record<string, unknown> | undefined, email: string | undefined) {
  const fullName = metadata?.full_name;
  if (typeof fullName === "string" && fullName.trim()) return fullName;
  return email?.split("@")[0] ?? "Student";
}

export default async function DashboardPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const displayName = getDisplayName(user?.user_metadata, user?.email);
  const profileCompletion = 25;

  const stats = [
    { label: "Saved Opportunities", value: "0", hint: "Start exploring matches" },
    { label: "Active Applications", value: "0", hint: "No applications in progress" },
    { label: "Upcoming Deadlines", value: "0", hint: "Nothing due this week" },
    { label: "Documents Uploaded", value: "0", hint: "Upload to unlock AI" },
  ];

  const recentOpportunities: OpportunityPreview[] = [];
  const upcomingDeadlines: DeadlinePreview[] = [];
  const recentActivity: ActivityItem[] = [];

  return (
    <div className="space-y-8">
      <section className="glass rounded-2xl p-6 sm:p-8">
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Dashboard</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">Welcome back, {displayName}</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Your AI-powered workflow for discovering and applying to opportunities — all in one place.
        </p>
      </section>

      <section className="glass rounded-2xl p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Complete your profile</h2>
            <p className="mt-1 text-sm text-muted">
              Upload documents and fill in your details to unlock personalized matching.
            </p>
          </div>
          <Link
            href="/dashboard/documents"
            className="gradient-bg shrink-0 rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Upload Documents
          </Link>
        </div>
        <div className="mt-4">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-muted">Profile completion</span>
            <span className="font-semibold">{profileCompletion}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
            <div
              className="gradient-bg h-full rounded-full transition-all"
              style={{ width: `${profileCompletion}%` }}
            />
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} hint={stat.hint} />
        ))}
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <SectionCard
          title="Recent Opportunities"
          action={
            <Link href="/dashboard/opportunities" className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              View all
            </Link>
          }
        >
          {recentOpportunities.length > 0 ? (
            <OpportunityCardGrid opportunities={recentOpportunities} />
          ) : (
            <EmptyState
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              }
              title="No opportunities yet"
              description="Complete your profile and upload documents to discover matching opportunities."
              actionLabel="Explore Opportunities"
              actionHref="/dashboard/opportunities"
            />
          )}
        </SectionCard>

        <SectionCard title="Upcoming Deadlines">
          {upcomingDeadlines.length > 0 ? (
            <ul className="space-y-3">
              {upcomingDeadlines.map((deadline) => (
                <li
                  key={deadline.id}
                  className="flex items-center justify-between rounded-xl bg-black/5 px-4 py-3 dark:bg-white/5"
                >
                  <div>
                    <p className="font-medium">{deadline.title}</p>
                    <p className="text-sm text-muted">{deadline.date}</p>
                  </div>
                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">
                    {deadline.daysLeft} days
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              }
              title="No deadlines tracked"
              description="When you save opportunities, their deadlines will appear here automatically."
              actionLabel="View Deadlines"
              actionHref="/dashboard/deadlines"
            />
          )}
        </SectionCard>
      </div>

      <SectionCard title="Recent Activity">
        {recentActivity.length > 0 ? (
          <ul className="space-y-3">
            {recentActivity.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between rounded-xl bg-black/5 px-4 py-3 dark:bg-white/5"
              >
                <p className="text-sm">{item.action}</p>
                <p className="text-xs text-muted">{item.timestamp}</p>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="No recent activity"
            description="Your uploads, saves, and applications will show up here as you use OpportunityOS."
          />
        )}
      </SectionCard>
    </div>
  );
}
