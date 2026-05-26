"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitConsultation } from "@/lib/actions/consultation";
import {
  JURISDICTIONS,
  MATTER_TYPES,
  initialConsultationState,
  type ConsultationState,
} from "@/lib/consultation/schema";

export function ConsultationForm() {
  const [state, formAction] = useFormState<ConsultationState, FormData>(
    submitConsultation,
    initialConsultationState,
  );

  return (
    <form action={formAction} noValidate className="flex flex-col gap-8">
      <Field
        name="name"
        label="Full name"
        autoComplete="name"
        required
        error={state.fieldErrors?.name}
      />

      <Field
        name="organisation"
        label="Organisation"
        autoComplete="organization"
        error={state.fieldErrors?.organisation}
      />

      <Select
        name="jurisdiction"
        label="Jurisdiction"
        required
        options={JURISDICTIONS}
        error={state.fieldErrors?.jurisdiction}
      />

      <Select
        name="matterType"
        label="Matter type"
        required
        options={MATTER_TYPES}
        error={state.fieldErrors?.matterType}
      />

      <Textarea
        name="message"
        label="Message"
        required
        rows={6}
        error={state.fieldErrors?.message}
      />

      {state.formError ? (
        <p role="alert" className="font-sans text-sm text-burgundy">
          {state.formError}
        </p>
      ) : null}

      <SubmitButton />
    </form>
  );
}

const fieldShell = "flex flex-col gap-2";
const labelClass = "font-sans text-xs uppercase tracking-caps text-muted";
const controlClass =
  "w-full border border-rule bg-paper px-3 py-3 font-sans text-base text-body placeholder:text-muted focus:border-ink focus:outline-none";
const errorClass = "font-sans text-xs text-burgundy";

type FieldProps = {
  name: string;
  label: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
};

function Field({ name, label, required, autoComplete, error }: FieldProps) {
  const errId = `${name}-error`;
  return (
    <div className={fieldShell}>
      <label htmlFor={name} className={labelClass}>
        {label}
        {required ? <span aria-hidden> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errId : undefined}
        className={controlClass}
      />
      {error ? (
        <p id={errId} className={errorClass}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

type SelectProps = {
  name: string;
  label: string;
  required?: boolean;
  options: ReadonlyArray<string>;
  error?: string;
};

function Select({ name, label, required, options, error }: SelectProps) {
  const errId = `${name}-error`;
  return (
    <div className={fieldShell}>
      <label htmlFor={name} className={labelClass}>
        {label}
        {required ? <span aria-hidden> *</span> : null}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errId : undefined}
        className={controlClass}
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={errId} className={errorClass}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

type TextareaProps = {
  name: string;
  label: string;
  required?: boolean;
  rows?: number;
  error?: string;
};

function Textarea({ name, label, required, rows = 5, error }: TextareaProps) {
  const errId = `${name}-error`;
  return (
    <div className={fieldShell}>
      <label htmlFor={name} className={labelClass}>
        {label}
        {required ? <span aria-hidden> *</span> : null}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errId : undefined}
        className={`${controlClass} resize-y leading-relaxed`}
      />
      {error ? (
        <p id={errId} className={errorClass}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="leading-none inline-flex items-center justify-center self-start bg-burgundy px-6 py-3 font-sans text-sm font-medium tracking-wide text-paper transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Request a consultation"}
    </button>
  );
}
