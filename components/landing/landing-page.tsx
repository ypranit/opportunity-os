import Link from "next/link";
import { Navbar } from "./navbar";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "About", href: "#about" },
];

function IconSearch() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconClipboard() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}

function IconSparkles() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

const features = [
  {
    icon: IconSearch,
    title: "AI Opportunity Discovery",
    description: "Automatically surface scholarships, hackathons, internships, and grants matched to your profile.",
  },
  {
    icon: IconDocument,
    title: "Resume Parsing",
    description: "Upload your documents once. AI extracts skills, education, and experience instantly.",
  },
  {
    icon: IconCheck,
    title: "Eligibility Checker",
    description: "Know which opportunities you qualify for before you invest hours applying.",
  },
  {
    icon: IconClipboard,
    title: "Document Checklist",
    description: "Get a personalized list of every document you need — nothing gets missed.",
  },
  {
    icon: IconCalendar,
    title: "Deadline Tracking",
    description: "Stay ahead of every deadline with a centralized dashboard and smart reminders.",
  },
  {
    icon: IconSparkles,
    title: "Smart Recommendations",
    description: "Receive AI-curated suggestions based on your goals, background, and past applications.",
  },
];

const stats = [
  { value: "1000+", label: "Opportunities" },
  { value: "95%", label: "Matching Accuracy" },
  { value: "24/7", label: "AI Assistance" },
  { value: "All-in-One", label: "Dashboard" },
];

const steps = [
  { number: "01", title: "Upload Resume", description: "Drop your resume and supporting documents in seconds." },
  { number: "02", title: "AI Builds Your Profile", description: "Our engine extracts skills, education, and eligibility signals." },
  { number: "03", title: "Find Matching Opportunities", description: "Discover scholarships, internships, and competitions tailored to you." },
  { number: "04", title: "Apply With Confidence", description: "Follow your checklist, track deadlines, and submit on time." },
];

const comparisonItems = [
  { feature: "Automatic eligibility checking", us: true, them: false },
  { feature: "Centralized opportunity feed", us: true, them: false },
  { feature: "Deadline tracking dashboard", us: true, them: false },
  { feature: "Missing document detection", us: true, them: false },
  { feature: "AI-powered recommendations", us: true, them: false },
];

const roadmapItems = [
  { phase: "Now", title: "Profile & Discovery", description: "Document upload, AI extraction, and opportunity matching." },
  { phase: "Next", title: "Application Workflow", description: "Checklists, eligibility engine, and deadline reminders." },
  { phase: "Future", title: "Collaboration & Insights", description: "Team applications, analytics, and mentor integrations." },
];

function HeroIllustration() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[480px]" aria-hidden="true">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-purple-500/20 blur-2xl" />

      <div className="glass animate-float absolute left-4 top-8 z-10 w-44 rounded-2xl p-4 sm:left-0">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
            <IconSearch />
          </div>
          <span className="text-xs font-semibold">Scholarships</span>
        </div>
        <div className="space-y-1.5">
          <div className="h-2 w-full rounded-full bg-indigo-500/20" />
          <div className="h-2 w-3/4 rounded-full bg-indigo-500/10" />
        </div>
        <p className="mt-2 text-[10px] text-muted">Merit Award · $5,000</p>
      </div>

      <div className="glass animate-float-delayed absolute right-2 top-4 z-20 w-40 rounded-2xl p-4 sm:right-0">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15 text-violet-600 dark:text-violet-400">
            <IconSparkles />
          </div>
          <span className="text-xs font-semibold">Hackathons</span>
        </div>
        <div className="rounded-lg bg-violet-500/10 px-2 py-1 text-[10px] font-medium text-violet-700 dark:text-violet-300">
          48h left
        </div>
      </div>

      <div className="glass animate-float-slow absolute bottom-32 left-8 z-10 w-36 rounded-2xl p-3 sm:left-4">
        <span className="text-[10px] font-medium text-muted">Internships</span>
        <p className="mt-1 text-xs font-semibold">Google SWE</p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
        </div>
      </div>

      <div className="glass animate-float absolute bottom-20 right-6 z-30 w-36 rounded-2xl p-4 sm:right-2">
        <span className="text-[10px] font-medium text-muted">Eligibility Score</span>
        <p className="mt-1 text-2xl font-bold gradient-text">92%</p>
        <div className="mt-1 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-1 flex-1 rounded-full bg-indigo-500/30" />
          ))}
        </div>
      </div>

      <div className="glass animate-float-delayed absolute bottom-4 left-1/2 z-20 w-48 -translate-x-1/2 rounded-2xl p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold">Checklist</span>
          <span className="text-[10px] text-muted">3/5 done</span>
        </div>
        <div className="space-y-1.5">
          {["Resume", "Transcript", "Cover Letter"].map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${i < 2 ? "bg-emerald-500" : "border border-slate-300 dark:border-slate-600"}`} />
              <span className="text-[10px]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass animate-float-slow absolute right-12 top-36 z-10 rounded-xl px-3 py-2 sm:right-16">
        <div className="flex items-center gap-2">
          <IconCalendar />
          <div>
            <p className="text-[10px] font-medium text-muted">Deadline</p>
            <p className="text-xs font-bold">Mar 15</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[600px]" />
      <Navbar />

      {/* Hero */}
      <section className="relative px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
              </span>
              AI-powered workflow engine
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Never miss an opportunity because of{" "}
              <span className="gradient-text">paperwork</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              OpportunityOS helps students discover scholarships, hackathons, internships,
              grants, fellowships and competitions. It automatically checks eligibility,
              identifies missing documents, creates personalized application checklists and
              tracks deadlines.
            </p>
            <p className="mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              This is not a chatbot — it&apos;s your application operating system.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/signup"
                className="gradient-bg inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 hover:shadow-indigo-500/40"
              >
                Get Started
              </Link>
              <a
                href="#how-it-works"
                className="glass inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </section>

      {/* Trust */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-muted">
            Helping students discover opportunities faster
          </p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass group rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-2xl font-bold gradient-text sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to{" "}
              <span className="gradient-text">win opportunities</span>
            </h2>
            <p className="mt-4 text-muted">
              A complete workflow engine — from discovery to application — built for students who move fast.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 transition-colors group-hover:bg-indigo-500/20 dark:text-indigo-400">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
            <p className="mt-4 text-muted">
              Four simple steps from upload to application — fully automated by AI.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="glass relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-4xl font-bold text-indigo-500/20">{step.number}</span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why <span className="gradient-text">OpportunityOS</span>?
            </h2>
            <p className="mt-4 text-muted">
              Stop juggling spreadsheets, bookmarks, and missed deadlines.
            </p>
          </div>
          <div className="glass overflow-hidden rounded-2xl">
            <div className="grid grid-cols-3 border-b border-black/5 bg-indigo-500/5 px-6 py-4 dark:border-white/10">
              <span className="text-sm font-medium text-muted">Feature</span>
              <span className="text-center text-sm font-bold gradient-text">OpportunityOS</span>
              <span className="text-center text-sm font-medium text-muted">Traditional Searching</span>
            </div>
            {comparisonItems.map((item, i) => (
              <div
                key={item.feature}
                className={`grid grid-cols-3 items-center px-6 py-4 ${
                  i < comparisonItems.length - 1 ? "border-b border-black/5 dark:border-white/10" : ""
                }`}
              >
                <span className="text-sm">{item.feature}</span>
                <span className="flex justify-center">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </span>
                <span className="flex justify-center">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Roadmap</h2>
            <p className="mt-4 text-muted">Built for the hackathon, designed to scale into a real product.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {roadmapItems.map((item) => (
              <div key={item.phase} className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  {item.phase}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About OpportunityOS</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            OpportunityOS is an AI-powered operating system that helps students discover,
            validate, organize, and apply for opportunities. Every feature is a workflow —
            not a conversation. We automate the tedious parts of applying so you can focus
            on what matters: building your future.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="gradient-bg mx-auto max-w-5xl rounded-3xl px-8 py-16 text-center shadow-2xl shadow-indigo-500/30 sm:px-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to discover your next opportunity?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-indigo-100">
            Join students who are applying smarter, not harder. Your personalized dashboard awaits.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-indigo-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 px-4 py-12 dark:border-white/10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-lg font-bold">
                Opportunity<span className="gradient-text">OS</span>
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                Never miss an opportunity because of paperwork. Your AI-powered application operating system.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold">Quick Links</p>
              <ul className="mt-3 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">Legal</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted transition-colors hover:text-foreground">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted transition-colors hover:text-foreground">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-black/5 pt-8 text-center dark:border-white/10">
            <p className="text-xs text-muted">
              Made for the E-Cell IIT Kharagpur × Humain Learning AI Hackathon
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
