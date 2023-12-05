/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Commissioner: ["Commissioner", "sans-serif"],
      },
      colors: {
        // Primary
        ModerateCyan: "hsl(176, 50%, 47%)",
        DarkCyan: "hsl(176, 72%, 28%)",
        // Neutral
        Black: "hsl(0, 0%, 0%)",
        DarkGray: "hsl(0, 0%, 48%)",
      },
    },
  },
  plugins: [],
};
