/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        'dark-primary': "#0C1321", // For CustomerReviews in dark mode
        'coral-red': "#FF6452",
        'slate-gray': "#6D6D6D",
        'light-gray': "#D1D5DB",
        'pale-blue': "#F5F6FF",
        'white-400': "rgba(255, 255, 255, 0.80)",
        'deep-black': "#000000", // True oily black
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'coral-glow': '0 0 8px 0 rgba(255, 100, 82, 0.5)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'hero-dark': "linear-gradient(rgba(12, 19, 33, 0.7), rgba(12, 19, 33, 0.7)), url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
        'card-dark': "linear-gradient(rgba(12, 19, 33, 0.2), rgba(12, 19, 33, 0.2)), url('assets/images/thumbnail-background.svg')"


      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}
