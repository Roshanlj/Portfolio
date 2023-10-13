/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
        'lexend': ['Lexend Zetta'],
        'marck': ['Marck Script'],
        'inria': ['Inria Sans'],
        'inknut': ['Inknut Antiqua'],
      },
    },
  },
  plugins: [],
}

