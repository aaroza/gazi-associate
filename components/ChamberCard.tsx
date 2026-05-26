import Image from "next/image";

type ChamberCardProps = {
  name: string;
  address: ReadonlyArray<string>;
  leadLawyer: string;
  phone?: string;
  email: string;
  image?: { src: string; alt: string };
  dividedLeft?: boolean;
};

export function ChamberCard({
  name,
  address,
  leadLawyer,
  phone,
  email,
  image,
  dividedLeft = false,
}: ChamberCardProps) {
  const telHref = phone ? `tel:${phone.replace(/[^+\d]/g, "")}` : undefined;
  const contentClass = `pb-6 pt-8 md:pt-10 ${dividedLeft ? "md:border-l md:border-rule md:pl-8" : ""}`.trim();

  return (
    <article className="flex flex-col">
      {image ? (
        <div className="relative aspect-[3/2] w-full overflow-hidden bg-ink">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_0_1px_rgba(11,30,63,0.08)]"
          />
        </div>
      ) : null}

      <div className={contentClass}>
        <h3 className="font-serif text-2xl font-medium leading-tight text-ink">{name}</h3>

        <address className="mt-5 font-mono text-sm not-italic leading-relaxed text-body">
          {address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>

        <dl className="mt-6 space-y-4">
          <div>
            <dt className="font-sans text-xs uppercase tracking-caps text-muted">Lead counsel</dt>
            <dd className="mt-1 font-sans text-base text-ink">{leadLawyer}</dd>
          </div>
          {phone && telHref ? (
            <div>
              <dt className="font-sans text-xs uppercase tracking-caps text-muted">Telephone</dt>
              <dd className="mt-1 font-mono text-sm text-ink">
                <a href={telHref} className="hover:text-ink-soft">
                  {phone}
                </a>
              </dd>
            </div>
          ) : null}
          <div>
            <dt className="font-sans text-xs uppercase tracking-caps text-muted">Email</dt>
            <dd className="mt-1 font-mono text-sm text-ink">
              <a href={`mailto:${email}`} className="hover:text-ink-soft">
                {email}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
