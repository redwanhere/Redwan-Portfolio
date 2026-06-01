/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0D14",
        surface: "#111827",
        border: "#1F2937",
        primary: "#6366F1",
        accent: "#38BDF8",
        success: "#10B981",
        "text-main": "#F9FAFB",
        "text-muted": "#9CA3AF",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dmSans: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
