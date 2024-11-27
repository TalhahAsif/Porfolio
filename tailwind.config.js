import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "'Poppins', serif",
        playfaire: "'Playfair Display', serif",
      },
      colors: {
        text_silver: "#C0C5C1",
        bg_rich_Black: "#0E0F19",
        bg_Vanila: "#E9EB9E",
        bg_cream: "#F3F9D2",
      },
    },
  },
  plugins: [nextui()],
  darkMode: "class",
};
