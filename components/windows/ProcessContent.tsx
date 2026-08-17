import { PRICING, PROCESS_STEPS } from "@/lib/data";

export function ProcessContent() {
  return (
    <div className="thin-scrollbar h-full overflow-y-auto p-6">
      <h1 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
        How a project runs, start to finish
      </h1>
      <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
        I run every project end-to-end — one person responsible for the
        whole thing, from the first call to the live site. Here&apos;s the
        shape it usually takes.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.number}
            className="rounded-xl border border-black/5 bg-black/[0.02] p-3.5 dark:border-white/5 dark:bg-white/[0.03]"
          >
            <span className="text-xs font-semibold text-blue-500">{step.number}</span>
            <h3 className="mt-1 text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              {step.title}
            </h3>
            <p className="mt-1 text-[12px] leading-snug text-neutral-500 dark:text-neutral-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-neutral-400">
        Pricing
      </h2>
      <div className="mt-3 divide-y divide-black/5 overflow-hidden rounded-xl border border-black/5 dark:divide-white/5 dark:border-white/5">
        {PRICING.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between px-4 py-3 text-sm"
          >
            <span className="text-neutral-700 dark:text-neutral-200">{item.label}</span>
            <span className="font-medium text-neutral-900 dark:text-neutral-50">
              {item.price}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[12px] text-neutral-400">
        Prices are a starting point — every quote is tailored after the
        briefing call.
      </p>
    </div>
  );
}
