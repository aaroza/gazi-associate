import { Button } from "@/components/Button";
import { ChamberCard } from "@/components/ChamberCard";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Hero } from "@/components/Hero";
import { InsightCard } from "@/components/InsightCard";
import { PracticeCard } from "@/components/PracticeCard";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { home } from "@/content/copy/home";
import { insights } from "@/content/insights";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={home.hero.eyebrow}
        heading={home.hero.heading}
        subtitle={home.hero.subtitle}
        cta={home.hero.cta}
        secondaryLink={home.hero.secondaryLink}
        image={home.hero.image}
      />

      <Section tone="paper-2">
        <Container>
          <SectionHeading eyebrow={home.firm.eyebrow} heading={home.firm.heading} rule />
          <p className="mt-10 max-w-prose font-sans text-lg leading-relaxed text-body">
            {home.firm.body}
          </p>
          <div className="mt-10">
            <Button href={home.firm.cta.href} variant="ghost">
              {home.firm.cta.label}
            </Button>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[33fr_67fr] md:gap-16">
            <div>
              <SectionHeading
                eyebrow={home.practice.eyebrow}
                heading={home.practice.heading}
                rule
              />
            </div>
            <div>
              <div>
                {home.practice.items.map((item) => (
                  <PracticeCard key={item.href} {...item} />
                ))}
              </div>
              <div className="mt-12">
                <Button href={home.practice.cta.href} variant="ghost">
                  {home.practice.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper-2">
        <Container>
          <Eyebrow>{home.chambers.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-serif text-2xl font-medium italic leading-tight text-ink md:text-[2rem]">
            Dhaka<span className="px-3">·</span>Jashore<span className="px-3">·</span>London
          </h2>
          <hr className="mt-6 w-16 border-t border-rule" />

          <div className="mt-16 grid grid-cols-1 gap-y-12 md:mt-20 md:grid-cols-3 md:gap-y-0">
            {home.chambers.items.map((c, idx) => (
              <ChamberCard key={c.slug} {...c} dividedLeft={idx > 0} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <SectionHeading eyebrow={home.insights.eyebrow} heading={home.insights.heading} rule />
          <div className="mt-12">
            {[...insights]
              .sort((a, b) => (a.date < b.date ? 1 : -1))
              .slice(0, 3)
              .map((insight) => (
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
          <div className="mt-12">
            <Button href={home.insights.cta.href} variant="ghost">
              {home.insights.cta.label}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
