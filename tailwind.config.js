/* eslint-disable import/no-extraneous-dependencies, global-require, import/no-extraneous-dependencies */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "components/**/*.{ts,tsx}",
    "shadcn/**/*.{ts,tsx}",
    "app/**/*.{ts,tsx}",
    "mdx-components.tsx",
    "content/**/*.mdx",
  ],
  presets: [require("./tailwind.preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-quran-me)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-debug-screens"),
    require("tailwind-layout")({
      gap: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    }),
  ],
};
