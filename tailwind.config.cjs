/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        romance: {
          bg0: '#0B0014',
          bg1: '#170026',
          pink: '#FF5DA2',
          blush: '#FFD1E5',
          purple: '#A855F7',
          gold: '#F7D37A',
          cream: '#FFF5FB',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255, 93, 162, 0.25), 0 20px 60px rgba(255, 93, 162, 0.18)',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(10px) scale(0.9)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '100%': { transform: 'translateY(-120px) scale(1.15)', opacity: '0' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
      animation: {
        floatUp: 'floatUp var(--dur, 7s) linear infinite',
        shimmer: 'shimmer 2.8s ease-in-out infinite',
        fadeUp: 'fadeUp 700ms ease-out both',
      },
    },
  },
  plugins: [],
}

