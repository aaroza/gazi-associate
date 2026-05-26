// Practice areas. Bodies describe the firm's services and the relevant
// Bangladesh statutory framework. Tax retains the representative-work
// section supplied in /copy.md (still labelled as illustrative). The other
// six areas do not list representative matters: under the firm's
// professional conduct rules these cannot be invented, and the firm
// will provide anonymised matter summaries when those become available.

export type PracticeSection = {
  heading: string;
  paragraphs: ReadonlyArray<string>;
};

export type PracticeArea = {
  slug:
    | "tax"
    | "vat-customs"
    | "corporate"
    | "litigation"
    | "cross-border"
    | "civil"
    | "criminal";
  title: string;
  order: number;
  leadPartnerSlug: string;
  summary: string;
  intro?: ReadonlyArray<string>;
  sections?: ReadonlyArray<PracticeSection>;
  representativeMatters?: ReadonlyArray<string>;
  representativeMattersNote?: string;
};

export const practiceAreas: ReadonlyArray<PracticeArea> = [
  {
    slug: "tax",
    title: "Tax & NBR Advisory",
    order: 1,
    leadPartnerSlug: "imran-gazi",
    summary:
      "Income tax, transfer pricing, audits, appeals and tribunal representation for corporate and individual clients.",
    intro: [
      "The firm advises corporate and individual clients on the full range of Bangladesh tax matters, from routine compliance to contested proceedings before the National Board of Revenue and the courts.",
      "Tax work in Bangladesh is shaped by the Income Tax Act 2023, the annual Finance Act, and the published and unpublished practice of the NBR. The firm's tax practice is built on direct experience with that practice — how returns are read, how audits are opened, what arguments hold weight at appeal, and how the relevant tribunals approach the questions that recur in this jurisdiction.",
      "The firm acts for Bangladeshi private companies, foreign-owned subsidiaries, partnerships, and high-earning individuals including non-residents with Bangladesh-source income.",
    ],
    sections: [
      {
        heading: "How the firm advises",
        paragraphs: [
          "The firm's tax work is organised in four streams.",
          "Advisory and planning. Structuring transactions, group reorganisations, employment arrangements and inbound investment to produce predictable and lawful tax outcomes. This includes review of proposed transactions before they are executed, and ongoing advice to in-house finance teams on the tax treatment of specific arrangements.",
          "Compliance. Preparation and review of corporate and individual returns, withholding obligations, and the supporting documentation that determines whether a return survives scrutiny. The firm's view is that the work done at the return stage determines what is possible at the audit stage; compliance is treated accordingly.",
          "Audits and assessments. Representation in NBR audits and assessment proceedings, including drafting of responses, preparation of supporting evidence, and conduct of hearings before the relevant Deputy Commissioner of Taxes and Joint Commissioner of Taxes.",
          "Appeals and litigation. Appeals to the Commissioner of Taxes (Appeals), references to the Taxes Appellate Tribunal, and tax-related writ and reference jurisdiction matters before the High Court Division of the Supreme Court of Bangladesh.",
          "The firm also advises on transfer pricing documentation and disputes, double taxation treaty positions (including under the UK–Bangladesh treaty), and the tax aspects of cross-border employment and secondment.",
        ],
      },
    ],
    representativeMatters: [
      "Advised a UK-headquartered group on the Bangladesh tax implications of acquiring a local manufacturing subsidiary, including post-acquisition restructuring and repatriation planning.",
      "Represented a private limited company in a contested NBR audit covering three assessment years, resulting in substantial reduction of the proposed assessment at the Joint Commissioner stage.",
      "Advised a non-resident individual on Bangladesh tax exposure arising from sale of inherited property, including treaty analysis and exchange-control aspects of remittance of proceeds.",
      "Acted on appeal before the Taxes Appellate Tribunal in a matter concerning the deductibility of intra-group management charges.",
    ],
    representativeMattersNote:
      "Illustrative of the type of work the firm undertakes. Anonymised case studies will be added as the firm publishes them.",
  },

  {
    slug: "vat-customs",
    title: "VAT & Customs",
    order: 2,
    leadPartnerSlug: "imran-gazi",
    summary:
      "Compliance, refund claims, classification disputes and representation before the Customs, Excise and VAT Appellate Tribunal.",
    intro: [
      "The firm advises corporate clients on indirect tax — value added tax, supplementary duty, and customs duty — and represents clients in disputes before the National Board of Revenue, the Customs, Excise and VAT Appellate Tribunal and the High Court Division.",
      "Indirect tax in Bangladesh is governed principally by the Value Added Tax and Supplementary Duty Act 2012 and the Customs Act 1969, supplemented by SROs and instructions issued by the NBR. The administration of these regimes — VAT registration, input tax credit, refund processing, classification of goods and the operation of bond facilities — generates a steady volume of practical questions that determine whether transactions and supply chains operate efficiently.",
    ],
    sections: [
      {
        heading: "How the firm advises",
        paragraphs: [
          "The firm's indirect tax work is organised in four streams.",
          "Advisory and structuring. Review of supply chains, contract structures and invoicing arrangements to identify the VAT and customs treatment that applies, and the documentation needed to support it. This includes advice on bonded warehouse and export-oriented arrangements, input tax credit eligibility, and the indirect tax treatment of cross-border services.",
          "Compliance. Preparation and review of VAT returns, supplementary duty returns and customs declarations; configuration of in-house VAT and inventory systems so that the records produced will support the firm's positions if questioned; and ongoing advice on rate changes and notifications issued through the year.",
          "Audits and disputes. Representation in VAT audits, classification disputes and adjudication proceedings, including drafting of responses, preparation of supporting evidence, and conduct of hearings at the Commissionerate level.",
          "Appeals and refund claims. Appeals before the Commissioner (Appeals) and references to the Customs, Excise and VAT Appellate Tribunal, together with refund claims for input tax, embassy refunds and export-related refunds.",
        ],
      },
    ],
  },

  {
    slug: "corporate",
    title: "Corporate & Commercial",
    order: 3,
    leadPartnerSlug: "imran-gazi",
    summary:
      "Company formation, joint ventures, shareholder agreements, regulatory licensing and ongoing corporate counsel.",
    intro: [
      "The firm acts as corporate counsel to private companies, foreign-owned subsidiaries and family-controlled groups operating in Bangladesh. The work covers formation through to day-to-day governance, with particular focus on the regulatory regime that surrounds doing business in Bangladesh.",
      "Corporate work in Bangladesh is shaped by the Companies Act 1994, the regulatory framework administered by the Bangladesh Investment Development Authority, Bangladesh Bank's foreign exchange regime, and the sector-specific licensing requirements that apply in industries such as manufacturing, technology and financial services.",
    ],
    sections: [
      {
        heading: "How the firm advises",
        paragraphs: [
          "The firm's corporate work is organised in four streams.",
          "Formation and structure. Incorporation of private and public limited companies before the Registrar of Joint Stock Companies, registration of branch and liaison offices, registration with the Bangladesh Investment Development Authority, and selection of the form of legal presence appropriate to the client's commercial objectives.",
          "Transactions and joint ventures. Drafting and negotiation of shareholders' agreements, joint venture agreements, share purchase agreements, asset transfers and intra-group arrangements, including the regulatory approvals that attach to changes in foreign equity and to the entry and exit of investors.",
          "Governance and counsel. Ongoing corporate counsel to in-house teams on board meetings, statutory filings, dividend declarations, share transfers, and the corporate aspects of employment and key contracts.",
          "Regulatory licensing. Applications and renewals before the Bangladesh Investment Development Authority, the relevant sector regulators, and Bangladesh Bank, including approvals required for repatriation, foreign borrowing and royalty payments.",
        ],
      },
    ],
  },

  {
    slug: "litigation",
    title: "Litigation & High Court",
    order: 4,
    leadPartnerSlug: "imran-gazi",
    summary:
      "Civil and commercial litigation, writ jurisdiction matters and appellate work before the Supreme Court of Bangladesh.",
    intro: [
      "The firm acts in civil, commercial and tax-related litigation across the trial courts and the Supreme Court of Bangladesh. The principal of the firm is an Advocate of the Supreme Court with rights of audience before the High Court Division, where much of the firm's contested work is heard.",
      "Disputes in Bangladesh are governed by the Code of Civil Procedure 1908, the Specific Relief Act 1877 and the constitutional writ jurisdiction under Article 102. The firm's litigation practice is built around the question that determines the outcome of most contested matters — whether the evidence the client has assembled, and the way the relevant statute is applied to it, will succeed before the particular court hearing the case.",
    ],
    sections: [
      {
        heading: "How the firm advises",
        paragraphs: [
          "The firm's litigation work covers four principal areas.",
          "Civil and commercial disputes. Contractual claims, recovery of debts, partnership and shareholder disputes, contested company matters under the Companies Act 1994, and commercial banking and security enforcement work, conducted before the trial courts and the High Court Division on appeal or reference.",
          "Writ jurisdiction. Constitutional writ petitions under Article 102 of the Constitution, principally in relation to tax assessments, regulatory orders and other administrative decisions that affect the client's rights, brought before the High Court Division.",
          "Tax and revenue litigation. References and writ matters arising out of tax, VAT and customs proceedings, including matters that proceed beyond the relevant Appellate Tribunal to the High Court Division and, where necessary, the Appellate Division.",
          "Appeals and revisions. Appellate work before the High Court Division and, on further appeal, the Appellate Division of the Supreme Court of Bangladesh, on questions of law arising from civil, commercial and revenue proceedings.",
        ],
      },
    ],
  },

  {
    slug: "cross-border",
    title: "Cross-Border & UK Desk",
    order: 5,
    leadPartnerSlug: "imran-gazi",
    summary:
      "Inbound investment into Bangladesh, repatriation and exchange-control matters, and UK–Bangladesh advisory for diaspora clients.",
    intro: [
      "The firm advises foreign investors entering the Bangladesh market and UK-based clients with Bangladesh-related interests, with a particular focus on the UK–Bangladesh corridor served through the firm's London chamber. The work cuts across tax, corporate, regulatory and exchange-control matters and is typically led with one of those substantive practices in mind.",
      "Cross-border work in Bangladesh is shaped by the Foreign Exchange Regulation Act 1947 and Bangladesh Bank's published practice on inbound investment and repatriation, the regulatory regime administered by the Bangladesh Investment Development Authority, the Income Tax Act 2023, and the double taxation treaty between the United Kingdom and Bangladesh.",
    ],
    sections: [
      {
        heading: "How the firm advises",
        paragraphs: [
          "The firm's cross-border work is organised in four streams.",
          "Inbound investment. Advice to foreign investors on the appropriate form of legal presence in Bangladesh, regulatory approvals required for entry, the structuring of foreign equity and shareholder arrangements, and the tax aspects of the entry transaction.",
          "Exchange control and repatriation. Bangladesh Bank approvals and reporting for inbound equity and borrowing, dividend and capital repatriation, payments for technical services and royalties, and the documentary requirements that determine whether those payments proceed without delay.",
          "Treaty and cross-border tax. Application of the UK–Bangladesh double taxation treaty to dividends, interest, royalties and capital gains; transfer pricing positions in cross-border groups; and the tax aspects of cross-border employment, secondment and remote-working arrangements.",
          "Diaspora and UK desk. Advice to UK-based clients on Bangladesh property, succession and tax matters, including transactions and disputes relating to inherited assets, the regulatory aspects of remittance, and coordination with UK advisers where required.",
        ],
      },
    ],
  },

  {
    slug: "civil",
    title: "Civil & Property",
    order: 6,
    leadPartnerSlug: "imran-gazi",
    summary:
      "Property, title and family matters handled discreetly for established clients of the firm.",
    intro: [
      "The firm advises established clients on civil and property matters, including title questions, registration and mutation issues, tenancy and family-related work. The practice is conducted alongside the firm's commercial and tax work for clients who would prefer to instruct a single firm on the full range of their Bangladesh matters.",
      "Civil and property work in Bangladesh sits across several statutes — the Transfer of Property Act 1882, the Registration Act 1908, the State Acquisition and Tenancy Act 1950, the Specific Relief Act 1877 and the Code of Civil Procedure 1908 — together with the published practice of the relevant Sub-Registrar's offices and revenue authorities.",
    ],
    sections: [
      {
        heading: "How the firm advises",
        paragraphs: [
          "The firm's civil and property work covers four principal areas.",
          "Title and due diligence. Title searches, review of deeds and mutation records, and preparation of opinions on the strength of title in connection with purchases, mortgages, and contested matters; coordination with the relevant Sub-Registrar and revenue offices.",
          "Transactions and registration. Preparation, execution and registration of sale deeds, mortgage deeds, gift deeds and partition deeds, including the stamp duty and registration fee planning that attaches to those transactions.",
          "Tenancy and possession. Advice and litigation in landlord–tenant matters, recovery of possession and eviction proceedings, and the contractual and statutory issues that recur in commercial and residential tenancies.",
          "Succession and family. Probate, letters of administration, succession certificates and partition suits; coordination with the family proceedings where matters of marriage, guardianship or maintenance are also engaged.",
        ],
      },
    ],
  },

  {
    slug: "criminal",
    title: "Criminal",
    order: 7,
    leadPartnerSlug: "imran-gazi",
    summary:
      "Representation in criminal proceedings, with a focus on economic and regulatory offences arising out of the firm's commercial practice.",
    intro: [
      "The firm acts for established clients in criminal proceedings, with a focus on economic and regulatory matters that arise out of the firm's commercial and tax practice. Work in this area is conducted with discretion and within the framework of professional conduct rules that govern the conduct of criminal defence.",
      "Criminal work in Bangladesh is governed by the Penal Code 1860, the Code of Criminal Procedure 1898 and a series of special statutes covering money laundering, anti-corruption and economic offences, administered respectively by the Anti-Corruption Commission, the Bangladesh Financial Intelligence Unit and the relevant courts.",
    ],
    sections: [
      {
        heading: "How the firm advises",
        paragraphs: [
          "The firm's criminal work covers three principal areas.",
          "Economic and regulatory offences. Defence in matters arising under the Money Laundering Prevention Act 2012, the Anti-Corruption Commission Act 2004 and tax-adjacent prosecutions, including pre-charge representation, framing of charges and trial.",
          "General criminal defence. Defence of established clients of the firm in matters arising under the Penal Code 1860 and the Code of Criminal Procedure 1898, conducted with attention to the professional and reputational considerations that attach to such proceedings.",
          "Appeals and revisions. Appellate and revisional work before the Sessions Courts, the High Court Division and, where appropriate, the Appellate Division.",
        ],
      },
    ],
  },
];

export function getPractice(slug: string): PracticeArea | undefined {
  return practiceAreas.find((p) => p.slug === slug);
}
