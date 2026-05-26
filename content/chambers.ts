// Chamber data. Addresses and lead counsel sourced from /copy.md and the
// firm's direct instruction. Phone is optional — the London chamber is
// primarily reached by email. Images are line-art placeholders pending
// commissioned architectural photography.

export type ChamberImage = {
  src: string;
  alt: string;
};

export type Chamber = {
  slug: "dhaka" | "jashore" | "london";
  name: string;
  address: ReadonlyArray<string>;
  leadLawyer: string;
  phone?: string;
  email: string;
  blurb?: string;
  image?: ChamberImage;
};

export const chambers: ReadonlyArray<Chamber> = [
  {
    slug: "dhaka",
    name: "Dhaka",
    address: ["Room 06, 4th Floor, GA Bhaban", "8 Purana Paltan, Dhaka 1000"],
    leadLawyer: "Md. Imran Gazi",
    phone: "+880 1712 355973",
    email: "chambers@gazilegal.com",
    blurb:
      "The firm's Dhaka chamber, in Purana Paltan, is the principal office and the base for the firm's tax, corporate and litigation work.",
    image: {
      src: "/chambers/dhaka.png",
      alt: "Dhaka — Mughal/colonial Bengali architecture",
    },
  },
  {
    slug: "jashore",
    name: "Jashore",
    address: ["LB Tower, 3rd Floor, Noapara Bazar", "Abhaynagar, Jashore 7460"],
    leadLawyer: "Md. Imran Gazi",
    phone: "+880 1712 355973",
    email: "chambers@gazilegal.com",
    blurb:
      "The Jashore chamber serves the firm's clients in the industrial and port belt around Noapara, with a particular concentration of work for manufacturing and logistics clients.",
    image: {
      src: "/chambers/jashore.png",
      alt: "Jashore — regional Bengal architecture",
    },
  },
  {
    slug: "london",
    name: "London",
    address: ["143 Cranbrook Road", "Ilford, Essex IG1 4PU"],
    leadLawyer: "Md. Imran Gazi",
    email: "chambers@gazilegal.com",
    blurb:
      "The London chamber, in Ilford, supports the firm's UK-based clients on Bangladesh-related matters and provides a point of contact for diaspora and inbound investment work.",
    image: {
      src: "/chambers/london.png",
      alt: "London — classical English legal architecture",
    },
  },
];
