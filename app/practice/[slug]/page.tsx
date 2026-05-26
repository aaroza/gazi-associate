import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Prose } from "@/components/Prose";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { getPractice, practiceAreas } from "@/content/practice";
import { getPerson } from "@/content/people";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const area = getPractice(params.slug);
  if (!area) return {};
  return {
    title: `${area.title} · Gazi & Associates`,
    description: area.summary,
  };
}

export default function PracticeAreaPage({ params }: PageProps) {
  const area = getPractice(params.slug);
  if (!area) notFound();

  const leadPartner = getPerson(area.leadPartnerSlug);

  return (
    <>
      <PageHero
        eyebrow="Practice"
        heading={area.title}
        subtitle={area.summary}
        intro={area.intro}
      />

      {area.sections?.map((section, i) => (
        <Section key={i} tone="paper" divider="top">
          <Container>
            <SectionHeading heading={section.heading} rule />
            <Prose className="mt-10">
              {section.paragraphs.map((paragraph, j) => (
                <p key={j}>{paragraph}</p>
              ))}
            </Prose>
          </Container>
        </Section>
      ))}

      {area.representativeMatters && area.representativeMatters.length > 0 ? (
        <Section tone="paper" divider="top">
          <Container>
            <SectionHeading
              eyebrow="Representative work"
              heading="Illustrative examples of the type of work the firm undertakes."
              rule
            />
            {area.representativeMattersNote ? (
              <p className="mt-6 max-w-prose font-sans text-sm text-muted">
                {area.representativeMattersNote}
              </p>
            ) : null}
            <ul className="mt-10 max-w-prose space-y-6 font-sans text-base leading-relaxed text-body">
              {area.representativeMatters.map((matter, i) => (
                <li key={i} className="border-t border-rule pt-6">
                  {matter}
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <Section tone="paper" divider="top">
        <Container>
          <SectionHeading heading="Practice contacts" />
          {leadPartner ? (
            <div className="mt-8">
              <p className="font-serif text-2xl font-medium leading-tight text-ink">
                {leadPartner.name}, {leadPartner.role}
              </p>
              <p className="mt-2">
                <a
                  href={`mailto:${leadPartner.email}`}
                  className="font-mono text-sm text-ink underline-offset-4 hover:text-ink-soft hover:underline"
                >
                  {leadPartner.email}
                </a>
              </p>
            </div>
          ) : null}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Request a consultation</Button>
            <Button href="/practice" variant="ghost">
              All practice areas
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
