# IMAGE-BRIEF.md — Gazi & Associates

Photography and illustration manifest. Every image the live site needs,
the dimensions it renders at, the subject brief, and where the final file
goes in the repo.

## Global rules

- **All photography black-and-white** or near-monochrome with a single
  warm tone. No colour stock photography.
- **Format**: deliver each image as a single high-resolution master
  (JPEG or TIFF, sRGB, 8-bit). Next.js's `<Image>` will derive AVIF +
  WebP at multiple sizes automatically — no need to pre-export retina.
- **Deliver at 2× the rendered size below** so the AVIF/WebP pipeline
  has enough resolution. Where a rendered size is e.g. 640×480, supply
  at least 1280×960.
- **No stock photography of people**. All identifiable people on the
  site must be real members of the firm in commissioned portraits.
- **No gavels, no scales of justice, no Greek columns**, no
  "lawyer-in-suit-pointing-at-document" trope shots.
- **No photographs of the firm's actual office buildings as architectural
  subjects.** The chambers section is *aesthetic representation*, not
  documentary record. The viewer should read "this firm sits within
  this architectural tradition," not "here is a snapshot of our front
  door." (Exception: the firm may eventually want a small set of
  documentary office shots elsewhere, but they do not belong in the
  chamber cards.)
- **License**: every commissioned image must be cleared with a written
  release for unlimited web use. Stock images sourced as placeholders
  (Unsplash+, Stocksy) must include the license proof in the firm's
  records.

---

## 1. Must-have for launch

These four image sets are referenced by pages currently in the build.
The site renders today with stylised line-art SVG placeholders in their
place. Replace each placeholder by dropping the new file at the listed
path and updating the `src` in the corresponding content module.

### 1.1 Home hero — Old High Court Building

| Field        | Value                                                             |
| ------------ | ----------------------------------------------------------------- |
| **File**     | `public/hero/old-high-court.jpg`                                  |
| **Used on**  | `/` (homepage hero, right column)                                 |
| **Rendered** | ≈ 650 × 800 px (55% of 1180px content width × ~800px hero height) |
| **Supply**   | **1600 × 2000 px minimum** (2× retina, plus crop tolerance)       |
| **Aspect**   | Roughly 4:5 portrait. Will be cropped via `object-cover`.         |
| **Treatment**| Deep black-and-white. Strong directional light. High contrast.    |
| **Update**   | `content/copy/home.ts` → `home.hero.image.src`                    |
| **Caption**  | `OLD HIGH COURT BUILDING, RAMNA, DHAKA · PHOTOGRAPH [credit]`     |

**Subject brief.** The Old High Court Building (formerly Government
House) in Ramna, Dhaka — seat of the High Court Division of the
Supreme Court of Bangladesh. Indo-Saracenic, red brick, central dome
and long colonnade.

The firm's principal is an Advocate of the Supreme Court of Bangladesh
with rights of audience before the High Court Division (see
`content/people.ts`); this building is where that work happens. Using
it as the hero is editorial context, not endorsement.

**Composition.** The hero column is portrait (≈ 4:5). A wide
landscape-format shot of the whole building will lose the dome or the
colonnade rhythm in the crop. Photographer should compose for
*vertical orientation*:

- **Preferred**: a tight vertical slice showing the central dome plus
  several columns of the colonnade beneath, at three-quarter angle in
  morning or late-afternoon directional light.
- **Acceptable**: a close architectural detail — the dome and pediment
  alone, framed tight enough to dominate the column.

**Professional-conduct guardrails.**
- Exterior shots only. No interior of the courtroom, no shots from the
  bench side, no shots of presiding officers. The Bangladesh Bar
  Council advertising guidance discourages anything that suggests the
  firm has special status inside the court; an editorial exterior is
  unambiguously clear of that line.
- The caption should describe the building, never imply affiliation
  ("where the firm appears before the High Court Division" is the
  upper limit of acceptable framing).

**Sourcing path (recommended).** Commission a Dhaka photographer for a
half-day shoot at dawn or dusk. Pair with the lawyer portraits
(section 1.3) to amortise the cost.

**Alternative source.** Wikimedia Commons has several CC-BY photographs
of the building — usable as an interim, with attribution carried in
the caption. Most are tourist-angle and won't sit as well in the
portrait crop, so audition carefully.

### 1.2 Three chamber architectural images

Aesthetic architectural images that represent each chamber's *locale
and tradition*, not photographs of the office buildings themselves.
Each chamber card crops to 3:2.

| Field          | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| **Used on**    | `/`, `/firm/chambers`                                        |
| **Rendered**   | ≈ 380 × 253 px per card (3:2)                                |
| **Supply**     | **1500 × 1000 px minimum** (3:2)                             |
| **Treatment**  | Black-and-white. Editorial, not tourist. Architectural detail rather than wide cityscape. |
| **Update**     | `content/chambers.ts` → each chamber's `image.src`           |

The three chamber images should sit together as a visual set — same
tonal register, similar contrast, comparable framing rhythm — even
though the subjects are drawn from three different traditions. The
viewer should feel they're looking at three movements of the same
piece, not three unrelated stock photos.

**1.2.1 Dhaka** — `public/chambers/dhaka.jpg`

Mughal-or-colonial Bengali architecture. Strong candidates:

- A detail of Curzon Hall (Indo-Saracenic, Dhaka University)
- The colonnaded facade of Ahsan Manzil or Tara Masjid
- A close arched-window detail of a Purana Paltan colonial-era building
- The arched verandahs of Old Dhaka

The subject should read as *Dhaka* to a Bangladeshi viewer without
needing to be captioned. Avoid generic Mughal architecture that could
be Lahore or Delhi.

**1.2.2 Jashore** — `public/chambers/jashore.jpg`

Regional Bengal — south-west Bangladesh, the river delta, or the
industrial port belt around Noapara. Candidates:

- A worn brick colonial-era zamindar bungalow facade
- The arched arcade of a regional courthouse or municipal building
- A heritage railway station detail (the Bengal railways left a strong
  architectural footprint in Jashore)
- A weighbridge office, jute-mill facade, or warehouse silhouette from
  the Noapara port belt — only if rendered architecturally (composed
  for line and rhythm, not as industrial documentary)

This is the hardest of the three to source because Jashore isn't a
heavily-photographed jurisdiction. A commission of a local
photographer for a half-day in the Noapara area is the cleanest path.

**1.2.3 London** — `public/chambers/london.jpg`

Classical English legal architecture. Candidates:

- A detail of the Inns of Court (Gray's Inn, Middle Temple, Lincoln's
  Inn) — staircase, archway, court entrance
- The columned facade of the Royal Courts of Justice
- A Georgian or Victorian legal-quarter detail (Chancery Lane, Holborn)
- A close detail of an Inner Temple gateway

This is *not* Ilford or a Victorian terrace from the chamber's actual
street. It's the classical-legal-London tradition that the firm's
diaspora work sits within. Stock libraries are full of usable shots —
audition for tonal match with the Dhaka and Jashore images so the
three read as a set.

### 1.3 Three lawyer portraits

Used on `/firm/leadership` (large, 280px square) and `/firm/team`
(smaller, 320px square in a 3-up grid).

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| **Used on**    | `/firm/leadership`, `/firm/team`                              |
| **Rendered**   | ≈ 280–320 px square                                           |
| **Supply**     | **800 × 800 px minimum** (square, 1:1)                        |
| **Aspect**     | 1:1 exact                                                     |
| **Treatment**  | Black-and-white or 20%-desaturated. Plain backdrop in deep navy or warm grey. Directional side light. Eye-line to camera or three-quarter turn. |
| **Update**     | `content/people.ts` → each person's `photo`                   |

**1.3.1 Md. Imran Gazi** — `public/people/imran-gazi.jpg`
Founding Partner. Formal attire. Cropped head-and-shoulders.

**1.3.2 Shipon Chandra Ghosh** — `public/people/shipon-chandra-ghosh.jpg`
Associate. Same lighting and backdrop as Mr Gazi.

**1.3.3 Sabuj Morol** — `public/people/sabuj-morol.jpg`
Associate. Same lighting and backdrop as Mr Gazi.

The three portraits should be shot in the same session with the same
backdrop and lighting so they read as a set on the team page.

### 1.4 Favicon and Apple touch icon

| Field        | Value                                            |
| ------------ | ------------------------------------------------ |
| **Used on**  | Every page (browser tab icon)                    |
| **Files**    | `app/favicon.ico` (replaces Next default)        |
|              | `public/apple-touch-icon.png` (180 × 180)        |
| **Supply**   | A 512 × 512 master SVG or PNG                    |

**Subject.** A single "G" monogram in Cormorant Garamond, navy on
ivory or ivory on navy. Must be legible at 16 × 16 px.

---

## 2. Nice-to-have / future

These are images referenced by `DESIGN-REFINEMENT.md` (the visual
refinement spec) but not currently in the build. If the firm wants to
adopt the full refinement, source these next.

### 2.1 Practice index architectural feature image — Curzon Hall

| Field        | Value                                                            |
| ------------ | ---------------------------------------------------------------- |
| **File**     | `public/practice/curzon-hall.jpg`                                |
| **Used on**  | `/practice` (single full-width feature beneath the hero)         |
| **Rendered** | 1180 × 787 px (3:2), full-bleed within content area              |
| **Supply**   | **2400 × 1600 px minimum** (3:2)                                 |
| **Caption**  | `CURZON HALL, UNIVERSITY OF DHAKA · PHOTOGRAPH [credit]`         |

**Subject.** Curzon Hall on the University of Dhaka campus —
Indo-Saracenic, red brick, intricate arcaded facade, intellectually
serious. Chosen specifically to be a different building from the
hero's Old High Court so the home → practice journey reads as visual
variation rather than repetition. Both buildings share the
Indo-Saracenic tradition, which keeps the architectural register
coherent.

Composition can be wide landscape here (the page lays it out at 3:2
full-bleed), unlike the portrait crop required for the hero.

### 2.2 Material detail shots — one per practice area (7 total)

| Field        | Value                                                            |
| ------------ | ---------------------------------------------------------------- |
| **Used on**  | `/practice/[slug]` (each detail page — right margin shot)        |
| **Rendered** | ≈ 360 × 450 px (4:5 portrait)                                    |
| **Supply**   | **900 × 1125 px minimum** (4:5)                                  |

**Subject (one per practice).** Close-up still-life material details.
No people, no logos, no obvious branding.

- **Tax & NBR Advisory** — A bound copy of the Income Tax Act 2023 or
  a Finance Act, with a fountain pen
- **VAT & Customs** — A customs document with a wax seal, or a closed
  ledger spine
- **Corporate & Commercial** — A stack of share certificates, or a
  company seal
- **Litigation & High Court** — A wig and gown detail, or a stack of
  bound case reports
- **Cross-Border & UK Desk** — An open passport on a desk, or a treaty
  document with the UK and Bangladesh flags only as embossed detail
- **Civil & Property** — A title deed, an old land registration map,
  or a property document
- **Criminal** — A bound criminal procedure code, the spine of a
  Penal Code

All shot on the same desk in the same light so they read as a set.

### 2.3 Insights article hero (optional, per article)

| Field        | Value                                                            |
| ------------ | ---------------------------------------------------------------- |
| **Used on**  | `/insights/[slug]` (one optional image beneath the dek/byline)   |
| **Rendered** | 680 × 453 px (3:2, fits the prose column)                        |
| **Supply**   | **1400 × 933 px minimum** (3:2)                                  |

**Subject.** Article-specific. For the seeded NBR audit article, a
detail of an NBR notice or assessment document. For the Finance Act
piece, a detail of the published act on a desk. Optional — articles
can run without a hero image.

### 2.4 Image-with-overlay band — single feature image

| Field        | Value                                                            |
| ------------ | ---------------------------------------------------------------- |
| **Used on**  | Practice index (and potentially the homepage)                    |
| **Rendered** | Full viewport width × ~520 px tall (≈ 16:5 or 21:9)              |
| **Supply**   | **2880 × 900 px minimum**                                        |

**Subject.** A deep library or courtroom interior — bookshelves of
bound law reports, a long table, an arched window. Black and white,
heavy contrast, deep shadow. Centred white serif-italic overlay text
will sit on top of it (e.g. "Built on a foundation of integrity"), so
the composition should leave the centre relatively quiet — strong
detail at the edges, calmer area in the centre.

### 2.5 OG (social-share) images

| Field        | Value                                                            |
| ------------ | ---------------------------------------------------------------- |
| **Used on**  | Every page as `<meta property="og:image">`                       |
| **Rendered** | 1200 × 630 px (Open Graph standard)                              |
| **Supply**   | Generated programmatically via `@vercel/og` at build time        |

These are not photographs. They are programmatically composed images
generated from a typographic template per page. The template is:

- Background: `--color-paper` (ivory)
- Title: page title in Cormorant Garamond, navy
- Below title: thin gold horizontal rule
- Bottom-left: the firm wordmark
- No photographs

Implementation is an `app/(og)/...` route using `@vercel/og`. This is
**Step 10** work per `claude.md`.

---

## Sizing summary table

| Image                    | Subject                              | Aspect | Rendered (px) | Supply at minimum (px) | Count |
| ------------------------ | ------------------------------------ | ------ | ------------- | ---------------------- | ----- |
| Home hero                | Old High Court Building, Ramna       | ~4:5   | 650 × 800     | 1600 × 2000            | 1     |
| Chamber — Dhaka          | Mughal/colonial Bengali architecture | 3:2    | 380 × 253     | 1500 × 1000            | 1     |
| Chamber — Jashore        | Regional Bengal / port-belt          | 3:2    | 380 × 253     | 1500 × 1000            | 1     |
| Chamber — London         | Classical English legal architecture | 3:2    | 380 × 253     | 1500 × 1000            | 1     |
| Lawyer portrait          | Each principal/associate             | 1:1    | 320 × 320     | 800 × 800              | 3     |
| Favicon master           | "G" monogram                         | 1:1    | 512 × 512     | SVG or 1024 × 1024     | 1     |
| Apple touch icon         | derived                              | 1:1    | 180 × 180     | derived from master    | 1     |
| Practice feature         | Curzon Hall, Dhaka                   | 3:2    | 1180 × 787    | 2400 × 1600            | 1     |
| Practice material detail | Per practice area (see above)        | 4:5    | 360 × 450     | 900 × 1125             | 7     |
| Insights hero (optional) | Per article                          | 3:2    | 680 × 453     | 1400 × 933             | per article |
| Image-with-overlay band  | Library or courtroom interior        | 16:5   | full-bleed    | 2880 × 900             | 1     |
| OG image                 | Typographic template                 | 1200×630 | template    | generated              | per route |

**Total commissioned shots needed for launch:** 7 photographs (1 hero +
3 chamber architectural images + 3 portraits) plus a favicon mark.

**Total for full visual-refinement adoption:** 16 photographs (the 7
above plus 7 material details, Curzon Hall, and the overlay band image)
plus the favicon and the programmatic OG generator.

---

## Subject coherence — important

Three buildings appear across the site once everything is in place:

1. **Old High Court Building** (homepage hero)
2. **Curzon Hall** (practice index feature)
3. **A third Bengali heritage building** appears as the Dhaka chamber
   image (section 1.2.1)

These three must be **different buildings**. Repeating the same
building in two places will undermine the editorial register and read
as low effort. The Dhaka chamber's architectural subject should be a
third Indo-Saracenic or colonial-era Dhaka building distinct from the
Old High Court and Curzon Hall — for example, Ahsan Manzil, the
Bangladesh National Museum, a Purana Paltan colonial facade detail, or
Tara Masjid.

---

## Once the images arrive

1. Drop each file at the path listed above (e.g. `public/people/imran-gazi.jpg`).
2. Update the corresponding content module — `content/people.ts`,
   `content/chambers.ts`, or `content/copy/home.ts` — to point `src` at
   the new path.
3. `npm run build` to confirm Next.js can derive its AVIF/WebP variants.
4. Lighthouse the affected page; LCP should remain ≤ 1.5s on 4G if
   sizes match the table above.
