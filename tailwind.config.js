module.exports = {
  purge: [
    './layouts/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
    './node_modules/@superciety/pwa-core-library/**/*.js',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E6FFFA',
          200: '#B2F5EA',
          300: '#81E6D9',
          400: '#4FD1C5',
          500: '#38B2AC',
          600: '#319795',
          700: '#2C7A7B',
          800: '#285E61',
          900: '#234E52',
        },
        freeiam: '#ED3258',
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
    },
    fontFamily: {
      head: ['neue_einstellungbold', 'sans-serif'],
      text: ['cerebri_sans_proregular', 'sans-serif'],
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
