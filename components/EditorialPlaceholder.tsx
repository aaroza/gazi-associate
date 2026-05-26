type EditorialPlaceholderProps = {
  note?: string;
};

export function EditorialPlaceholder({ note }: EditorialPlaceholderProps) {
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      `EditorialPlaceholder rendered during production build. Copy pending — do not publish. ${
        note ? `Note: ${note}` : ""
      }`,
    );
  }

  return (
    <div className="border border-burgundy bg-paper-2 p-6">
      <p className="font-sans text-xs uppercase tracking-caps text-burgundy">
        Copy pending — do not publish
      </p>
      <p className="mt-3 max-w-prose font-mono text-sm leading-relaxed text-body">
        {note ?? "This section is awaiting approved copy from the client."}
      </p>
    </div>
  );
}
