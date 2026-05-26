import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { people } from "@/content/people";

export const metadata: Metadata = {
  title: "Team · Gazi & Associates",
  description:
    "The lawyers of Gazi & Associates — founding partner and associates across the firm's three chambers.",
};

export default function TeamPage() {
  const sorted = [...people].sort((a, b) => a.order - b.order);

  return (
    <>
      <PageHero
        eyebrow="The firm"
        heading="Team"
        subtitle="The firm is led by its founding partner, with associates supporting the practice across the firm's three chambers. Full bios for the founding partner and senior counsel are available on the leadership page."
      />

      <Section tone="paper" divider="top">
        <Container>
          <SectionHeading heading="The firm's lawyers" rule />
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-16">
            {sorted.map((person) => (
              <article key={person.slug} className="flex flex-col gap-5">
                <div className="relative aspect-square w-full overflow-hidden bg-paper-2">
                  <Image
                    src={person.photo}
                    alt={`Portrait of ${person.name}`}
                    fill
                    sizes="(min-width: 768px) 320px, 100vw"
                    className="object-cover [filter:saturate(0.8)]"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium leading-tight text-ink">
                    {person.name}
                  </h3>
                  <Eyebrow className="mt-1">{person.role}</Eyebrow>
                </div>
                <p className="font-sans text-sm leading-relaxed text-body">{person.bio[0]}</p>
                <div className="mt-auto flex flex-col gap-1">
                  <a
                    href={`mailto:${person.email}`}
                    className="font-mono text-sm text-ink underline-offset-4 hover:text-ink-soft hover:underline"
                  >
                    {person.email}
                  </a>
                  {person.slug === "imran-gazi" ? (
                    <Link
                      href="/firm/leadership"
                      className="font-sans text-xs uppercase tracking-caps text-muted hover:text-ink"
                    >
                      Full profile →
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
