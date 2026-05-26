import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PracticeCard } from "@/components/PracticeCard";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { practiceAreas } from "@/content/practice";

export const metadata: Metadata = {
  title: "Practice · Gazi & Associates",
  description:
    "Gazi & Associates advises on tax, VAT and customs, corporate and commercial, litigation, cross-border, civil and criminal matters across Bangladesh and the UK–Bangladesh corridor.",
};

export default function PracticePage() {
  const sorted = [...practiceAreas].sort((a, b) => a.order - b.order);

  return (
    <>
      <PageHero
        eyebrow="Practice"
        heading="What the firm does"
        subtitle="The firm's work spans tax, VAT and customs, corporate counsel, litigation, and cross-border advisory. Each area is led by a senior lawyer with direct experience of the relevant Bangladesh practice."
      />

      <Section tone="paper" divider="top">
        <Container>
          <SectionHeading heading="Practice areas" rule />
          <div className="mt-10">
            {sorted.map((area) => (
              <PracticeCard
                key={area.slug}
                href={`/practice/${area.slug}`}
                title={area.title}
                summary={area.summary}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
