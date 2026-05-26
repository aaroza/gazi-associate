import type { Metadata } from "next";

import { ConsultationForm } from "@/components/ConsultationForm";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { chambers } from "@/content/chambers";

export const metadata: Metadata = {
  title: "Contact · Gazi & Associates",
  description:
    "Request a consultation or contact Gazi & Associates at our chambers in Dhaka, Jashore or London.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        heading="Request a consultation."
        subtitle="New enquiries are reviewed by a member of the firm and typically receive a response by email within two working days. Enquiries that fall outside the firm's practice areas will be acknowledged with that explanation."
      />

      <Section tone="paper" divider="top">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1fr] md:gap-24">
            <div>
              <SectionHeading heading="Enquiry form" rule />
              <p className="mt-6 max-w-prose font-sans text-sm leading-relaxed text-muted">
                All fields marked with an asterisk are required.
              </p>
              <div className="mt-10">
                <ConsultationForm />
              </div>
            </div>

            <div>
              <SectionHeading heading="Chambers" rule />
              <div className="mt-10 space-y-12">
                {chambers.map((chamber) => (
                  <div key={chamber.slug}>
                    <h3 className="font-serif text-xl font-medium leading-tight text-ink">
                      {chamber.name}
                    </h3>
                    <address className="mt-3 not-italic font-mono text-sm leading-relaxed text-body">
                      {chamber.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                    <div className="mt-4 space-y-1.5 font-mono text-sm">
                      {chamber.phone ? (
                        <a
                          href={`tel:${chamber.phone.replace(/[^+\d]/g, "")}`}
                          className="block text-ink hover:text-ink-soft"
                        >
                          {chamber.phone}
                        </a>
                      ) : null}
                      <a
                        href={`mailto:${chamber.email}`}
                        className="block text-ink hover:text-ink-soft"
                      >
                        {chamber.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
