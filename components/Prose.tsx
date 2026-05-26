type Leading = "relaxed" | "prose";

type ProseProps = {
  leading?: Leading;
  className?: string;
  children: React.ReactNode;
};

const leadingClass: Record<Leading, string> = {
  relaxed: "leading-relaxed",
  prose: "leading-prose",
};

export function Prose({ leading = "relaxed", className = "", children }: ProseProps) {
  const cls =
    `max-w-prose space-y-6 font-sans text-base ${leadingClass[leading]} text-body ${className}`.trim();
  return <div className={cls}>{children}</div>;
}
