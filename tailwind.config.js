/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Neon Danger Palette
        'neon': {
          'black': '#0D0D0D',
          'onyx': '#121212',
          'surface': '#1A1A1A',
          'red': '#FF0040',
          'pink': '#FF4D6A',
          'salmon': '#FFA07A',
        }
      }
    },
  },
  plugins: [],
};
