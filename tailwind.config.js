/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'grip-red': '#FF6B6B',
        'grip-orange': '#FF8E53',
        'grip-pink': '#FF5E8E',
        'live-red': '#DC2626',
        'accent-blue': '#3B82F6',
        'success-green': '#10B981',
      },
      fontFamily: {
        'pretendard': ['Pretendard', 'sans-serif'],
      },
      animation: {
        'live-pulse': 'live-pulse 2s infinite',
        'heart-float': 'heart-float 3s ease-in-out infinite',
        'typing': 'typing 3s steps(40, end)',
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
      keyframes: {
        'live-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'heart-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
