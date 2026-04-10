import type { Metadata } from "next";
import { ArrowRight, Check, FileText } from "lucide-react";
import Link from "next/link";
import { CompareCallout } from "@/components/blog/CompareCallout";
import { CopyableResumeReviewPrompt } from "@/components/blog/CopyableResumeReviewPrompt";

export const metadata: Metadata = {
  title: "Top Resume Tips for Senior Engineers | Coder Collective",
  description:
    "How to showcase your true impact—impact, technical specifics, ownership, and more. A practical guide for senior engineers.",
  openGraph: {
    title: "Top Resume Tips for Senior Engineers",
    description:
      "Transform your resume from a list of responsibilities into proof of engineering impact.",
    url: "https://www.thecodercollective.com/blog/resume-improvement",
  },
};

const RESUME_TEMPLATE_URL =
  "https://docs.google.com/document/d/19yzGHeirADrvjlF73qpQET4n9t8GArT3dySthYC3MkI/edit?usp=sharing";

export default function ResumeImprovementBlogPage() {
  return (
    <article className="min-h-screen bg-slate-50 pb-20 pt-24 text-slate-900 sm:pt-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-600">
          Career Development
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Top Resume Tips
          <span className="block text-2xl font-bold sm:text-3xl lg:text-4xl">
            for Senior Engineers
          </span>
        </h1>
        <p className="mt-3 text-xl font-medium text-slate-700">
          How to Showcase Your True Impact
        </p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
          <span>8 min read</span>
          <span aria-hidden="true">·</span>
          <span>Written by Drew Ryan</span>
        </div>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-slate-700">
          <p>
            In the competitive tech job market, your resume needs to do more than
            just list your past jobs—it needs to tell a compelling story about the
            unique value you bring to the table.
          </p>
          <p>
            After reviewing thousands of engineering resumes, we&apos;ve
            identified the key differences between resumes that get overlooked and
            those that lead to interviews at top companies.
          </p>
          <p>
            Here are the most effective ways to transform your resume from a mere
            list of responsibilities to a powerful showcase of your engineering
            expertise.
          </p>
        </div>

        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Go Deeper on Your Impact and Contributions
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Don&apos;t just list responsibilities—highlight the problem you were
            solving, what made it challenging, and what outcomes you achieved. This
            kind of context helps hiring managers understand the scope and
            complexity of your work, and sets you apart from others with similar
            roles.
          </p>
          <CompareCallout
            instead="Implemented CI/CD pipeline for the backend service"
            tryText="Architected and implemented a CI/CD pipeline that reduced deployment time from 45 minutes to 5 minutes and eliminated 90% of post-release bugs by automating integration tests"
          />
          <p className="text-slate-700 leading-relaxed">
            By quantifying your impact (when possible) and providing context about
            the problems you solved, you make your contributions tangible and
            memorable.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Include Technical Specifics
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Be explicit about the tools, technologies, and frameworks you used.
            Vague terms like &ldquo;implementation&rdquo; or &ldquo;workflow&rdquo;
            don&apos;t mean much without clarity on the stack, architecture, or
            environment. Detailing the technical context makes your experience more
            credible and tangible.
          </p>
          <CompareCallout
            instead="Worked on backend development for a microservices architecture"
            tryText="Designed and developed 4 key microservices using Node.js, Express, and MongoDB, deployed on AWS ECS with Docker, that processed 200k+ daily user transactions with 99.9% uptime"
          />
          <p className="text-slate-700 leading-relaxed">
            This approach not only helps you pass keyword filters but also gives
            technical hiring managers a clear picture of your expertise level with
            specific technologies.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Emphasize Ownership and Collaboration
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Strong verbs like &ldquo;led&rdquo; or &ldquo;designed&rdquo; are
            great, but they&apos;re even more effective when paired with scale and
            context. For example: Did you work across teams? Were you mentoring
            others? What was the size or business impact of the project?
          </p>
          <CompareCallout
            instead="Led the frontend team for the new product launch"
            tryText={
              "Led a cross-functional team of 6 engineers to deliver a React-based dashboard that increased user engagement by 40% and became the company's fastest-growing product feature, now used by 70% of our enterprise customers"
            }
          />
          <p className="text-slate-700 leading-relaxed">
            This highlights not just your technical abilities but also your
            leadership, collaboration skills, and business impact.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Demonstrate Problem-Solving Skills
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Don&apos;t just state what you built—describe a tough technical or
            product challenge and how you navigated it. Hiring managers often value
            your thinking process as much as your results.
          </p>
          <CompareCallout
            instead="Optimized database queries for better performance"
            tryText="Addressed critical performance bottlenecks by rewriting inefficient SQL queries and implementing Redis caching, solving persistent timeout issues that affected 30% of users during peak hours"
          />
          <p className="text-slate-700 leading-relaxed">
            This showcases your ability to identify problems, develop solutions,
            and deliver tangible results—skills that are highly valued in any
            engineering role.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Expand or Structure Your Bullet Points Strategically
          </h2>
          <p className="text-slate-700 leading-relaxed">
            If your current role is undersold with only a few high-level bullets,
            consider adding more depth—either by increasing the bullet count or
            breaking out sub-bullets under each one to provide specific examples or
            metrics.
          </p>
          <p className="font-medium text-slate-900">
            For your most recent or most relevant roles, aim for 5–8 detailed
            bullet points that cover:
          </p>
          <ul className="list-inside list-disc space-y-2 text-slate-700">
            <li>Technical challenges you solved</li>
            <li>Systems/features you built or improved</li>
            <li>Your collaboration with other teams</li>
            <li>Business impact of your work</li>
            <li>
              Scale metrics (users, transactions, performance improvements)
            </li>
          </ul>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            De-prioritize Outdated or Less Relevant Experience
          </h2>
          <p className="text-slate-700 leading-relaxed">
            If you&apos;ve moved beyond internships or campus projects, those
            earlier experiences should be condensed. Keep them on your resume only
            if they demonstrate skills or leadership that are still relevant to
            the roles you&apos;re applying for.
          </p>
          <p className="font-medium text-slate-900">
            For roles older than 5–7 years:
          </p>
          <ul className="list-inside list-disc space-y-2 text-slate-700">
            <li>
              Reduce to 2–3 bullets highlighting only the most significant
              achievements
            </li>
            <li>Focus on transferable skills and leadership examples</li>
            <li>
              Consider removing outdated technologies unless they&apos;re still
              relevant
            </li>
          </ul>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Skip the Headshot</h2>
          <p className="text-slate-700 leading-relaxed">
            While profile pictures might be common in some countries, US hiring
            managers generally see them as wasted space. They&apos;re already going
            to look you up on LinkedIn—so don&apos;t sacrifice prime real estate
            for an image.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Focus on content over visuals. Your skills and achievements should be
            the star of your resume, not your photo.
          </p>
        </section>

        <section className="mt-14 space-y-6 rounded-2xl border border-purple-200/80 bg-gradient-to-b from-indigo-50/80 to-purple-50/40 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            The AI Resume Review Technique
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Want objective feedback on your resume? Try this technique using
            ChatGPT:
          </p>
          <ol className="list-inside list-decimal space-y-2 text-slate-700">
            <li>Copy your full resume</li>
            <li>Paste it into ChatGPT with this prompt:</li>
          </ol>
          <CopyableResumeReviewPrompt />
          <p className="text-slate-700 leading-relaxed">
            This AI-driven feedback can help identify blind spots in your resume
            that you might have missed.
          </p>
        </section>

        <section
          id="free-resume-template"
          className="mt-14 rounded-3xl border border-indigo-100 bg-gradient-to-br from-sky-50 via-indigo-50/90 to-purple-50 p-6 shadow-lg shadow-indigo-100/50 sm:p-10"
        >
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-800">
              <FileText className="h-4 w-4 text-purple-600" aria-hidden />
              Free Resume Template
            </span>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Professional Resume Template
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-700 leading-relaxed">
              Get started with our professionally designed resume template that
              follows all the best practices outlined in this guide. Perfect for
              senior engineers and tech professionals.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-8 rounded-2xl bg-white p-6 shadow-md shadow-slate-200/60 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-slate-900">What&apos;s Included:</p>
              <ul className="mt-4 space-y-3 text-slate-700">
                {[
                  "Professional formatting optimized for ATS systems",
                  "Impact-focused bullet point examples",
                  "Technical skills section with proper categorization",
                  "Clean, modern design that stands out",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-left leading-snug">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-purple-600"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex shrink-0 justify-center lg:justify-end">
              <a
                href={RESUME_TEMPLATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:from-purple-600 hover:to-blue-600"
              >
                Open Template
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Final Thoughts</h2>
          <p className="text-slate-700 leading-relaxed">
            Your resume isn&apos;t just a history of your career—it&apos;s a
            strategic marketing document that should highlight your most
            impressive and relevant accomplishments.
          </p>
          <p className="text-slate-700 leading-relaxed">
            By focusing on impact, technical specifics, problem-solving, and
            ownership, you&apos;ll create a resume that stands out to both
            automated screening systems and technical hiring managers.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Remember: The goal isn&apos;t to list everything you&apos;ve ever
            done—it&apos;s to showcase the work that best positions you for the
            specific roles you&apos;re targeting.
          </p>
        </section>

        <div className="mt-16 border-t border-slate-200 pt-10">
          <Link
            href="/"
            className="text-sm font-semibold text-purple-600 hover:text-purple-700"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </article>
  );
}
