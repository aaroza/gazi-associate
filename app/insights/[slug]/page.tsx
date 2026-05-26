import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Prose } from "@/components/Prose";
import { Section } from "@/components/Section";
import { getInsight, insights } from "@/content/insights";
import { getPerson } from "@/content/people";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const insight = getInsight(params.slug);
  if (!insight) return {};
  return {
    title: insight.seoTitle,
    description: insight.seoDescription,
  };
}

export default function InsightArticlePage({ params }: PageProps) {
  const insight = getInsight(params.slug);
  if (!insight) notFound();

  const author = getPerson(insight.authorSlug);
  const formattedDate = formatDate(insight.date);

  return (
    <article>
      <Section tone="paper" density="hero">
        <Container>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Eyebrow>{insight.practiceLabel}</Eyebrow>
            <time dateTime={insight.date}>
              <Eyebrow tone="muted" as="span">
                {formattedDate}
              </Eyebrow>
            </time>
          </div>
          <h1 className="mt-6 max-w-prose font-serif text-4xl font-medium leading-tight text-ink md:text-hero">
            {insight.title}
          </h1>
          <p className="mt-6 max-w-prose font-sans text-lg leading-relaxed text-body">
            {insight.dek}
          </p>
          {author ? (
            <p className="mt-8 font-sans text-sm text-muted">
              By <span className="text-ink">{author.name}</span>, {author.role}
            </p>
          ) : null}
        </Container>
      </Section>

      <Section tone="paper" divider="top">
        <Container>
          <Prose>
            {insight.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Prose>
        </Container>
      </Section>

      <Section tone="paper" divider="top">
        <Container>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact">Request a consultation</Button>
            <Button href="/insights" variant="ghost">
              All insights
            </Button>
          </div>
        </Container>
      </Section>
    </article>
  );
}

function formatDate(value: string): string {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
