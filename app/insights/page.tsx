import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { InsightCard } from "@/components/InsightCard";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { insights } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights · Gazi & Associates",
  description:
    "Commentary from Gazi & Associates on Bangladesh tax, corporate and regulatory developments.",
};

export default function InsightsPage() {
  const sorted = [...insights].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero
        eyebrow="Insights"
        heading="Commentary"
        subtitle="Short notes from the firm on Bangladesh tax, corporate and regulatory developments."
      />

      <Section tone="paper" divider="top">
        <Container>
          <div>
            {sorted.map((insight) => (
              <InsightCard
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                practiceLabel={insight.practiceLabel}
                headline={insight.title}
                date={insight.date}
                dek={insight.dek}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
