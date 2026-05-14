/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B1F3A',
        secondary: '#0F766E',
        accent: '#FACC15',
        danger: '#DC2626',
        bg: '#F8FAFC',
        card: '#FFFFFF',
        muted: '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

