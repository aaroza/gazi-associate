import type { Metadata } from "next";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Prose } from "@/components/Prose";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { firmCopy } from "@/content/copy/firm";

export const metadata: Metadata = {
  title: "About the firm · Gazi & Associates",
  description: firmCopy.hero.subtitle,
};

export default function FirmPage() {
  return (
    <>
      <PageHero
        eyebrow={firmCopy.hero.eyebrow}
        heading={firmCopy.hero.heading}
        subtitle={firmCopy.hero.subtitle}
      />

      {/* Continuation paragraphs — attach to the hero, no top divider, compact density. */}
      <Section tone="paper" density="compact">
        <Container>
          <Prose>
            {firmCopy.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Prose>
        </Container>
      </Section>

      <Section tone="paper" divider="top">
        <Container>
          <SectionHeading
            eyebrow={firmCopy.howTheFirmWorks.eyebrow}
            heading={firmCopy.howTheFirmWorks.heading}
            rule
          />
          <Prose className="mt-10">
            {firmCopy.howTheFirmWorks.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Prose>
        </Container>
      </Section>

      <Section tone="paper" divider="top">
        <Container>
          <SectionHeading
            eyebrow={firmCopy.regulatory.eyebrow}
            heading={firmCopy.regulatory.heading}
            rule
          />
          <Prose className="mt-10">
            {firmCopy.regulatory.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Prose>
        </Container>
      </Section>

      <Section tone="paper" divider="top">
        <Container>
          <SectionHeading
            eyebrow={firmCopy.chambersIntro.eyebrow}
            heading={firmCopy.chambersIntro.heading}
            rule
          />
          <Prose className="mt-10">
            {firmCopy.chambersIntro.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Prose>
          <div className="mt-10 flex flex-wrap gap-4">
            {firmCopy.ctas.map((cta) => (
              <Button key={cta.href} href={cta.href} variant="ghost">
                {cta.label}
              </Button>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
