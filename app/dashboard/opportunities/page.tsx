import { PageHeader } from "@/components/dashboard/dashboard-ui";
import { OpportunityCardGrid, OpportunityEmptyState } from "@/components/dashboard/opportunity-card";
import type { OpportunityPreview } from "@/types/dashboard";

const placeholderOpportunities: OpportunityPreview[] = [
  {
    id: "1",
    title: "Merit Scholarship Program",
    organization: "National Education Foundation",
    deadline: "Aug 15, 2026",
    category: "Scholarship",
    eligibilityScore: null,
  },
  {
    id: "2",
    title: "Summer Engineering Internship",
    organization: "TechCorp Global",
    deadline: "Jul 30, 2026",
    category: "Internship",
    eligibilityScore: null,
  },
  {
    id: "3",
    title: "AI Innovation Hackathon",
    organization: "Humain Learning",
    deadline: "Jul 20, 2026",
    category: "Hackathon",
    eligibilityScore: null,
  },
];

export default function OpportunitiesPage() {
  const hasMatches = false;

  return (
    <div>
      <PageHeader
        title="My Opportunities"
        description="Discover scholarships, internships, hackathons, and more matched to your profile."
      />

      {hasMatches ? (
        <OpportunityCardGrid opportunities={placeholderOpportunities} />
      ) : (
        <div className="space-y-6">
          <OpportunityEmptyState />
          <div>
            <p className="mb-4 text-sm font-medium text-muted">Preview — UI placeholder cards</p>
            <OpportunityCardGrid opportunities={placeholderOpportunities} />
          </div>
        </div>
      )}
    </div>
  );
}
