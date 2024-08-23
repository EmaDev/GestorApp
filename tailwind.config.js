/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main":"#3F84FF"
      },
      animation: {
        'fade-in-out': 'fadeInOut 1.3s infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
