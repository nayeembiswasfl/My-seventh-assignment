/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        card: '0 24px 60px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        brand: {
          ink: '#16324f',
          teal: '#1f6f78',
          sand: '#f7efe5',
          coral: '#ed6a5a',
          gold: '#f4c95d',
          mint: '#d8f3dc',
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

