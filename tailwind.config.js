module.exports = {
  purge: [
    './layouts/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FFCADB',
          200: '#FF8FA4',
          300: '#FF728A',
          400: '#FF5470',
          500: '#ED3258',
          600: '#CD0041',
          700: '#AD002B',
          800: '#8E0018',
          900: '#6F0000',
        },
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
