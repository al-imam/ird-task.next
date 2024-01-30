/* eslint-disable import/no-extraneous-dependencies, global-require, import/no-extraneous-dependencies */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["components/**/*.{ts,tsx}", "shadcn/**/*.{ts,tsx}", "app/**/*.{ts,tsx}"],
  presets: [require("./tailwind.preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        quran: ["var(--font-me-quran)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-debug-screens")],
};
