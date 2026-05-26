import Image from "next/image";

type PersonCardProps = {
  name: string;
  role: string;
  photo: string;
  bio: string;
  memberships?: ReadonlyArray<string>;
  email: string;
};

export function PersonCard({ name, role, photo, bio, memberships = [], email }: PersonCardProps) {
  return (
    <article className="flex flex-col gap-6">
      <div className="relative aspect-square w-full overflow-hidden bg-paper-2">
        <Image
          src={photo}
          alt={`Portrait of ${name}`}
          fill
          sizes="(min-width: 768px) 320px, 100vw"
          className="object-cover [filter:saturate(0.8)]"
        />
      </div>

      <div>
        <h3 className="font-serif text-2xl font-medium leading-tight text-ink">{name}</h3>
        <p className="mt-1 font-sans text-xs uppercase tracking-caps text-gold">{role}</p>
      </div>

      <p className="max-w-prose font-sans text-base leading-relaxed text-body">{bio}</p>

      {memberships.length > 0 ? (
        <div>
          <p className="font-sans text-xs uppercase tracking-caps text-muted">Memberships</p>
          <ul className="mt-2 space-y-1.5 font-sans text-sm text-body">
            {memberships.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <a
        href={`mailto:${email}`}
        className="font-mono text-sm text-ink underline-offset-4 hover:text-ink-soft hover:underline"
      >
        {email}
      </a>
    </article>
  );
}
