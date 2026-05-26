# CLAUDE.md — Gazi & Associates Website

## Project

You are building the website for **Gazi & Associates**, a commercial law firm
headquartered in Dhaka, with chambers in Jashore and London. The firm advises
on tax, corporate, regulatory and litigation matters.

This site replaces the existing site at advocategazi.com, which is being
retired. The new site is a complete rebrand, not an iteration.

## What this site is

A restrained, editorial, premium law-firm website. The closest reference points
in tone and visual register are:

- slaughterandmay.com
- cravath.com
- khaitanco.com
- bharucha.in

It is **not** a marketing site, a startup site, or a service-business site.
There are no gradients, no hero videos, no testimonial carousels, no
"trusted by" logo strips, no emojis, no exclamation marks, no stock photos,
no animated counters, no scroll-jacking, no chat widgets.

Premium in this category is achieved through restraint, typography, white
space, and density of substantive content. If a design choice would not appear
on slaughterandmay.com, it does not appear here.

## Stack

- **Framework:** Next.js 14 (App Router), TypeScript strict mode
- **Styling:** Tailwind CSS with a custom design token layer (see below)
- **Content:** MDX files in `/content`, parsed at build time via
  `next-mdx-remote` or `contentlayer` (pick contentlayer if it builds cleanly
  on the target Node version; fall back to `next-mdx-remote` otherwise)
- **Forms:** Next.js server actions, Resend for email delivery,
  Zod for validation, hCaptcha or Cloudflare Turnstile for spam protection
- **Email:** Resend, with DKIM/SPF/DMARC configured on the live domain
- **Hosting:** Vercel
- **Domain:** `gazilegal.com` (confirm availability; fallbacks
  `gaziassociates.com`, `gazichambers.com`)
- **Analytics:** None in v1. Leave a single commented placeholder in
  `app/layout.tsx` where Plausible can be added later.
- **No client-side JavaScript** is added unless a feature genuinely requires
  it. The site should function with JS disabled wherever practical.

## Design tokens

Define these in `tailwind.config.ts` and `app/globals.css` as CSS custom
properties. Do not hard-code colours or font sizes anywhere in components.

### Colours

--color-ink:       #0B1E3F   /* Oxford Navy — primary, used for headings, header, footer /
--color-ink-soft:  #1A2A4A   / slightly lighter navy for hover states /
--color-body:      #1A1A1A   / charcoal — all body text /
--color-paper:     #F5F1EA   / warm ivory — primary background /
--color-paper-2:   #EDE7DA   / secondary background, used for alternating sections /
--color-rule:      #C9BFA8   / hairline rules, borders /
--color-gold:      #B08D57   / antique gold — used sparingly, accents only /
--color-burgundy:  #6B1F2A   / CTA only, used once per page maximum /
--color-muted:     #6B6B6B   / secondary text, metadata, captions */

No other colours exist in the design system. If you find yourself reaching
for a new colour, you are solving the wrong problem.

### Typography

- **Serif (headings, hero, pull quotes):** Cormorant Garamond, weights 400 and 500. Self-host via `next/font/google`.
- **Sans (body, navigation, UI):** Inter Tight, weights 400, 500, 600. Self-host via `next/font/google`.
- **Mono (citations, addresses, code if any):** JetBrains Mono, weight 400.

Size scale (rem):

text-xs:   0.75
text-sm:   0.875
text-base: 1.0625    /* body — slightly larger than default for editorial feel /
text-lg:   1.25
text-xl:   1.5
text-2xl:  1.875
text-3xl:  2.5
text-4xl:  3.25
text-hero: 4.25      / hero only, serif */

Line-height: body uses `leading-relaxed` (1.625). Headings use `leading-tight`
(1.15). No exceptions.

### Spacing & layout

- **Max content width:** 1180px. Editorial text columns max 680px.
- **Section vertical padding:** 96px desktop, 64px mobile (`py-24 md:py-32`).
- **Generous white space is the design.** When in doubt, double the padding.

### Rules and borders

- 1px solid `--color-rule` for all dividers
- No drop shadows anywhere
- No border-radius above 2px. Buttons and inputs are rectilinear.

## Voice and copy rules

All copy is set already (see `/content/copy/` once seeded). When generating
new copy or placeholder text, follow these rules:

1. **British English.** *Advise* not *advice* when used as a verb;
   *organisation*, *recognised*, *practising*.
2. **No marketing adjectives.** Banned words: *leading, premier, best,
   trusted, expert, top, world-class, innovative, dynamic, passionate,
   solutions, cutting-edge*.
3. **Short declarative sentences.** Average 18 words. Maximum 28.
4. **No exclamation marks. No emoji. No first-person singular ("I").**
   Use *the firm* or *we*.
5. **No "free quote", no "get in touch today", no urgency language.**
   The CTA is *Request a consultation*. Nothing else.
6. **Numbers in figures from 10 upward** (Bangladesh and UK convention).
7. **Currency:** BDT and GBP, written *BDT 1,500,000* and *£10,000*.
   Never *Tk.* or *Taka* in body copy.

## Routing and information architecture

/                                    Home
/firm                                About the firm
/firm/leadership                     Principal & senior counsel
/firm/team                           Full team
/firm/chambers                       Dhaka · Jashore · London
/practice                            Practice overview
/practice/tax                        Tax & NBR Advisory
/practice/vat-customs                VAT & Customs
/practice/corporate                  Corporate & Commercial
/practice/litigation                 Litigation & High Court
/practice/cross-border               Cross-Border & UK Desk
/practice/civil                      Civil & Property
/practice/criminal                   Criminal
/insights                            Index of articles
/insights/[slug]                     Individual article (MDX)
/contact                             Contact + chambers
/legal/privacy                       Privacy notice
/legal/terms                         Terms of engagement

Every URL is lowercase, no trailing slash, no `.html`. 301 redirect map for
the old site lives in `next.config.mjs`:

/practice-area      → /practice
/about-us           → /firm
/our-team           → /firm/team
/contact            → /contact

## Components to build

Build these as the foundational set. Do not create variants until a real page
needs one.

- `<SiteHeader />` — wordmark left, navigation right, single tier, no
  hamburger drawer below `md` (use a simple inline expanding list)
- `<SiteFooter />` — three columns: chambers, practice, the firm. Bar
  memberships displayed as a small-caps line above copyright.
- `<Wordmark />` — SVG, "Gazi & Associates" in Cormorant Garamond 500,
  with the strapline *Advocates · Tax Counsel · Corporate Advisers* in
  small caps below at 60% size.
- `<Hero />` — used on the homepage only. Full-width, ivory background,
  serif heading, single sans subtitle, single CTA. No image in v1.
- `<SectionHeading />` — eyebrow (small caps, gold) + serif heading + optional
  rule beneath.
- `<PracticeCard />` — used on home and practice index. Title in serif,
  one-sentence description in sans, hairline rule, no icons, no images.
- `<ChamberCard />` — address block, lead lawyer name, phone, email.
- `<InsightCard />` — practice tag (small caps), serif headline, date, dek.
  No image.
- `<PersonCard />` — name, role, headshot (square, 1:1, desaturated 20%),
  short bio, memberships, email.
- `<ConsultationForm />` — fields: name, organisation, jurisdiction (select:
  Bangladesh / United Kingdom / Other), matter type (select: Tax /
  Corporate / Litigation / Other), message. Submits via server action,
  emails `chambers@gazilegal.com`, returns to a `/contact/thank-you` route.
- `<Button />` — two variants only: `primary` (burgundy fill, ivory text)
  and `ghost` (transparent, navy text, hairline border). No icons.

## Content model

All long-form content lives in `/content` as MDX. Pages read from this
directory at build time. Schema:

### Insight (article)

Frontmatter:

```yaml
title: "Bangladesh Finance Act 2026: What changes for foreign-owned companies"
slug: "finance-act-2026-foreign-owned"
date: 2026-06-15
practice: "tax"           # one of the practice slugs
author: "imran-gazi"      # references /content/people/imran-gazi.mdx
dek: "A note on the 2026 amendments to corporate tax rates, transfer pricing reporting, and withholding obligations affecting non-resident shareholders."
seoTitle: "Bangladesh Finance Act 2026: foreign-owned companies | Gazi & Associates"
seoDescription: "..."
```

### Person

Frontmatter:

```yaml
name: "Md. Imran Gazi"
slug: "imran-gazi"
role: "Founding Partner"
order: 1
practiceAreas: ["tax", "corporate", "litigation"]
memberships:
  - "Bangladesh Bar Council"
  - "Dhaka Bar Association"
  - "Dhaka Taxes Bar Association"
registrations:
  - "Income Tax Practitioner, National Board of Revenue"
rightsOfAudience:
  - "Supreme Court of Bangladesh, High Court Division"
email: "imran.gazi@gazilegal.com"
languages: ["English", "Bengali"]
photo: "/people/imran-gazi.jpg"
```

### Practice area

Frontmatter:

```yaml
title: "Tax & NBR Advisory"
slug: "tax"
order: 1
leadPartner: "imran-gazi"
summary: "The firm advises corporate and individual clients on the full range of Bangladesh tax matters, from routine compliance to contested proceedings."
```

Body MDX contains the four-stream description and representative work.

## SEO and metadata

- `metadata` export on every route, set per page (no global title template
  that overrides).
- JSON-LD `LegalService` schema on home and `/firm`.
- JSON-LD `Attorney` schema on each person page.
- JSON-LD `Article` schema on each insight.
- OG images: a single, programmatically generated OG image template per
  route type, using `@vercel/og`. Background ivory, serif title in navy,
  thin gold rule, wordmark bottom-left. No photographs in OG images.
- Sitemap and robots.txt generated at build via `next-sitemap`.
- `hreflang` markup is set up but only points to `en` in v1.

## Accessibility

- WCAG 2.1 AA, verified with `axe` in CI.
- All interactive elements reachable by keyboard, visible focus ring
  (navy, 2px, 2px offset).
- Form fields have visible labels (no placeholder-as-label).
- Colour contrast for body on ivory: minimum 7:1. For gold on ivory, gold
  is decorative only — never used for text.
- All images have alt text. Decorative SVGs have `aria-hidden="true"`.

## Performance

- Lighthouse targets: Performance ≥ 95, Accessibility = 100, Best Practices
  ≥ 95, SEO = 100.
- LCP < 1.5s on 4G. Fonts preloaded, no layout shift.
- Images served as AVIF with WebP fallback via `next/image`. Aspect ratio
  always declared.
- No third-party scripts in v1.

## What not to do

- Do not install a UI library (no shadcn, no Radix beyond what's strictly
  needed for accessible primitives like dialog if a dialog is ever added).
  Components are built from scratch against the design tokens.
- Do not add testimonials, client logos, "as featured in", awards strips,
  case study counters, or trust badges. Premium law firms do not display
  these.
- Do not use stock photography of any kind. If a section needs imagery
  and no real photograph is available, the section uses typography only.
- Do not add a blog comments system, social share buttons, or related
  posts widgets. Insights stand alone.
- Do not generate placeholder Latin text. If real copy is missing, use
  bracketed editorial notes — e.g. `[Education and call year to confirm]`
  — so the gaps are visible at review time.
- Do not invent representative matters, client names, or case outcomes
  under any circumstances. These are subject to professional regulation.
  Use the bracketed-note convention above.
- Do not change founding year, address, or memberships without explicit
  instruction. The current site contains contradictions ("Founded in 500",
  "Founded in 2000") — the correct year must be supplied before publishing.

## Working order

When asked to build the site, proceed in this order. Do not skip ahead.

1. Initialise Next.js 14 project with TypeScript strict, Tailwind, ESLint,
   Prettier. Configure path alias `@/`.
2. Implement design tokens in Tailwind config and `globals.css`.
   Load fonts via `next/font/google`.
3. Build the foundational components listed above, in the order listed.
   Each component renders correctly in isolation before the next is
   started.
4. Build the layout (header, footer, root layout) and the homepage,
   wired to seeded MDX content under `/content`.
5. Build `/firm`, `/firm/leadership`, `/firm/chambers`.
6. Build `/practice` index and `/practice/tax` as the template practice
   page. The other practice pages are duplicates of the tax page with
   different MDX content — do not re-architect them.
7. Build `/insights` index and the `/insights/[slug]` route with one
   seeded article.
8. Build `/contact` with the consultation form and server action.
9. Build the legal pages (`/legal/privacy`, `/legal/terms`) — content TBD.
10. Configure redirects, sitemap, robots.txt, OG images, JSON-LD.
11. Run Lighthouse and axe. Fix any regression before declaring done.

At the end of each step, write a one-paragraph summary of what was built
and what the next step is. Do not start the next step without being told to.

## Out of scope for v1

- Bengali translation layer (architecture supports it; content does not exist)
- Headless CMS integration
- Client portal or matter-management features
- Online payment or fee estimator
- Newsletter signup
- Search across insights (add when there are 15+ articles)
- Careers / pupillage application form (Phase 2)

## Source content

All approved copy for Home, About the Firm, Leadership, and the Tax practice
page lives in `/content/copy/` as MDX files. Use it verbatim. Where the copy
contains bracketed notes (e.g. `[institution to confirm]`), preserve them
exactly — these are deliberate placeholders for the client to fill in,
not gaps for you to invent.

Copy for the remaining practice pages (Corporate, VAT, Litigation,
Cross-Border, Civil, Criminal) has not yet been written. When those pages
are built, use a clearly labelled `<EditorialPlaceholder />` component that
renders a visible bracketed note saying "Copy pending — do not publish."
This must be impossible to miss in review and must throw a build error if
`NODE_ENV === "production"`.

## Definition of done for v1 launch

- All routes in the IA above resolve and render
- Approved copy is in place for Home, /firm, /firm/leadership, /firm/chambers,
  /practice, /practice/tax, and one seeded insight
- All other pages render with `<EditorialPlaceholder />` blocks where copy
  is pending — the build refuses to deploy to production while any
  placeholder remains
- Consultation form delivers to `chambers@gazilegal.com` and the test
  inbox confirms receipt with DKIM/SPF/DMARC all passing
- 301 redirects from the old site are live and verified
- Lighthouse, axe, and TypeScript strict all clean
- Domain points to Vercel, SSL active, www → apex redirect configured
- DMARC policy at minimum `p=quarantine`
- A handover document at `/docs/HANDOVER.md` explains how to publish a
  new insight, add a team member, and update a chamber address