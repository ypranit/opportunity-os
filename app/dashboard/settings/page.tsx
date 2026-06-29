import { PageHeader, SectionCard } from "@/components/dashboard/dashboard-ui";

export default function SettingsPage() {
  return (
    <div>
      <PageHeader
        title="Settings"
        description="Manage your account preferences and notification settings."
      />

      <div className="space-y-6">
        <SectionCard title="Appearance">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium">Theme</p>
              <p className="mt-1 text-sm text-muted">
                Follows your system preference. Custom theme toggle coming soon.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                disabled
                className="rounded-xl border border-black/10 px-4 py-2 text-sm font-medium opacity-60 dark:border-white/10"
              >
                Light
              </button>
              <button
                type="button"
                disabled
                className="rounded-xl border border-black/10 px-4 py-2 text-sm font-medium opacity-60 dark:border-white/10"
              >
                Dark
              </button>
              <button
                type="button"
                className="gradient-bg rounded-xl px-4 py-2 text-sm font-semibold text-white"
              >
                System
              </button>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Notifications">
          <div className="space-y-4">
            {[
              { label: "Deadline reminders", description: "Get notified before opportunity deadlines." },
              { label: "New opportunity matches", description: "Alerts when AI finds new matches." },
              { label: "Application status updates", description: "Track changes to your applications." },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 rounded-xl bg-black/5 px-4 py-3 dark:bg-white/5"
              >
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-muted">{item.description}</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" defaultChecked className="peer sr-only" />
                  <span className="h-6 w-11 rounded-full bg-black/10 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition peer-checked:bg-indigo-500 peer-checked:after:translate-x-full dark:bg-white/10" />
                </label>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Account">
          <div className="space-y-3 text-sm">
            <p className="text-muted">
              Account management features including email change and password update will be wired in a future release.
            </p>
            <button
              type="button"
              disabled
              className="rounded-xl border border-black/10 px-4 py-2 font-medium opacity-60 dark:border-white/10"
            >
              Change Password
            </button>
          </div>
        </SectionCard>

        <SectionCard title="Danger Zone">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
            <p className="text-sm font-medium text-red-700 dark:text-red-300">Delete account</p>
            <p className="mt-1 text-sm text-muted">
              Permanently delete your account and all associated data. This action cannot be undone.
            </p>
            <button
              type="button"
              disabled
              className="mt-4 rounded-xl border border-red-500/30 px-4 py-2 text-sm font-medium text-red-600 opacity-60 dark:text-red-400"
            >
              Delete Account — Coming Soon
            </button>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
