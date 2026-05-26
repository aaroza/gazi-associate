import Image from "next/image";
import Link from "next/link";

import { Button } from "./Button";

type HeroProps = {
  eyebrow?: string;
  heading: ReadonlyArray<string>;
  subtitle: string;
  cta: { href: string; label: string };
  secondaryLink?: { href: string; label: string };
  image?: { src: string; alt: string };
};

export function Hero({ eyebrow, heading, subtitle, cta, secondaryLink, image }: HeroProps) {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-content grid-cols-1 md:grid-cols-[45fr_55fr]">
        <div className="px-6 py-24 md:py-40 md:pl-10 md:pr-12 lg:pr-16">
          {eyebrow ? (
            <p className="font-sans text-xs uppercase tracking-caps text-gold">{eyebrow}</p>
          ) : null}

          <h1 className="mt-6 font-serif text-3xl font-medium leading-tight text-ink md:leading-display">
            {heading.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-[36ch] font-sans text-base leading-relaxed text-ink/75 md:text-subhead">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col items-start gap-5">
            <Button href={cta.href}>{cta.label}</Button>
            {secondaryLink ? (
              <Link
                href={secondaryLink.href}
                className="font-sans text-xs uppercase tracking-caps text-muted hover:text-ink"
              >
                {secondaryLink.label}
              </Link>
            ) : null}
          </div>
        </div>

        {image ? (
          <div className="relative min-h-[360px] md:min-h-[520px]">
            <div
              aria-hidden
              className="absolute bottom-6 left-0 top-6 hidden w-px bg-rule md:block"
            />
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_0_1px_rgba(11,30,63,0.08)]"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
