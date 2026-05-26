# DESIGN-SYSTEM.md — Gazi & Associates

This is the canonical layer the site is built on. Every page composes from
the primitives below; no page hand-rolls heroes, section padding, or
eyebrow markup. If you find yourself writing the same Tailwind incantation
on two pages, that incantation belongs here as a primitive instead.

The visual identity (colours, fonts, register) lives in `CLAUDE.md`. The
refinement direction (imagery, asymmetry, density) lives in
`DESIGN-REFINEMENT.md`. This file is the implementation layer that makes
both possible without drift.

---

## Tokens

All tokens live in `tailwind.config.ts` and `app/globals.css`. The CSS
custom properties in `globals.css` are the runtime source of truth; the
Tailwind utilities reference them.

### Colour

| Token              | Value     | Use                                                    |
| ------------------ | --------- | ------------------------------------------------------ |
| `ink`              | `#0B1E3F` | Headings, header, footer, primary link colour          |
| `ink-soft`         | `#1A2A4A` | Hover state for ink                                    |
| `body`             | `#1A1A1A` | Body text                                              |
| `paper`            | `#F5F1EA` | Primary background                                     |
| `paper-2`          | `#EDE7DA` | Secondary background — alternating section tone        |
| `rule`             | `#C9BFA8` | Hairline rules and borders. Always 1px. Never thicker. |
| `gold`             | `#B08D57` | Eyebrows and small accents. Never used for body text.  |
| `burgundy`         | `#6B1F2A` | Primary CTA only. Maximum once per page.               |
| `muted`            | `#6B6B6B` | Secondary text, metadata, captions                     |

If you reach for any colour outside this list, you are solving the wrong
problem.

### Typography

**Families**

| Token        | Family             | Weights      | Use                                             |
| ------------ | ------------------ | ------------ | ----------------------------------------------- |
| `font-serif` | Cormorant Garamond | 400, 500     | Headings, hero, italic display, pull quotes    |
| `font-sans`  | Inter Tight        | 400, 500, 600| Body, navigation, eyebrows, UI                  |
| `font-mono`  | JetBrains Mono     | 400          | Addresses, telephone/email, citations           |

**Size scale** (rem)

| Token          | Size      | Role                                              |
| -------------- | --------- | ------------------------------------------------- |
| `text-xs`      | 0.75      | Eyebrow, metadata, caption                        |
| `text-sm`      | 0.875     | Small UI label, secondary metadata                |
| `text-base`    | 1.0625    | Default body                                      |
| `text-subhead` | 1.125     | Hero subhead, large lead body                     |
| `text-lg`      | 1.25      | Page intro paragraph, prominent body              |
| `text-xl`      | 1.5       | Small heading (rarely used)                       |
| `text-2xl`     | 1.875     | Card h3, person/chamber h3                        |
| `text-3xl`     | 2.5       | Section h2                                        |
| `text-4xl`     | 3.25      | Page h1 — mobile baseline                         |
| `text-display` | 3.5       | Special display (chambers italic, alt hero)       |
| `text-hero`    | 4.25      | Page h1 — desktop                                 |

**Line height**

| Token             | Value | Use                                       |
| ----------------- | ----- | ----------------------------------------- |
| `leading-display` | 1.05  | Display headings (homepage hero)          |
| `leading-tight`   | 1.15  | All other headings                        |
| `leading-relaxed` | 1.625 | Default body                              |
| `leading-prose`   | 1.7   | Long-form article body                    |

**Letter-spacing**

| Token             | Value  | Use                                       |
| ----------------- | ------ | ----------------------------------------- |
| `tracking-caps`   | 0.12em | All uppercase/small-caps text. One value. |

Earlier the codebase had both `tracking-caps` (0.12em) and
`tracking-eyebrow` (0.15em) doing visually-identical work — this was the
single biggest drift symptom. They are now collapsed to `tracking-caps`.

### Layout

| Token           | Value   | Use                                              |
| --------------- | ------- | ------------------------------------------------ |
| `max-w-content` | 1180px  | Page outer container                             |
| `max-w-prose`   | 680px   | Editorial body column                            |
| `max-w-narrow`  | 36ch    | Hero subhead and other constrained leads         |

Section vertical rhythm — there are only three values:

| Density   | Mobile     | Desktop    | Use                                              |
| --------- | ---------- | ---------- | ------------------------------------------------ |
| `hero`    | `py-24`    | `py-40`    | The homepage brand band (which contains a full-bleed image that fills the height). Not for `PageHero` — interior page heroes have shorter content and look stranded inside this padding. |
| `default` | `py-24`    | `py-32`    | Every standard content section. The default.     |
| `compact` | `py-16`    | `py-24`    | Reserved for "continuation" intro blocks and accent ribbons. Not the default for content sections. |

Horizontal gutters — single value across the site:

```
px-6 md:px-10
```

If you need a different vertical rhythm or horizontal padding, add a
density value here first; do not hand-roll.

### Section composition rules

Three rules govern how `<Section>` is applied across the site. These are
the rules whose drift was causing pages to feel visually inconsistent:

1. **Tone is `paper` by default.** Every post-hero content section is
   `tone="paper"`. The site does *not* alternate `paper`/`paper-2` to
   create rhythm — hairline rules between sections do that job. The
   `paper-2` tone is reserved for accent blocks (a future CTA banner,
   image-overlay band, or feature ribbon), not the standard editorial
   section.

2. **Density is `default` for standard content.** `compact` is *not* the
   default for content sections. It is reserved for two specific
   patterns: a continuation paragraph block that attaches to the hero
   (no top divider, tight spacing), and accent ribbons.

3. **Every post-hero section has `divider="top"`.** A single 1px hairline
   carries the section break. The continuation pattern above is the
   single exception.

The homepage is its own composition (the brand showcase) and uses the
bespoke `Hero` component plus alternating tones to build a distinct
visual rhythm; the rules above apply to every other page.

### Border-radius and shadow

- Border-radius is capped at 2px. Buttons, inputs, cards: all rectilinear.
- Shadows are forbidden anywhere except the inset edge on images
  (`inset 0 0 0 1px rgba(11,30,63,0.08)`), which is a token in itself —
  applied via the `Image`-wrapping primitives, not inline.

### Motion

This site has minimal motion by design. The only allowed motion is:

1. `transition-colors` on links and buttons (200ms ease) — colour-only
2. `group-hover:translate-x-2` on the homepage practice rows
3. Arrow fade-in on hover on the same rows

No parallax, no scroll-triggered reveals, no fade-in-on-scroll.

---

## Primitives

All primitives live in `components/`. Page code composes from these.
Never re-implement these patterns inline on a page.

### `<Container>`

Outer width + horizontal gutters. Wraps every section's body.

```tsx
<Container>
  …content…
</Container>
```

Renders: `mx-auto max-w-content px-6 md:px-10`

### `<Section>`

Section band with tone + vertical density + optional dividers.

```tsx
<Section tone="paper" density="default" divider="top">
  <Container>
    …content…
  </Container>
</Section>
```

| Prop      | Values                                | Default     |
| --------- | ------------------------------------- | ----------- |
| `tone`    | `"paper"` \| `"paper-2"`              | `"paper"`   |
| `density` | `"hero"` \| `"default"` \| `"compact"`| `"default"` |
| `divider` | `"top"` \| `"bottom"` \| `"both"` \| `"none"` | `"none"` |

### `<Eyebrow>`

The small-caps gold (or muted) label that introduces a heading or row.

```tsx
<Eyebrow>Practice</Eyebrow>
<Eyebrow tone="muted">10 May 2026</Eyebrow>
```

Renders: `font-sans text-xs uppercase tracking-caps text-{tone}`

There is **one tracking value** for all small-caps text in the site. If
you want a small-caps label, use this component; do not write the class
chain inline.

### `<PageHero>`

The hero pattern used by every non-home page (10 pages). Composes
`Section`, `Container`, `Eyebrow`, and an h1.

```tsx
<PageHero
  eyebrow="About the firm"
  heading="Commercial counsel in Bangladesh and the United Kingdom."
  subtitle="Gazi & Associates is a commercial law firm advising…"
/>
```

Heading is serif `text-4xl md:text-hero`, ink, leading-tight. Subtitle is
`text-lg leading-relaxed text-body`. Both constrained to `max-w-prose`.

### `<Hero>` (brand)

The homepage-only brand hero (two-column with image). Lives in
`components/Hero.tsx`. Not a generic primitive — used exactly once.

### `<SectionHeading>`

In-section heading cluster: eyebrow + serif h2 + optional rule beneath.

```tsx
<SectionHeading
  eyebrow="Chambers"
  heading="Where the firm sits"
  rule
/>
```

### `<Prose>`

Wraps long-form body content in the editorial measure with consistent
paragraph rhythm.

```tsx
<Prose>
  {paragraphs.map((p, i) => (
    <p key={i}>{p}</p>
  ))}
</Prose>
```

Renders: `max-w-prose space-y-6 font-sans text-base leading-relaxed text-body`

For article bodies that want the longer 1.7 leading, pass `leading="prose"`.

---

## Patterns

These are the standard recipes. Building a new page should be a question
of selecting from these recipes — not inventing a new one.

### Page hero
- `<PageHero eyebrow … heading … subtitle … />`

### Article hero
- `<PageHero eyebrow={practice} heading={title} subtitle={dek} />`
- Followed by a byline row inside `<Section density="compact">`

### Editorial section (intro paragraphs)
```tsx
<Section tone="paper" divider="top">
  <Container>
    <Prose>…paragraphs…</Prose>
  </Container>
</Section>
```

### Headed section (eyebrow + h2 + body)
```tsx
<Section tone="paper-2">
  <Container>
    <SectionHeading eyebrow="…" heading="…" rule />
    <Prose className="mt-10">…paragraphs…</Prose>
  </Container>
</Section>
```

### Card grid
```tsx
<Section tone="paper-2">
  <Container>
    <SectionHeading eyebrow="…" heading="…" />
    <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
      {items.map(item => <ChamberCard key={…} {…item} />)}
    </div>
  </Container>
</Section>
```

---

## What changed when this document was added

- Drift eliminated: `tracking-eyebrow` removed; all small-caps text now
  uses `tracking-caps` (0.12em).
- 10 duplicated page heroes collapsed to `<PageHero>`.
- Section padding consolidated to three density values (`hero`,
  `default`, `compact`). Every previous bespoke `py-*` pair maps to one
  of these.
- The line `mx-auto max-w-content px-6 md:px-10` no longer appears more
  than once outside the `Container` primitive itself.

Anything you find on the site that does not compose from the primitives
above is a drift bug. Convert it.
