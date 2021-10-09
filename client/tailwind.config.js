module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    colors: {
      wodBlack: '#323232',
      wodBlackLight: '#696969',
      wodWhite: '#ffffff',
      wodGray: '#f6f6f6',
      wodDarkGray: '#d6d6d6',
      wodYellow: '#fff8b6',
      wodIvory: '#fffdeb',
      wodBlue: '#6C90C6',
      wodRed: '#E25050',
      wodAlert: '#e0ebf5',
    },
    extend: {
      fontFamily: {
        body: ['Antonio'],
        logo: ['Lexend Deca'],
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      backgroundColor: ['active'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
