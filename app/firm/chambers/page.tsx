import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { chambers } from "@/content/chambers";

export const metadata: Metadata = {
  title: "Chambers · Gazi & Associates",
  description: "Gazi & Associates operates from chambers in Dhaka, Jashore and London.",
};

export default function ChambersPage() {
  return (
    <>
      <PageHero
        eyebrow="The firm"
        heading="Chambers"
        subtitle="The firm operates from three chambers — a principal office in Dhaka, a regional chamber in Jashore, and a London chamber serving UK-based clients on Bangladesh-related matters."
      />

      <Section tone="paper" divider="top">
        <Container>
          {chambers.map((chamber) => (
            <article
              key={chamber.slug}
              id={chamber.slug}
              className="grid gap-10 border-t border-rule py-16 md:grid-cols-[1fr_1fr] md:gap-16 md:py-20"
            >
              <div>
                <h2 className="font-serif text-3xl font-medium leading-tight text-ink">
                  {chamber.name}
                </h2>
                {chamber.blurb ? (
                  <p className="mt-5 max-w-prose font-sans text-base leading-relaxed text-body">
                    {chamber.blurb}
                  </p>
                ) : null}
              </div>

              <div>
                <address className="font-mono text-sm not-italic leading-relaxed text-body">
                  {chamber.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>

                <dl className="mt-6 space-y-4">
                  <Row label="Lead counsel" value={chamber.leadLawyer} />
                  {chamber.phone ? (
                    <Row
                      label="Telephone"
                      value={
                        <a
                          href={`tel:${chamber.phone.replace(/[^+\d]/g, "")}`}
                          className="font-mono text-sm text-ink hover:text-ink-soft"
                        >
                          {chamber.phone}
                        </a>
                      }
                    />
                  ) : null}
                  <Row
                    label="Email"
                    value={
                      <a
                        href={`mailto:${chamber.email}`}
                        className="font-mono text-sm text-ink hover:text-ink-soft"
                      >
                        {chamber.email}
                      </a>
                    }
                  />
                </dl>
              </div>
            </article>
          ))}
        </Container>
      </Section>
    </>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <Eyebrow tone="muted" as="dt">
        {label}
      </Eyebrow>
      <dd className="mt-1 font-sans text-base text-ink">{value}</dd>
    </div>
  );
}
