import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      ink: "var(--color-ink)",
      "ink-soft": "var(--color-ink-soft)",
      body: "var(--color-body)",
      paper: "var(--color-paper)",
      "paper-2": "var(--color-paper-2)",
      rule: "var(--color-rule)",
      gold: "var(--color-gold)",
      burgundy: "var(--color-burgundy)",
      muted: "var(--color-muted)",
    },
    fontFamily: {
      sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1.0625rem",
      subhead: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.875rem",
      "3xl": "2.5rem",
      "4xl": "3.25rem",
      display: "3.5rem",
      hero: "4.25rem",
    },
    lineHeight: {
      display: "1.05",
      tight: "1.15",
      relaxed: "1.625",
      prose: "1.7",
    },
    borderRadius: {
      none: "0",
      sm: "2px",
      DEFAULT: "2px",
    },
    boxShadow: {
      none: "none",
    },
    extend: {
      maxWidth: {
        content: "1180px",
        prose: "680px",
        narrow: "36ch",
      },
      letterSpacing: {
        caps: "0.12em",
      },
    },
  },
  plugins: [],
};
export default config;
