import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  level?: 2 | 3;
  rule?: boolean;
  align?: "start" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  heading,
  level = 2,
  rule = false,
  align = "start",
  className = "",
}: SectionHeadingProps) {
  const HeadingTag = level === 2 ? "h2" : "h3";
  const alignment = align === "center" ? "items-center text-center" : "items-start text-start";

  return (
    <div className={`flex flex-col ${alignment} ${className}`.trim()}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <HeadingTag className="mt-3 max-w-prose font-serif text-3xl font-medium leading-tight text-ink">
        {heading}
      </HeadingTag>
      {rule ? <hr className="mt-6 w-16 border-t border-rule" /> : null}
    </div>
  );
}
