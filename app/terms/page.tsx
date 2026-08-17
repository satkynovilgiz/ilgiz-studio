import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service — ILGIZ.STUDIO",
};

export default function TermsPage() {
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
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-neutral-500">Last updated: 2026</p>

      <div className="mt-8 space-y-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
        <p>
          By browsing this site, you agree it is provided as-is, as a
          portfolio showcase. Project examples shown are illustrative and
          content is periodically updated.
        </p>
        <p>
          Any work agreed upon after contact is scoped and priced
          individually in a separate agreement between the client and
          Ilgiz Satkynov, and these terms do not constitute that
          agreement.
        </p>
        <p>
          All illustrations, code, and design on this site remain the
          property of Ilgiz Satkynov unless otherwise agreed in writing.
        </p>
      </div>
    </div>
  );
}
