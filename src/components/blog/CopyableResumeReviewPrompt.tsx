"use client";

import { Check, Copy } from "lucide-react";
import { useCallback, useState } from "react";

const RESUME_REVIEW_PROMPT = `I'm uploading my resume and I want you to be extremely critical. Act like a hiring manager or technical recruiter at a top-tier tech company. Don't sugarcoat anything—tell me what's weak, unclear, unnecessary, or undersold. Point out anything that feels vague, redundant, or unimpressive.

Then, go deeper:

For each role, ask me clarifying questions about what I did, why it mattered, and what changed because of it. (e.g., "What measurable result did this project drive?", "Did this reduce cost, save time, or increase adoption?").

Challenge me to think about impact rather than just tasks. If I wrote "Built an API", ask: "Who used it? How many requests per day? What did it enable the business to do?"

Suggest exactly how to reframe my answers into strong, impact-focused resume bullets. Where possible, provide rewritten examples.

Recommend cuts, restructuring, or rebalancing—tell me if I'm over-indexing on certain roles or underselling others.

Share what's missing. Are there key skills, metrics, or leadership signals I haven't highlighted?

Make sure the 2–3 most recent roles get the majority of attention and bullet points, since those are most relevant to hiring managers. Older roles should be summarized more concisely.

My goal is to make this resume as strong and competitive as possible, especially for roles in US based VC-backed Startups. Please critique thoroughly, then guide me through the right questions so I can fill in the missing details.`;

export function CopyableResumeReviewPrompt() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(RESUME_REVIEW_PROMPT);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 2500);
    }
  }, []);

  const copied = status === "copied";
  const failed = status === "error";

  return (
    <div className="relative max-w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-inner">
      <button
        type="button"
        onClick={copy}
        className="absolute right-1 top-1 z-10 inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/90 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 touch-manipulation sm:right-2 sm:top-2"
        aria-label={
          copied
            ? "Prompt copied"
            : failed
              ? "Copy failed — try again"
              : "Copy prompt to clipboard"
        }
      >
        {copied ? (
          <Check className="h-5 w-5 text-emerald-600" aria-hidden />
        ) : (
          <Copy className="h-5 w-5" aria-hidden />
        )}
      </button>
      <pre className="max-h-[min(70vh,520px)] overflow-auto overscroll-contain p-4 pr-14 pt-4 text-xs leading-relaxed text-slate-800 [overflow-wrap:anywhere] sm:text-sm sm:pr-16 whitespace-pre-wrap">
        {RESUME_REVIEW_PROMPT}
      </pre>
      <p className="sr-only" role="status" aria-live="polite">
        {copied && "Prompt copied to clipboard"}
        {failed && "Could not copy; try selecting the text manually"}
      </p>
    </div>
  );
}
