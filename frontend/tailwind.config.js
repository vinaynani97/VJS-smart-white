/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Clash Display"', '"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Brand accent — replaces previous orange. Mapped 1:1 by name so no class changes are required.
        signal: {
          50: "#EEF2FF",
          100: "#DDE5FF",
          200: "#B8C7FE",
          300: "#8B9FFD",
          400: "#5773F7",
          500: "#1F3CD0",
          600: "#1830AB",
          700: "#15278A",
          800: "#14236F",
          900: "#131F58",
          950: "#0B1438",
        },
        // Surface / text scale — remapped so ink-950 = white (page bg) and ink-50 = darkest text.
        // This preserves every existing className (bg-ink-950, text-ink-50, border-ink-800, etc.)
        // while flipping the visual theme from dark to light. No layout/structure changes required.
        ink: {
          50: "#111827",
          100: "#1F2937",
          200: "#374151",
          300: "#4B5563",
          400: "#6B7280",
          500: "#9CA3AF",
          600: "#C9CED6",
          700: "#D1D5DB",
          800: "#E5E7EB",
          900: "#F8FAFC",
          950: "#FFFFFF",
        },
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "marquee": { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "pulse-soft": { "0%,100%": { opacity: 0.6 }, "50%": { opacity: 1 } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee 40s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
