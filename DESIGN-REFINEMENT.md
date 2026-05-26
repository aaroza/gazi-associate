# DESIGN-REFINEMENT.md — Gazi & Associates Visual Pass

## What this document is

The structural build is complete. The site renders, the IA is right, the
tokens are in place. This document is the visual refinement pass — what a
senior art director with twenty years in luxury and legal branding would
change before the site is shown to a client.

The goal is to move the site from *correctly austere* to *quietly premium*.
These are different aesthetic states. Austere is what very old institutions
can afford because their age does the talking. A new firm earns the right
to austerity by first demonstrating visual confidence and craft.

Reference register, in order of priority:
- Cravath, Swaine & Moore (cravath.com) — for editorial confidence
- Bharucha & Partners (bharucha.in) — for South Asian premium register
- Khaitan & Co (khaitanco.com) — for substance-led layout
- Wachtell, Lipton, Rosen & Katz (wlrk.com) — for restraint with weight
- AZB & Partners (azbpartners.com) — for closest peer comparable

Out-of-category references for compositional craft only:
- Apartamento magazine
- Aesop press pages
- Phaidon book pages

## Operating principles for this pass

1. **Imagery is non-negotiable.** Premium law-firm websites have
   photography. The previous rule of "no images" applied to stock photography
   only. Real, commissioned-feeling photography is the single largest
   missing element on this site.

2. **Asymmetry over symmetry.** The current layout is centred and balanced
   like a brochure template. Premium editorial design uses deliberate
   asymmetry — wide left columns with narrow right columns, off-grid pull
   quotes, type that begins one-third in rather than dead-centre.

3. **Vertical rhythm must vary.** Hero sections breathe at 200–240px of
   vertical padding. Body sections at 120–160px. Footer at 80px. Identical
   spacing everywhere is what makes a site feel like a CMS, not a publication.

4. **Hairline and weight contrast.** Every section has a hairline rule
   somewhere — but no two sections use rules the same way. A rule above a
   heading, a rule below an eyebrow, a rule down the left margin of a pull
   quote. Rules are the secondary type system.

5. **Density is luxury.** Premium clients read. The site should reward
   reading. Long-form text wants measure of 60–68 characters, not 90, and
   wants leading of 1.7, not 1.625.

## Imagery direction

### What we need

Commissioned-feeling photography in three categories. Until commissioned
work exists, the site uses **carefully chosen black-and-white archival or
editorial photographs from license-cleared sources** (Unsplash+ paid tier,
or stock from Stocksy / Trunk Archive). The brief for any image:

- Black and white, or near-monochrome with a single warm tone
- No people in stock imagery unless they are unidentifiable (hands, backs
  of heads, silhouettes). All identifiable people must be real members of
  the firm, in commissioned portraits.
- Architectural, archival, or material in subject matter
- High contrast, deep shadow, editorial light — never flat product
  photography light
- Aspect ratios in the design: 3:2 wide, 4:5 portrait, 1:1 square. No
  16:9, no 21:9 banners.

### Categories

**Architectural.** Old Dhaka colonial-era building exteriors, courthouse
interiors, library or chamber interiors with shelves of books, marble or
stone surfaces, large windows with directional light. These anchor the
homepage hero and the chamber pages.

**Material.** Close-up details: a fountain pen on paper, a stack of bound
case reports, the spine of a law journal, a wax seal, an embossed letterhead,
the texture of court paper, a desk lamp at night. These anchor section
breaks and serve as ambient texture inside long articles.

**Portrait.** Editorial half-length portraits of the principal and senior
associates. Plain backdrop in deep navy or warm grey, formal attire,
directional side light, eyes to camera or three-quarter turn. These go on
the Leadership page and as the closing image on each article. Until these
portraits exist, the Leadership page uses **wordmark monograms in a square
frame** as placeholders — never silhouette icons or initials in circles.

### Placement, by route

- **Home hero:** A 3:2 architectural photograph of an old Dhaka building
  exterior, occupying the right 55% of the hero. Type left, photo right,
  vertical hairline rule between them.
- **Home /firm intro section:** A single 4:5 portrait-orientation
  material shot (books, pen, document detail) to the right of the firm copy.
- **Practice index page:** A single full-width 3:2 architectural image
  beneath the hero, followed by the list. Image acts as a tonal divider.
- **Each practice detail page:** A single 4:5 material image in the right
  margin opposite the "How the firm advises" section.
- **Chambers page:** One 3:2 architectural image per chamber, alternating
  left and right orientation down the page.
- **Leadership page:** Square portrait per person, 1:1, treated with a
  20% desaturation and a subtle warm-tone overlay so all portraits feel
  consistent even if shot in different settings.
- **Insights index:** No images on the index. Type-led only — this is
  correct as built.
- **Insights article:** One optional 3:2 image at the top, beneath the
  dek and byline. Inline images supported but used sparingly — maximum two
  per article. Pull quotes in serif italic with a hairline rule above and
  below act as the primary visual variation inside articles.

### Image treatment in code

- All images served as AVIF with WebP fallback
- A faint inner shadow (`inset 0 0 0 1px rgba(11,30,63,0.08)`) on every
  image to define its edge against the ivory background
- A 1px hairline rule in `--color-rule` immediately below every image, set
  at 50% width and right-aligned, with a small-caps caption beneath
- No image has a border-radius. No image has a drop shadow. No image fades
  in on scroll.

## Homepage refinement

### Hero

Current state: type left-aligned on ivory, single CTA, no image.

Refined state:

- Two-column grid, 55/45 split. Type left (45%), image right (55%).
- Hero serif heading drops to **3.5rem** with leading of 1.05.
  Current 4.25rem feels overscaled given the line lengths.
- Heading set with a deliberate line break for cadence — not flowed
  freely. Three lines, each ending on a natural breath.
- Eyebrow above the heading: small caps, gold, letter-spacing 0.15em:
  `EST. [YEAR] · DHAKA · JASHORE · LONDON`
- Subhead in sans, 1.125rem, ink colour at 75% opacity, max-width 36ch
- Primary CTA (burgundy) and a secondary text link beneath it reading
  *Read the firm's recent commentary →* in small caps
- Hero photograph: 3:2 architectural, full-bleed right, with the inner
  shadow described above. The photograph touches the top edge of the hero
  section and the bottom edge — no padding around it on its own side.
- Vertical hairline rule in `--color-rule` between the type column and
  the image column, stopping 24px short of the top and bottom of the hero.

### "What the firm does" section

Current state: stacked list with hairline dividers, "Read more" labels.

Refined state:

- Section eyebrow on the left margin in small caps gold: `PRACTICE`
- Section heading "What the firm does" stays serif but drops to 2.5rem
  and aligns to a left column that occupies 33% of the grid
- Practice list moves to the right 67% column
- Each practice item gets a **two-column internal layout**: title and
  one-line description on the left (60%), single sentence of further
  detail on the right (40%) in a smaller body size, ink at 70% opacity.
  This adds substance and density without verbosity.
- "Read more" label removed. The entire row is a hover target; on hover,
  the title shifts 8px right and a `→` arrow fades in at the end of the
  row. This is the only motion on the page.
- Hairline rule between items stays.

### Chambers section

Current state: three equal cards on warm ivory background.

Refined state:

- Background remains `--color-paper-2`
- Section eyebrow: `CHAMBERS` in gold small caps
- Section heading: "Dhaka · Jashore · London" set in serif italic at
  2rem. The middle dots are spaced wider than default — letter-spacing on
  the dots only.
- Each chamber card gets a 3:2 image at the top, then the address block.
  Cards remain on the warm ivory background but the image bleeds to the
  outer edge of the card with no padding.
- Vertical hairline rules between cards extend 24px above and below the
  card content but stop short of the image.

### Insights / Recent commentary section

Current state: typographic list of three articles with date right-aligned.

This is already strong. Two small refinements:

- Eyebrow above the section: `INSIGHTS` in gold small caps
- After the third article, a single line of text right-aligned reading:
  *Forty-seven further notes in the archive →* (number generated
  dynamically from MDX count). This is the moment that signals depth.

### Closing wordmark section

Add a new section above the footer:

- Full-width, `--color-ink` (Oxford Navy) background
- 200px vertical padding
- Centred wordmark in ivory, set 4× the size of the header wordmark
- Beneath the wordmark, a single line in small caps ivory at 50% opacity:
  `ADVOCATES · TAX COUNSEL · CORPORATE ADVISERS`
- Nothing else in this section. It is the firm's signature on the page.

## Practice index refinement

Current state: a clean list. Functional but undifferentiated.

Refined state:

- Hero of this page gets a **single full-width 3:2 architectural image**
  beneath the hero text. Image is treated with the standard inner shadow
  and a caption beneath right-aligned in small caps: e.g.
  `OLD HIGH COURT BUILDING, DHAKA · PHOTOGRAPH BY [NAME]`
- The practice list itself moves to a **two-column grid below 1024px width
  remains single-column; at 1024px and above, becomes two columns**. This
  is the single most impactful change to this page — it stops the page
  feeling like a vertical scroll of identical rectangles.
- Each list item gains a small numeral in the left margin set in serif
  italic at 1.25rem, `--color-gold`. `01` through `07`. These are folio
  numbers, not bullets.

## Practice detail page refinement

Current state: not in screenshots, but per spec, single-column long-form.

Refined state:

- Two-column layout at 1024px+: 60% editorial column left, 40% sidebar
  right
- Editorial column contains: dek, "How the firm advises" with the four
  streams, representative work
- Sidebar contains: lead partner card (portrait, name, role, email),
  beneath that a list of related insights tagged to this practice area,
  beneath that the consultation CTA
- The four streams ("Advisory and planning", "Compliance", etc.) each
  get a serif italic sub-heading at 1.5rem, not a sans-serif H3
- Representative work entries get a small-caps eyebrow `MATTER` above
  each entry and are separated by a 50%-width left-aligned hairline rule

## Insights article refinement

The article shown in screenshot 4 is the most under-designed page on the
site. Critical changes:

- **Measure: drop to 62 characters maximum.** Currently runs to 88–92.
  This is the most important typographic change in the whole pass.
- **Body leading to 1.75.** Currently 1.625.
- **Body size up to 1.1875rem.** Currently 1.0625rem.
- **First paragraph gets a serif drop cap.** Three-line drop cap,
  Cormorant Garamond 500, `--color-ink`, with 4px right margin and 2px
  baseline offset.
- **Paragraph spacing: 1.5em between paragraphs**, no first-line indent
  on the opening paragraph, 1em indent on subsequent paragraphs (this is
  the classical book convention, not the web convention).
- **Pull quotes:** Every 600–800 words, a pull quote in serif italic at
  1.75rem, hairline rule above and below at 30% width left-aligned.
  Pulled from the body copy verbatim.
- **Section breaks** within the article: three centred small-caps
  asterisks `* * *` with letter-spacing 1em, not a horizontal rule
- **Byline treatment:** The current byline is too plain. New form:
By MD. IMRAN GAZI
Founding Partner · 10 May 2026 · 8 min read
  Name in small caps, second line in sans at 0.875rem in `--color-muted`.
- **Right margin sidebar at 1024px+** containing: a sticky table of
  contents (auto-generated from H2s), the "Request a consultation" CTA,
  and a related-insights list of three articles tagged to the same
  practice. The article body column narrows to accommodate this — measure
  remains 62 characters.
- **Closing element:** After the article body, a portrait of the author
  at 1:1, 200px wide, left-aligned, with three lines beside it: the
  author's name in serif, role beneath in small caps sans, and a single
  sentence of bio. Beneath this, the two CTAs as currently designed.

## Header refinement

Current state: clean, functional, wordmark + nav, hairline rule beneath.

Two refinements:

- The nav items currently sit at the same baseline as the wordmark
  strapline. Move them up to align with the **wordmark itself**, not the
  strapline. This subtly elevates the brand.
- On scroll, the header shrinks: wordmark drops to 80% size, strapline
  fades out, hairline rule remains. Transition: 200ms ease. This is the
  only scroll-triggered animation on the site.

## Footer refinement

Current state: three columns, then bar memberships, then copyright.

Refined state:

- Above the three columns, add a full-width wordmark moment: wordmark in
  serif at 5rem in `--color-ink-soft`, then a 1px rule beneath it spanning
  the full content width.
- Beneath the three columns and above the bar memberships line, add a
  single line of editorial standfirst in serif italic, 1.25rem,
  `--color-ink` at 60% opacity:

  > *The firm advises in confidence. Initial conversations may be
  > arranged through any of the chambers above.*

- Bar memberships line stays as built.
- Copyright line gains a year range that auto-updates: `© 2014–{current year}`

## Motion

This site has almost no motion, and that is correct. The four exceptions:

1. Header shrink on scroll (described above)
2. Practice list row hover: 8px right shift on title + arrow fade-in
3. Image fade-in on initial page load only (not on scroll), 400ms ease
4. CTA button hover: background darkens 8%, no other change

No parallax. No scroll-triggered reveals. No marquee. No autoplay video.
No counters that count up. No "as seen in" carousel.

## Final visual checklist before declaring the pass done

Open the homepage and tick each of these:

- [ ] Hero has an architectural photograph
- [ ] Hero heading breaks across three lines, deliberately, not flowed
- [ ] Eyebrow appears above hero heading in gold small caps
- [ ] Section eyebrows in gold small caps appear on every section
- [ ] At least one image appears above the fold on the homepage
- [ ] Practice list shows folio numbers `01`–`07` in the left margin on
      the practice index
- [ ] Closing wordmark section in navy appears above the footer
- [ ] Footer wordmark moment appears above the three columns
- [ ] Insights article body measure is 62 characters or less
- [ ] Insights article has a drop cap on the first paragraph
- [ ] Insights article has at least one pull quote
- [ ] All images have hairline rule + small-caps caption beneath
- [ ] All images have the 1px inner-shadow edge treatment
- [ ] Header shrinks on scroll
- [ ] Hovering a practice row produces 8px shift + arrow fade-in
- [ ] No stock photography of people, no gavels, no scales, no columns

When every box is ticked, the site has moved from austere-by-default to
premium-by-design.