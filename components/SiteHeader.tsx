import Link from "next/link";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";

const navItems: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/firm", label: "The Firm" },
  { href: "/practice", label: "Practice" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-rule bg-paper">
      <Container className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4 py-7">
        <Wordmark />
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-sans text-sm font-medium text-ink hover:text-ink-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
