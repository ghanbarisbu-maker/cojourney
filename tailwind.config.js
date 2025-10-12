/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-teal': '#008C77',
        'teal-accent': '#00A388',
        'soft-mint': '#CFF5E3',
        'warm-apricot': '#F4A261',
        'dark-charcoal': '#1C1F22',
        'vintage-cream': '#FFF8F0',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}