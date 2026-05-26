import Link from "next/link";

import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

type FooterLink = { href: string; label: string };

const chambers: ReadonlyArray<FooterLink> = [
  { href: "/firm/chambers#dhaka", label: "Dhaka" },
  { href: "/firm/chambers#jashore", label: "Jashore" },
  { href: "/firm/chambers#london", label: "London" },
];

const practice: ReadonlyArray<FooterLink> = [
  { href: "/practice/tax", label: "Tax & NBR Advisory" },
  { href: "/practice/vat-customs", label: "VAT & Customs" },
  { href: "/practice/corporate", label: "Corporate & Commercial" },
  { href: "/practice/litigation", label: "Litigation & High Court" },
  { href: "/practice/cross-border", label: "Cross-Border & UK Desk" },
  { href: "/practice/civil", label: "Civil & Property" },
  { href: "/practice/criminal", label: "Criminal" },
];

const firm: ReadonlyArray<FooterLink> = [
  { href: "/firm", label: "About the firm" },
  { href: "/firm/leadership", label: "Leadership" },
  { href: "/firm/team", label: "Team" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms of engagement" },
];

const memberships: ReadonlyArray<string> = [
  "Bangladesh Bar Council",
  "Dhaka Bar Association",
  "Dhaka Taxes Bar Association",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-paper">
      <Container className="py-20 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          <FooterColumn title="Chambers" items={chambers} />
          <FooterColumn title="Practice" items={practice} />
          <FooterColumn title="The Firm" items={firm} />
        </div>

        <div className="mt-16 border-t border-rule pt-10">
          <Eyebrow tone="muted">Members of {memberships.join(" · ")}</Eyebrow>
          <p className="mt-4 font-sans text-xs text-muted">
            © {new Date().getFullYear()} Gazi &amp; Associates. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  items: ReadonlyArray<FooterLink>;
};

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <Eyebrow tone="muted" as="h2">
        {title}
      </Eyebrow>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="font-sans text-base text-ink hover:text-ink-soft">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
