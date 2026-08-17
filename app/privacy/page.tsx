import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — ILGIZ.STUDIO",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto min-h-screen max-w-2xl px-6 py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-600"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to desktop
      </Link>

      <h1 className="mt-8 text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-neutral-500">Last updated: 2026</p>

      <div className="mt-8 space-y-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
        <p>
          This site is a personal portfolio. It does not collect personal
          data, does not use tracking cookies, and does not run any
          third-party analytics.
        </p>
        <p>
          Any information you choose to share via email, Telegram, or
          Instagram when reaching out is used only to discuss and deliver
          the project you contacted me about, and is never sold or shared
          with third parties.
        </p>
        <p>
          If you have questions about this policy, reach out via the
          contact details on the site.
        </p>
      </div>
    </div>
  );
}
