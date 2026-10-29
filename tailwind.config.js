/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0B",
        bgAlt: "#121214",
        line: "#27282B",
        text: "#F4F3F0",
        dim: "#8C8D90",
        accent: "#B9A36B",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      letterSpacing: {
        wide2: "0.18em",
      },
    },
  },
  plugins: [],
};
