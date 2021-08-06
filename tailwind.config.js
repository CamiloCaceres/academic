const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        blue: {
          50: '#104103ff',
          100: '#f0f2ff',
          200: '#c7d0ff',
          300: '#a4b1fe',
          400: '#7b8ffe',
          500: '#536cfe',
          600: '#0c30fe',
          700: '#011ec1',
          800: '#01137a',
          900: '#000833',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
