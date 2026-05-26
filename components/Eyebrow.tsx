type Tone = "gold" | "muted";

type EyebrowProps = {
  tone?: Tone;
  as?: "p" | "span" | "dt" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
};

const toneClass: Record<Tone, string> = {
  gold: "text-gold",
  muted: "text-muted",
};

export function Eyebrow({ tone = "gold", as = "p", className = "", children }: EyebrowProps) {
  const Tag = as;
  const cls = `font-sans text-xs uppercase tracking-caps ${toneClass[tone]} ${className}`.trim();
  return <Tag className={cls}>{children}</Tag>;
}
