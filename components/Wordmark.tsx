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
      className={`inline-flex flex-col leading-none text-ink no-underline ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/logo.svg"
        alt="Gazi & Associates"
        width={200}
        height={70}
        className="h-auto w-[200px]"
      />
      <span className="mt-2 font-sans text-xs uppercase tracking-caps text-muted">
        Advocates · Tax Counsel · Corporate Advisers
      </span>
    </Link>
  );
}
