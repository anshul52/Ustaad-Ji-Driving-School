import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    // Only the brand palette is available. Default Tailwind colors are removed on purpose.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        DEFAULT: "#0F2A6B",
        dark: "#0A1D4D",
      },
      accent: "#FFC72C",
      white: "#FFFFFF",
      navy: "#0B1A40",
      light: "#F5F8FF",
      // Functional colors (not brand): WhatsApp button + form error text.
      whatsapp: "#168A42",
      danger: "#B42318",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        xl2: "20px",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(11, 26, 64, 0.08)",
        lift: "0 10px 30px rgba(11, 26, 64, 0.14)",
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
