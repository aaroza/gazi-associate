import Link from "next/link";

type PracticeCardProps = {
  href: string;
  title: string;
  summary: string;
  endDetail?: string;
};

export function PracticeCard({ href, title, summary, endDetail }: PracticeCardProps) {
  return (
    <Link href={href} className="group relative block border-t border-rule py-8 pr-10 md:pr-14">
      <div
        className={
          endDetail
            ? "grid grid-cols-1 items-baseline gap-x-10 gap-y-3 md:grid-cols-[60fr_40fr]"
            : ""
        }
      >
        <div>
          <h3 className="font-serif text-2xl font-medium leading-tight text-ink transition-transform duration-200 group-hover:translate-x-2 group-hover:text-ink-soft">
            {title}
          </h3>
          <p className="mt-3 max-w-prose font-sans text-base leading-relaxed text-body">
            {summary}
          </p>
        </div>
        {endDetail ? (
          <p className="font-sans text-sm leading-relaxed text-ink/70 md:text-base">{endDetail}</p>
        ) : null}
      </div>
      <span
        aria-hidden
        className="absolute right-0 top-8 font-serif text-2xl leading-none text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      >
        →
      </span>
    </Link>
  );
}
