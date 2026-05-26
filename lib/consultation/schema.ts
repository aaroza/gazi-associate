import { z } from "zod";

export const JURISDICTIONS = ["Bangladesh", "United Kingdom", "Other"] as const;
export const MATTER_TYPES = ["Tax", "Corporate", "Litigation", "Other"] as const;

export type Jurisdiction = (typeof JURISDICTIONS)[number];
export type MatterType = (typeof MATTER_TYPES)[number];

export const ConsultationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  organisation: z.string().trim().max(120).optional().or(z.literal("")),
  jurisdiction: z.enum(JURISDICTIONS, { message: "Please select a jurisdiction." }),
  matterType: z.enum(MATTER_TYPES, { message: "Please select a matter type." }),
  message: z
    .string()
    .trim()
    .min(20, "Please describe the matter in a sentence or two.")
    .max(4000, "Message is too long."),
});

export type ConsultationInput = z.infer<typeof ConsultationSchema>;

export type ConsultationState = {
  status: "idle" | "error";
  fieldErrors?: Partial<Record<keyof ConsultationInput, string>>;
  formError?: string;
};

export const initialConsultationState: ConsultationState = { status: "idle" };
