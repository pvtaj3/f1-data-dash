/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'f1-red': '#E10600',
        'f1-light': '#FFFFFF',
        'f1-gray': '#F5F5F5',
        'f1-dark': '#1A1A1A',
        'f1-border': '#E5E5E5',
        'haas-red': '#E10600',
        'haas-white': '#FFFFFF',
        'haas-gray': '#B6BABD',
        'haas-dark': '#1A1A1A',
        'alpine-pink': '#FF87BC',
        'alpine-blue': '#0093CC',
      },
      fontFamily: {
        'f1': ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
