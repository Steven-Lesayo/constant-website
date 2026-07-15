/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        constant: {
          black: '#0A0A0A',
          dark: '#1A0033',
          purple: '#8B00FF',
          accent: '#C026D3',
          glass: 'rgba(255,255,255,0.05)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'purple-glow': '0 0 20px rgba(139,0,255,0.5)',
        'purple-glow-lg': '0 0 40px rgba(139,0,255,0.4)',
      },
    },
  },
  plugins: [],
}
