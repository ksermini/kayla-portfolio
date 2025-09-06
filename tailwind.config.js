/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system','BlinkMacSystemFont','SF Pro Text','Helvetica Neue','Arial','ui-sans-serif','system-ui','sans-serif'],
      },
      colors: {
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      boxShadow: {
        subtle: "0 1px 1px rgba(0,0,0,0.04)",
      },
      borderRadius: {
        '2xl': "1rem",
      },
    },
  },
  plugins: [],
};
