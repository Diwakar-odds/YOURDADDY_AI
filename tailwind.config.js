/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sky Dream Palette
        'sky-dream': {
          'charcoal': '#1F2937',
          'charcoal-light': '#374151',
          'sky': '#38BDF8',
          'sky-light': '#7DD3FC',
          'white': '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
};
