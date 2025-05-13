module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#121212',          // Deep dark background
        'custom-surface': '#1E1E1E',      // Card/surface background
        'custom-blue': '#3B82F6',         // Primary accent (Tailwind blue-500)
        'custom-cyan': '#22D3EE',         // Secondary accent (Tailwind cyan-400)
        'custom-text-primary': '#E5E7EB', // Light gray text (Tailwind gray-200)
        'custom-text-secondary': '#9CA3AF',// Medium gray text (Tailwind gray-400)
      },
    },
  },
  plugins: [],
};