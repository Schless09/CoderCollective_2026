import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CompareCallout } from "@/components/blog/CompareCallout";

export default function ResumeImprovementTeaser() {
  return (
    <section
      id="resume-improvement"
      className="w-full border-t border-white/10 bg-slate-100 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-600">
          Career Development
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Top Resume Tips
          <span className="block text-2xl font-bold text-slate-800 sm:text-3xl">
            for Senior Engineers
          </span>
        </h2>
        <p className="mt-2 text-lg font-medium text-slate-700">
          How to Showcase Your True Impact
        </p>
        <p className="mt-6 text-base leading-relaxed text-slate-600">
          In a competitive tech job market, your resume needs to do more than
          list past jobs—it should tell a compelling story about the value you
          bring. Here&apos;s a preview of how to move from task lists to
          outcomes that get interviews.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md shadow-slate-200/60 sm:p-8">
          <h3 className="text-xl font-bold text-slate-900">
            Go Deeper on Your Impact and Contributions
          </h3>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Don&apos;t just list responsibilities—highlight the problem, what made
            it challenging, and what you achieved. Context helps hiring managers
            see scope and complexity.
          </p>
          <div className="mt-6">
            <CompareCallout
              variant="light"
              instead="Implemented CI/CD pipeline for the backend service"
              tryText="Architected and implemented a CI/CD pipeline that reduced deployment time from 45 minutes to 5 minutes and eliminated 90% of post-release bugs by automating integration tests"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Full guide: impact, technical specifics, ownership, problem-solving,
            structure, and more.
          </p>
          <Link
            href="/blog/resume-improvement"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-purple-600 hover:to-blue-600 hover:shadow-purple-500/30"
          >
            Read the full guide
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
