// People data. Imran Gazi's record is sourced from /copy.md (with the
// bracketed [please confirm] notes removed by editing the affected sentence
// rather than guessing the underlying facts). The associates' bios are
// short, factually-safe descriptions of role and language fluency; the
// firm will extend them with bar admission year, university and specific
// practice focus as that information is supplied.

export type Person = {
  slug: string;
  name: string;
  role: string;
  practiceAreas: ReadonlyArray<string>;
  email: string;
  languages: ReadonlyArray<string>;
  photo: string;
  bio: ReadonlyArray<string>;
  memberships: ReadonlyArray<string>;
  registrations: ReadonlyArray<string>;
  rightsOfAudience: ReadonlyArray<string>;
  order: number;
};

export const people: ReadonlyArray<Person> = [
  {
    slug: "imran-gazi",
    name: "Md. Imran Gazi",
    role: "Founding Partner",
    order: 1,
    practiceAreas: ["tax", "vat-customs", "corporate", "litigation"],
    email: "imran.gazi@gazilegal.com",
    languages: ["English", "Bengali"],
    photo: "/dev/imran_gazi.png",
    bio: [
      "Md. Imran Gazi is the founding partner of Gazi & Associates. He advises Bangladeshi and foreign clients on tax, VAT and corporate matters, and represents clients before the High Court Division of the Supreme Court of Bangladesh and the relevant tax and VAT tribunals.",
      "Mr. Gazi is an Advocate of the Supreme Court of Bangladesh and a registered Income Tax Practitioner under the National Board of Revenue. He is a member of the Bangladesh Bar Council, the Dhaka Bar Association and the Dhaka Taxes Bar Association.",
      "Before founding the firm, Mr. Gazi was an adjunct faculty member at Daffodil International University.",
      "His current practice focuses on NBR advisory work, tax controversy, and corporate counsel for foreign-owned and family-controlled businesses operating in Bangladesh. He is fluent in Bengali and English.",
    ],
    memberships: [
      "Bangladesh Bar Council",
      "Dhaka Bar Association",
      "Dhaka Taxes Bar Association",
    ],
    registrations: ["Income Tax Practitioner, National Board of Revenue"],
    rightsOfAudience: ["Supreme Court of Bangladesh, High Court Division"],
  },
  {
    slug: "shipon-chandra-ghosh",
    name: "Shipon Chandra Ghosh",
    role: "Associate",
    order: 2,
    practiceAreas: ["tax", "corporate", "litigation"],
    email: "chambers@gazilegal.com",
    languages: ["English", "Bengali"],
    photo: "/dev/shipon_ghosh.png",
    bio: [
      "Shipon Chandra Ghosh is an associate at Gazi & Associates. He works alongside the founding partner across the firm's tax, corporate and litigation practice, with day-to-day responsibility for case preparation, NBR correspondence and chamber attendance.",
      "Mr. Ghosh is fluent in Bengali and English. Enquiries may be directed to the firm's general chamber email.",
    ],
    memberships: [],
    registrations: [],
    rightsOfAudience: [],
  },
  {
    slug: "sabuj-morol",
    name: "Sabuj Morol",
    role: "Associate",
    order: 3,
    practiceAreas: ["tax", "vat-customs", "corporate"],
    email: "chambers@gazilegal.com",
    languages: ["English", "Bengali"],
    photo: "/dev/sobuj_morol.png",
    bio: [
      "Sabuj Morol is an associate at Gazi & Associates. He supports the firm's tax, VAT and corporate work, with a particular focus on compliance preparation, audit responses and the documentation work that sits behind both advisory and contentious matters.",
      "Mr. Morol is fluent in Bengali and English. Enquiries may be directed to the firm's general chamber email.",
    ],
    memberships: [],
    registrations: [],
    rightsOfAudience: [],
  },
];

export function getPerson(slug: string): Person | undefined {
  return people.find((p) => p.slug === slug);
}
