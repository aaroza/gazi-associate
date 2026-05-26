import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { Section } from "./Section";

type PageHeroProps = {
  eyebrow: string;
  heading: string;
  subtitle?: string;
  intro?: ReadonlyArray<string>;
  meta?: React.ReactNode;
};

export function PageHero({ eyebrow, heading, subtitle, intro, meta }: PageHeroProps) {
  return (
    <Section tone="paper" density="default">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-prose font-serif text-3xl font-medium leading-tight text-ink">
          {heading}
        </h1>
        {subtitle ? (
          <p className="mt-8 max-w-prose font-sans text-base leading-relaxed text-ink/75 md:text-subhead">
            {subtitle}
          </p>
        ) : null}
        {intro && intro.length > 0 ? (
          <div className="mt-10 max-w-prose space-y-6 font-sans text-base leading-relaxed text-body">
            {intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        ) : null}
        {meta ? <div className="mt-8">{meta}</div> : null}
      </Container>
    </Section>
  );
}
