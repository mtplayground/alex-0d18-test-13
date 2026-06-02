import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import("tailwindcss").Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "hsl(var(--brand-black))",
          "near-black": "hsl(var(--brand-near-black))",
          surface: "hsl(var(--brand-surface))",
          "surface-raised": "hsl(var(--brand-surface-raised))",
          line: "hsl(var(--brand-line))",
          copy: "hsl(var(--brand-copy))",
          "copy-muted": "hsl(var(--brand-copy-muted))",
          orange: "hsl(var(--brand-orange))",
          "orange-hover": "hsl(var(--brand-orange-hover))",
          "orange-soft": "hsl(var(--brand-orange-soft))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        heading: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      fontSize: {
        eyebrow: ["0.8125rem", { fontWeight: "800", letterSpacing: "0", lineHeight: "1.2" }],
        "display-lg": [
          "clamp(3.5rem, 8vw, 7rem)",
          { fontWeight: "800", letterSpacing: "0", lineHeight: "0.95" },
        ],
        "display-md": [
          "clamp(2.75rem, 6vw, 5.5rem)",
          { fontWeight: "800", letterSpacing: "0", lineHeight: "1" },
        ],
        "heading-lg": ["clamp(2rem, 4vw, 3.5rem)", { letterSpacing: "0", lineHeight: "1.08" }],
        "heading-md": ["clamp(1.5rem, 3vw, 2.5rem)", { letterSpacing: "0", lineHeight: "1.15" }],
        body: ["1rem", { lineHeight: "1.75" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
      },
      spacing: {
        "page-x": "clamp(1rem, 4vw, 3rem)",
        "section-sm": "clamp(3rem, 7vw, 5rem)",
        section: "clamp(4rem, 9vw, 7.5rem)",
        "section-lg": "clamp(5rem, 12vw, 10rem)",
        gutter: "clamp(1rem, 3vw, 2rem)",
        rhythm: "clamp(1.5rem, 4vw, 3rem)",
      },
      maxWidth: {
        content: "76rem",
        copy: "42rem",
        measure: "34rem",
      },
      boxShadow: {
        "orange-glow": "0 0 40px hsl(var(--brand-orange) / 0.22)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
