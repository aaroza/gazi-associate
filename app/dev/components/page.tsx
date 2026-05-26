import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Button } from "@/components/Button";
import { ChamberCard } from "@/components/ChamberCard";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { InsightCard } from "@/components/InsightCard";
import { PersonCard } from "@/components/PersonCard";
import { PracticeCard } from "@/components/PracticeCard";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Component preview · Gazi & Associates (dev)",
  robots: { index: false, follow: false },
};

export default function DevComponentsPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <div>
      <Specimen id="hero" title="Hero">
        <Hero
          eyebrow="Est. 2014 · Dhaka · Jashore · London"
          heading={["Counsel on tax,", "corporate and regulatory", "matters in Bangladesh."]}
          subtitle="Gazi & Associates advises businesses, investors and individuals from chambers in Dhaka, Jashore and London."
          cta={{ href: "/contact", label: "Request a consultation" }}
          secondaryLink={{ href: "/insights", label: "Read the firm’s recent commentary →" }}
          image={{
            src: "/hero/dhaka-architectural.svg",
            alt: "Architectural composition — pediment, columns and stylobate",
          }}
        />
      </Specimen>

      <Specimen id="section-heading" title="SectionHeading">
        <Container className="py-16">
          <SectionHeading eyebrow="Practice" heading="What the firm does" rule />
        </Container>
      </Specimen>

      <Specimen id="practice-card" title="PracticeCard">
        <Container className="py-12">
          <PracticeCard
            href="/practice/tax"
            title="Tax & NBR Advisory"
            summary="Income tax, transfer pricing, audits, appeals and tribunal representation for corporate and individual clients."
          />
          <PracticeCard
            href="/practice/corporate"
            title="Corporate & Commercial"
            summary="Company formation, joint ventures, shareholder agreements, regulatory licensing and ongoing corporate counsel."
          />
        </Container>
      </Specimen>

      <Specimen id="chamber-card" title="ChamberCard">
        <Container className="grid gap-12 py-12 md:grid-cols-3">
          <ChamberCard
            name="Dhaka"
            address={["Room 06, 4th Floor, GA Bhaban", "8 Purana Paltan, Dhaka 1000"]}
            leadLawyer="Md. Imran Gazi"
            phone="+880 1712 355973"
            email="chambers@gazilegal.com"
          />
          <ChamberCard
            name="Jashore"
            address={["LB Tower, 3rd Floor, Noapara Bazar", "Abhaynagar, Jashore 7460"]}
            leadLawyer="Md. Imran Gazi"
            phone="+880 1712 355973"
            email="chambers@gazilegal.com"
          />
          <ChamberCard
            name="London"
            address={["143 Cranbrook Road", "Ilford, Essex IG1 4PU"]}
            leadLawyer="Md. Imran Gazi"
            email="chambers@gazilegal.com"
          />
        </Container>
      </Specimen>

      <Specimen id="insight-card" title="InsightCard">
        <Container className="py-12">
          <InsightCard
            href="/insights/finance-act-recurring-themes-foreign-owned"
            practiceLabel="Tax"
            headline="Reading the Finance Act: recurring themes for foreign-owned companies"
            date="2026-05-10"
            dek="The annual Finance Act sets the surface; the recurring themes underneath it are what determine how foreign-owned companies experience the year ahead in Bangladesh."
          />
          <InsightCard
            href="/insights/nbr-audits-preparing-for-the-first-notice"
            practiceLabel="Tax"
            headline="NBR audits: what to do when the first notice arrives"
            date="2026-03-22"
            dek="An NBR audit begins with a notice. The decisions taken in the first two weeks of that audit shape what is possible at every stage that follows."
          />
        </Container>
      </Specimen>

      <Specimen id="person-card" title="PersonCard">
        <Container className="py-12">
          <div className="grid gap-12 md:grid-cols-3">
            <PersonCard
              name="Md. Imran Gazi"
              role="Founding Partner"
              photo="/dev/placeholder-portrait.svg"
              bio="Mr. Gazi advises Bangladeshi and foreign clients on tax, VAT and corporate matters, and represents clients before the High Court Division of the Supreme Court of Bangladesh and the relevant tax and VAT tribunals."
              memberships={[
                "Bangladesh Bar Council",
                "Dhaka Bar Association",
                "Dhaka Taxes Bar Association",
              ]}
              email="imran.gazi@gazilegal.com"
            />
          </div>
        </Container>
      </Specimen>

      <Specimen id="button" title="Button">
        <Container className="flex flex-wrap items-start gap-4 py-12">
          <Button href="/contact">Request a consultation</Button>
          <Button href="/firm" variant="ghost">
            About the firm
          </Button>
          <Button disabled>Disabled primary</Button>
        </Container>
      </Specimen>

      <Specimen id="consultation-form" title="ConsultationForm">
        <Container className="py-12">
          <div className="max-w-prose">
            <ConsultationForm />
          </div>
        </Container>
      </Specimen>
    </div>
  );
}

function Specimen({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-rule">
      <Container className="pb-2 pt-10">
        <p className="font-mono text-xs uppercase tracking-caps text-muted">{title}</p>
      </Container>
      {children}
    </section>
  );
}
