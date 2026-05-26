"use server";

import { redirect } from "next/navigation";
import {
  ConsultationSchema,
  type ConsultationInput,
  type ConsultationState,
} from "@/lib/consultation/schema";

export async function submitConsultation(
  _prev: ConsultationState,
  formData: FormData,
): Promise<ConsultationState> {
  const raw = {
    name: formData.get("name"),
    organisation: formData.get("organisation"),
    jurisdiction: formData.get("jurisdiction"),
    matterType: formData.get("matterType"),
    message: formData.get("message"),
  };

  const parsed = ConsultationSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: ConsultationState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && isFieldKey(key) && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return { status: "error", fieldErrors };
  }

  // Email delivery (Resend → chambers@gazilegal.com) is wired in Step 8.
  if (process.env.NODE_ENV !== "production") {
    console.log("[consultation] received", parsed.data);
  }

  redirect("/contact/thank-you");
}

function isFieldKey(key: string): key is keyof ConsultationInput {
  return (
    key === "name" ||
    key === "organisation" ||
    key === "jurisdiction" ||
    key === "matterType" ||
    key === "message"
  );
}
