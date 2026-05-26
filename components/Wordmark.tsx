import Link from "next/link";

type WordmarkProps = {
  href?: string;
  className?: string;
};

export function Wordmark({ href = "/", className = "" }: WordmarkProps) {
  return (
    <Link
      href={href}
      aria-label="Gazi & Associates — home"
      className={`leading-none inline-flex flex-col text-ink no-underline ${className}`}
    >
      <span className="font-serif text-2xl font-medium leading-tight">Gazi &amp; Associates</span>
      <span className="mt-1.5 font-sans text-xs uppercase tracking-caps text-muted">
        Advocates · Tax Counsel · Corporate Advisers
      </span>
    </Link>
  );
}
