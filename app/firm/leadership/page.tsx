import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHero } from "@/components/PageHero";
import { Prose } from "@/components/Prose";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { leadershipCopy } from "@/content/copy/leadership";
import { people } from "@/content/people";

export const metadata: Metadata = {
  title: "Leadership · Gazi & Associates",
  description: leadershipCopy.hero.subtitle,
};

export default function LeadershipPage() {
  const sorted = [...people].sort((a, b) => a.order - b.order);

  return (
    <>
      <PageHero
        eyebrow={leadershipCopy.hero.eyebrow}
        heading={leadershipCopy.hero.heading}
        subtitle={leadershipCopy.hero.subtitle}
      />

      <Section tone="paper" divider="top">
        <Container>
          <div className="flex flex-col gap-24">
            {sorted.map((person) => (
              <article
                key={person.slug}
                className="grid gap-8 border-t border-rule pt-10 md:grid-cols-[280px_1fr] md:gap-16"
              >
                <div className="relative aspect-square w-full max-w-[280px] overflow-hidden bg-paper-2">
                  <Image
                    src={person.photo}
                    alt={`Portrait of ${person.name}`}
                    fill
                    sizes="(min-width: 768px) 280px, 100vw"
                    className="object-cover [filter:saturate(0.8)]"
                  />
                </div>

                <div>
                  <h2 className="font-serif text-3xl font-medium leading-tight text-ink">
                    {person.name}
                  </h2>
                  <Eyebrow className="mt-2">{person.role}</Eyebrow>

                  <Prose className="mt-6">
                    {person.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </Prose>

                  {person.memberships.length > 0 ? (
                    <CredentialRow label="Memberships" items={person.memberships} />
                  ) : null}
                  {person.registrations.length > 0 ? (
                    <CredentialRow label="Regulatory registrations" items={person.registrations} />
                  ) : null}
                  {person.rightsOfAudience.length > 0 ? (
                    <CredentialRow label="Rights of audience" items={person.rightsOfAudience} />
                  ) : null}

                  <div className="mt-6">
                    <a
                      href={`mailto:${person.email}`}
                      className="font-mono text-sm text-ink underline-offset-4 hover:text-ink-soft hover:underline"
                    >
                      {person.email}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper" divider="top">
        <Container>
          <SectionHeading heading="Joining the firm" />
          <Prose className="mt-6">
            {leadershipCopy.recruiting.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Prose>
        </Container>
      </Section>
    </>
  );
}

function CredentialRow({ label, items }: { label: string; items: ReadonlyArray<string> }) {
  return (
    <div className="mt-6">
      <Eyebrow tone="muted">{label}</Eyebrow>
      <p className="mt-1 font-sans text-sm text-body">{items.join(" · ")}</p>
    </div>
  );
}
