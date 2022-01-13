module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'open': 'Open Sans',
        'poppins': 'Poppins',
        'barlow': 'Barlow',
      },
      gridTemplateColumns: {
        'container': '1rem 1fr 1rem',
        'container2': '2rem 1fr 2rem',
      },
      colors: {
        'fizio': {
          "100": "#f4e8de",
          "500": "#FF4000",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
