/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        reds: {
          400: '#d64963',
          DEFAULT: '#cc1b3c',
        },
      },
    },
  },
  plugins: [],
}
 