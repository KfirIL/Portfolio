/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1600px",
      xl: "1800px",
      "2xl": "1920px",
    },
    extend: {
      colors: {
        "bk-dark-shades": "#153347",
        "bk-dark-accent": "#194564",
        "bk-main-brand": "#47729F",
        "bk-light-accent": "#beccd1",
        "bk-light-shades": "#E6E4E7",
        "bkl-dark-shades": "#eee4dd",
        "bkl-dark-accent": "#e6ba9b",
        "bkl-main-brand": "#b88d60",
        "bkl-light-accent": "#41332e",
        "bkl-light-shades": "#191b18",
      },
      backgroundImage: {
        "hero-bg": "url('/images/bg.jpeg')",
      },
    },
    fontFamily: {
      Poopins: ["Poopins, sans-serif"],
      Bebas: ["Bebas Neue, sans-serif"],
      Outfit: ["Outfit, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};
