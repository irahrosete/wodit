module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      wodBlack: '#323232',
      wodWhite: '#ffffff',
      wodGray: '#f6f6f6',
      wodDarkGray: '#d6d6d6',
      wodYellow: '#fff8b6',
    },
    extend: {
      fontFamily: {
        body: ['Antonio'],
        logo: ['Lexend Deca'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
