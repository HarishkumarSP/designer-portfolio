/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '480px' },
      // => @media (max-width: 480px) { ... }
      'md': { 'max': '728px' },
      // => @media (max-width: 728px) { ... }

      'lg': { 'max': '1024px' },
      // => @media (max-width: 1024px) { ... }

      'xl': { 'max': '1280px' },
      // => @media (max-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}