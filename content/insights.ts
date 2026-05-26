// Insights — short notes from the firm. These articles are written to be
// useful starting points on recurring questions in the firm's practice.
// They are not legal advice; specific matters should be referred to the
// firm in writing.

export type Insight = {
  slug: string;
  title: string;
  practiceSlug: string;
  practiceLabel: string;
  date: string;
  authorSlug: string;
  dek: string;
  seoTitle: string;
  seoDescription: string;
  body: ReadonlyArray<string>;
};

export const insights: ReadonlyArray<Insight> = [
  {
    slug: "finance-act-recurring-themes-foreign-owned",
    title: "Reading the Finance Act: recurring themes for foreign-owned companies",
    practiceSlug: "tax",
    practiceLabel: "Tax",
    date: "2026-05-10",
    authorSlug: "imran-gazi",
    dek: "The annual Finance Act sets the surface; the recurring themes underneath it are what determine how foreign-owned companies experience the year ahead in Bangladesh.",
    seoTitle: "Reading the Finance Act: foreign-owned companies | Gazi & Associates",
    seoDescription:
      "A note on the recurring themes in Bangladesh's annual Finance Act that affect foreign-owned companies — corporate rates, withholding obligations on outbound payments, transfer pricing reporting, and the documentation that determines how the year is experienced.",
    body: [
      "The Finance Act is published once a year and is read carefully by every in-house finance team that operates in Bangladesh. The headline changes — corporate rates, surcharges, the bands at which higher rates apply — are reported in summary form within days. The more durable changes are the ones that affect documentation, reporting and withholding, and those tend to take longer to surface.",
      "For foreign-owned companies, three themes recur from year to year.",
      "Corporate rate spreads. Bangladesh has long applied different corporate income tax rates to different categories of taxpayer, with publicly listed companies, banks and non-resident-payable transactions falling on different rungs. The Finance Act adjusts these rungs each year; the practical consequence is that a small change to the rate applicable to one category can move the marginal economics of a holding structure measurably, and is worth reviewing against the structure as it actually stands.",
      "Withholding on outbound payments. Withholding tax rates and the categories to which they apply — royalties, technical services, management charges, interest — are reset and re-described annually. The treaty position under the relevant double taxation treaty constrains these rates for residents of treaty partners, but the documentation needed to claim the lower treaty rate (residency certificates, beneficial owner declarations, the specific form of supporting evidence) is set out in NBR practice and tends to be revisited at the Finance Act stage.",
      "Transfer pricing reporting. Bangladesh has had transfer pricing rules for several years, and the documentation thresholds, the categories of related-party transactions covered, and the reporting deadlines all sit within reach of the annual Finance Act. The firm's view is that the work that produces a defensible transfer pricing position is done well before the return is filed; the Finance Act is a useful annual prompt to confirm that the relevant intercompany agreements, transfer pricing studies and supporting evidence remain current.",
      "What to watch for in the current year's Act will turn on the firm's specific exposure. The firm advises in-house finance teams on the reading of the Act in light of the client's existing structure and arrangements, and on the documentation and return positions that flow from it.",
    ],
  },

  {
    slug: "nbr-audits-preparing-for-the-first-notice",
    title: "NBR audits: what to do when the first notice arrives",
    practiceSlug: "tax",
    practiceLabel: "Tax",
    date: "2026-03-22",
    authorSlug: "imran-gazi",
    dek: "An NBR audit begins with a notice. The decisions taken in the first two weeks of that audit shape what is possible at every stage that follows.",
    seoTitle: "NBR audits: preparing for the first notice | Gazi & Associates",
    seoDescription:
      "A practical note on the opening stage of a Bangladesh NBR audit — what the first notice tends to look like, what to gather, what not to send unprompted, and how the firm typically engages from that point.",
    body: [
      "The first notice in an NBR audit is rarely the document that gets the most attention; the substantive engagement begins later, with requests for specific records and responses to specific queries. But the first notice fixes the assessment year or years under review, the scope of inspection, and the timetable on which the taxpayer is expected to respond. The decisions taken in the two weeks that follow tend to shape what is possible at every stage that comes after.",
      "What the first notice usually says. The notice typically identifies the assessment years, the issuing officer, and the documents the officer is initially asking to inspect. It sets a date — sometimes for a hearing, sometimes simply for production of records — that is reasonably short. The taxpayer's options are to attend, to seek an adjournment in writing, or to make a written response that addresses the queries and offers a programme for the requested production.",
      "What to gather. The records that will support the return as filed: the audited accounts, the trial balance and ledger printouts, the schedules behind the return, the documentation for any items where the firm's view at the time of filing involved an exercise of judgement, and the relevant withholding records. For groups, the intercompany agreements and any transfer pricing study that bears on related-party transactions. For taxpayers in regulated sectors, the licensing and reporting records that the regulator has on file.",
      "What not to send unprompted. The temptation to send a large bundle of records before the officer has framed the questions is, in the firm's experience, almost always counterproductive. Records that have not been requested can introduce avenues of enquiry that would not otherwise have arisen. The better practice is to respond specifically to what the officer has asked, on the timetable set, and to produce additional records as the questions evolve.",
      "How the firm engages. The firm typically attends with the taxpayer's representative from the first hearing, agrees a documented programme of production with the issuing officer, and prepares a written response to the queries that ultimately determines whether the audit is closed at the assessment stage or proceeds further. Where the audit moves into a proposed addition or disallowance, the firm prepares the written submissions for the relevant Deputy Commissioner of Taxes and Joint Commissioner of Taxes and the appeal that follows if the matter cannot be resolved at the assessment stage.",
    ],
  },

  {
    slug: "uk-bangladesh-treaty-and-the-london-chamber",
    title: "The UK–Bangladesh treaty in practice: structuring for the corridor",
    practiceSlug: "cross-border",
    practiceLabel: "Cross-Border",
    date: "2026-01-18",
    authorSlug: "imran-gazi",
    dek: "The UK–Bangladesh double taxation treaty is unusual in its breadth. The note below describes how the firm uses it in practice, and where the practical limits sit.",
    seoTitle: "UK–Bangladesh treaty in practice | Gazi & Associates",
    seoDescription:
      "A practical note on the UK–Bangladesh double taxation treaty as it operates today — withholding rate constraints on dividends, interest and royalties, capital gains treatment, and the documentation needed to claim treaty relief at the Bangladesh end.",
    body: [
      "The double taxation treaty between the United Kingdom and Bangladesh has been in force for a long time and continues to be the principal framework against which inbound investment from the United Kingdom is structured. The firm's London chamber, in Ilford, exists in part to coordinate the Bangladesh-end work that runs alongside UK advisers' work on the same matters.",
      "Withholding rates. The treaty constrains the Bangladesh withholding rate that can be charged on dividends, interest and royalties paid to UK-resident recipients. The reduced treaty rate applies only where the recipient is the beneficial owner of the payment and is resident in the United Kingdom for treaty purposes; the documentation that supports that position is a residency certificate from HMRC and, in practice, a beneficial-owner declaration in the form expected by the NBR.",
      "Capital gains. The treaty allocates taxing rights over capital gains on the disposal of shares in a Bangladesh company between the two states in a manner that depends on the underlying asset position of the company. The starting point is that gains on the disposal of shares in a company whose value is principally derived from immovable property in Bangladesh remain taxable in Bangladesh; gains on other share disposals are, subject to the precise wording of the article, allocated to the state of residence of the seller.",
      "Permanent establishment. The treaty defines the threshold at which UK activity in Bangladesh creates a taxable permanent establishment for UK tax purposes, and the converse for Bangladesh-resident enterprises in the United Kingdom. Service-PE thresholds in particular have practical consequences for cross-border secondment and project work, and are the subject of recurring enquiry from groups setting up project teams.",
      "Documentation and practice. Claiming the treaty position at the Bangladesh end requires documentation of residency, beneficial ownership, and (for some payment types) the underlying agreement to which the payment relates. The firm's practice is to settle this documentation before the first payment falls due, in coordination with the client's UK advisers, so that withholding can be applied at the treaty rate from the outset rather than reclaimed afterwards.",
    ],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
