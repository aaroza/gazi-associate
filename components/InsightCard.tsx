import Link from "next/link";

type InsightCardProps = {
  href: string;
  practiceLabel: string;
  headline: string;
  date: string;
  dek: string;
};

export function InsightCard({ href, practiceLabel, headline, date, dek }: InsightCardProps) {
  const formatted = formatDate(date);

  return (
    <Link href={href} className="group block border-t border-rule py-8">
      <div className="flex items-center justify-between gap-4">
        <span className="font-sans text-xs uppercase tracking-caps text-gold">{practiceLabel}</span>
        <time dateTime={date} className="font-sans text-xs uppercase tracking-caps text-muted">
          {formatted}
        </time>
      </div>
      <h3 className="mt-4 max-w-prose font-serif text-2xl font-medium leading-tight text-ink group-hover:text-ink-soft">
        {headline}
      </h3>
      <p className="mt-3 max-w-prose font-sans text-base leading-relaxed text-body">{dek}</p>
    </Link>
  );
}

function formatDate(value: string): string {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
