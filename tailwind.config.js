/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0a0a0a",
        cardBg: "#1a1a1a",
        neonPurple: "#8e44ad",
        neonBlue: "#00FFFF",
        neonGreen: "#39FF14",
      },
      fontFamily: {
        gamer: ['"Press Start 2P"', "monospace"],
      },
    },
  },
  plugins: [],
}
