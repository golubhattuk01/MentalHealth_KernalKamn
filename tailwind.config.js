/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/component/*.jsx",
    "./src/*/*.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
