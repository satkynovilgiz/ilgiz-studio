import { ABOUT_ROWS } from "@/lib/data";

export function AboutContent() {
  return (
    <div className="thin-scrollbar h-full overflow-y-auto p-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-400 to-slate-700 text-3xl font-semibold text-white shadow-lg">
          IS
        </div>
        <div>
          <h1 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            Ilgiz Satkynov
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Web Designer &amp; Developer
          </p>
        </div>
      </div>

      <div className="mt-6 divide-y divide-black/5 overflow-hidden rounded-xl border border-black/5 bg-black/[0.02] text-sm dark:divide-white/5 dark:border-white/5 dark:bg-white/[0.03]">
        {ABOUT_ROWS.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-4 px-4 py-2.5">
            <span className="text-neutral-500 dark:text-neutral-400">{row.label}</span>
            <span className="text-right font-medium text-neutral-800 dark:text-neutral-100">
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
        I design and build sites end-to-end — from the first sketch of a
        structure to the deployed, working product. I care about sites that
        load fast, feel considered, and actually help the business behind
        them. No templates dressed up as custom work, no half-finished
        handoffs — just a site you can point people to and be proud of.
      </p>
    </div>
  );
}
