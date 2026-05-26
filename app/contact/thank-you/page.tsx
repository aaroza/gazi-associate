import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Thank you · Gazi & Associates",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <PageHero
      eyebrow="Consultation request"
      heading="Thank you."
      subtitle="Your request has been received. A member of the firm will respond by email, usually within two working days."
    />
  );
}
