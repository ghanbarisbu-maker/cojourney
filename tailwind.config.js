/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-forest': '#2D5016',
        'vintage-green': '#8FBC8F',
        'warm-sand': '#F5E6D3',
        'clay-coral': '#E07A5F',
        'vintage-orange': '#F2A65A',
        'vintage-plum': '#8E7CC3',
        'soft-blue': '#A3D5FF',
        'support-bg-green': '#4A8C7B',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}