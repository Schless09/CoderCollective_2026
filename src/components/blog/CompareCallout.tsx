type CompareCalloutProps = {
  instead: string;
  tryText: string;
  /** Light mode (blog) vs dark-friendly variant */
  variant?: "light" | "dark";
};

export function CompareCallout({
  instead,
  tryText,
  variant = "light",
}: CompareCalloutProps) {
  const box =
    variant === "light"
      ? "border-purple-600 bg-indigo-50/90 text-slate-800"
      : "border-purple-500 bg-white/5 text-gray-200";

  return (
    <div
      className={`rounded-r-lg border-l-4 py-4 pl-5 pr-4 shadow-sm ${box}`}
    >
      <p className={`text-sm leading-relaxed italic sm:text-base ${variant === "light" ? "text-slate-700" : "text-gray-300"}`}>
        <span className="font-semibold not-italic">Instead of:</span>{" "}
        &ldquo;{instead}&rdquo;
      </p>
      <p
        className={`mt-3 text-sm leading-relaxed italic sm:text-base ${variant === "light" ? "text-slate-900" : "text-white"}`}
      >
        <span className="font-semibold not-italic">Try:</span> &ldquo;{tryText}
        &rdquo;
      </p>
    </div>
  );
}
