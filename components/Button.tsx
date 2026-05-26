import Link from "next/link";

type Variant = "primary" | "ghost";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href">;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center px-6 py-3 font-sans text-sm font-medium leading-none tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-burgundy text-paper hover:bg-ink",
  ghost: "border border-ink text-ink hover:bg-paper-2",
};

export function Button(props: ButtonProps) {
  const variant: Variant = props.variant ?? "primary";
  const cls = `${base} ${variants[variant]} ${props.className ?? ""}`.trim();

  if ("href" in props && props.href !== undefined) {
    const { href, children, variant: _v, className: _c, ...rest } = props;
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  const { children, variant: _v, className: _c, ...rest } = props;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
