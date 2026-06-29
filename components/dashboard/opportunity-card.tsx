import Link from "next/link";
import type { OpportunityPreview } from "@/types/dashboard";

const categoryColors: Record<string, string> = {
  Scholarship: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  Internship: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  Hackathon: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  Fellowship: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

interface OpportunityCardProps {
  opportunity: OpportunityPreview;
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const categoryClass =
    categoryColors[opportunity.category] ?? "bg-slate-500/10 text-slate-600 dark:text-slate-400";

  return (
    <div className="glass group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryClass}`}>
            {opportunity.category}
          </span>
          <h3 className="mt-2 text-base font-semibold">{opportunity.title}</h3>
          <p className="mt-1 text-sm text-muted">{opportunity.organization}</p>
        </div>
        {opportunity.eligibilityScore !== null && (
          <div className="shrink-0 text-right">
            <p className="text-xs text-muted">Match</p>
            <p className="text-lg font-bold gradient-text">{opportunity.eligibilityScore}%</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-black/5 pt-4 dark:border-white/10">
        <p className="text-sm text-muted">
          Deadline: <span className="font-medium text-foreground">{opportunity.deadline}</span>
        </p>
        <button
          type="button"
          className="rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-600 transition group-hover:bg-indigo-500/20 dark:text-indigo-400"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export function OpportunityCardGrid({ opportunities }: { opportunities: OpportunityPreview[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {opportunities.map((opportunity) => (
        <OpportunityCard key={opportunity.id} opportunity={opportunity} />
      ))}
    </div>
  );
}

export function OpportunityEmptyState() {
  return (
    <div className="glass rounded-2xl px-6 py-12 text-center">
      <p className="text-lg font-semibold">No opportunities yet</p>
      <p className="mt-2 text-sm text-muted">
        Upload your documents and complete your profile to discover matching opportunities.
      </p>
      <Link
        href="/dashboard/documents"
        className="gradient-bg mt-6 inline-block rounded-full px-5 py-2.5 text-sm font-semibold text-white"
      >
        Upload Documents
      </Link>
    </div>
  );
}
