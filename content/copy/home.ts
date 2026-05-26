// Homepage copy. Sourced verbatim from /copy.md HOME section.
// Bracketed notes are deliberate placeholders — preserve them exactly.

import { chambers } from "@/content/chambers";

export const home = {
  hero: {
    eyebrow: "Est. 2014 · Dhaka · Jashore · London",
    heading: ["Counsel on tax,", "corporate and regulatory", "matters in Bangladesh."],
    subtitle:
      "Gazi & Associates advises businesses, investors and individuals from chambers in Dhaka, Jashore and London.",
    cta: { href: "/contact", label: "Request a consultation" },
    secondaryLink: {
      href: "/insights",
      label: "Read the firm’s recent commentary →",
    },
    image: {
      src: "/hero/old-high-court.png",
      alt: "Old High Court Building, Ramna, Dhaka",
    },
  },

  firm: {
    eyebrow: "The firm",
    heading: "A commercial firm advising on tax, corporate and regulatory matters.",
    body: "Gazi & Associates is a commercial law firm based in Dhaka, with chambers in Jashore and London. The firm advises Bangladeshi corporates, foreign investors and private clients on tax, corporate, regulatory and litigation matters, and represents clients before the National Board of Revenue, the High Court Division of the Supreme Court of Bangladesh, and specialist tribunals.",
    cta: { href: "/firm", label: "About the firm" },
  },

  practice: {
    eyebrow: "Practice",
    heading: "What the firm does",
    items: [
      {
        href: "/practice/tax",
        title: "Tax & NBR Advisory",
        summary:
          "Income tax, transfer pricing, audits, appeals and tribunal representation for corporate and individual clients.",
        endDetail:
          "Built on direct working experience of NBR procedure and the relevant tribunals — the firm's principal area of practice.",
      },
      {
        href: "/practice/vat-customs",
        title: "VAT & Customs",
        summary:
          "Compliance, refund claims, classification disputes and representation before the Customs, Excise and VAT Appellate Tribunal.",
        endDetail:
          "The firm treats compliance and audit work as a continuum; positions taken at the return stage decide what is possible later.",
      },
      {
        href: "/practice/corporate",
        title: "Corporate & Commercial",
        summary:
          "Company formation, joint ventures, shareholder agreements, regulatory licensing and ongoing corporate counsel.",
        endDetail:
          "Counsel to foreign-owned subsidiaries and family-controlled groups since the firm's foundation in 2014.",
      },
      {
        href: "/practice/litigation",
        title: "Litigation & High Court",
        summary:
          "Civil and commercial litigation, writ jurisdiction matters and appellate work before the Supreme Court of Bangladesh.",
        endDetail:
          "Rights of audience before the High Court Division; appellate work on questions of law arising from revenue and commercial matters.",
      },
      {
        href: "/practice/cross-border",
        title: "Cross-Border & UK Desk",
        summary:
          "Inbound investment into Bangladesh, repatriation and exchange-control matters, and UK–Bangladesh advisory for diaspora clients.",
        endDetail:
          "The London chamber coordinates Bangladesh-end work with UK advisers under the UK–Bangladesh double taxation treaty.",
      },
      {
        href: "/practice/civil",
        title: "Civil & Property",
        summary:
          "Property, family and criminal matters handled discreetly for established clients of the firm.",
        endDetail:
          "Practice limited to established clients of the firm and conducted with appropriate discretion.",
      },
    ],
    cta: { href: "/practice", label: "All practice areas" },
  },

  chambers: {
    eyebrow: "Chambers",
    heading: "Dhaka · Jashore · London",
    items: chambers,
  },

  insights: {
    eyebrow: "Insights",
    heading: "Recent commentary",
    placeholder:
      "[Three latest articles will appear here once Insights are seeded — serif headline, date, practice tag, no images.]",
    cta: { href: "/insights", label: "All insights" },
  },
} as const;
