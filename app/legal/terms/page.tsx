import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHero } from "@/components/PageHero";
import { Prose } from "@/components/Prose";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { termsCopy } from "@/content/copy/legal";

export const metadata: Metadata = {
  title: "Terms of engagement · Gazi & Associates",
  description: "The basis on which Gazi & Associates accepts and conducts instructions.",
};

export default function TermsPage() {
  const effective = formatDate(termsCopy.effectiveDate);

  return (
    <>
      <PageHero
        eyebrow="Legal"
        heading="Terms of engagement"
        subtitle={termsCopy.intro[0]}
        meta={<Eyebrow tone="muted">Effective {effective}</Eyebrow>}
      />

      <Section tone="paper" divider="top">
        <Container>
          <Prose>
            {termsCopy.intro.slice(1).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Prose>

          <div className="mt-16 flex flex-col gap-16">
            {termsCopy.sections.map((section, i) => (
              <div key={i} className="border-t border-rule pt-12">
                <SectionHeading heading={section.heading} level={2} />
                <Prose className="mt-6 space-y-5">
                  {section.paragraphs.map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </Prose>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

function formatDate(value: string): string {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
