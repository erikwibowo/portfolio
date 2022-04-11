module.exports = {
  content: ['./index.html', './public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        'inter': ['Inter'],
      },
      colors: {
        'primary': '#00bcd4',
        'secondary': '#64748b',
        'accent': '#ff5722',
        'primary-dark': '#00acc1',
        'secondary-dark': '#ff6f00',
        'accent-dark': '#e64a19',
        'light': '#f5f5f5',
        'dark': '#212121',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
