module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "navbar":"#107AB0",
        "heroBg":"#FDC1C5",
        "footer":"#FD5956"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
