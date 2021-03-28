module.exports = {
    purge: [
      './public/**/*.html',
      './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary: '#009e66',
          secondary: '#FC5C04',
          body: '#475C68',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }  