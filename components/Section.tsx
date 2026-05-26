type Tone = "paper" | "paper-2";
type Density = "hero" | "default" | "compact";
type Divider = "top" | "bottom" | "both" | "none";

type SectionProps = {
  tone?: Tone;
  density?: Density;
  divider?: Divider;
  className?: string;
  id?: string;
  children: React.ReactNode;
};

const toneClass: Record<Tone, string> = {
  paper: "bg-paper",
  "paper-2": "bg-paper-2",
};

const densityClass: Record<Density, string> = {
  hero: "py-24 md:py-40",
  default: "py-24 md:py-32",
  compact: "py-16 md:py-24",
};

const dividerClass: Record<Divider, string> = {
  top: "border-t border-rule",
  bottom: "border-b border-rule",
  both: "border-y border-rule",
  none: "",
};

export function Section({
  tone = "paper",
  density = "default",
  divider = "none",
  className = "",
  id,
  children,
}: SectionProps) {
  const cls = [toneClass[tone], densityClass[density], dividerClass[divider], className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={cls}>
      {children}
    </section>
  );
}
