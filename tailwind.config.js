const postStyles = require('./src/styles/mdx-styles')

module.exports = {
  plugins: [require('@tailwindcss/typography')],
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        slab: '"Roboto Slab", serif',
        mono: '"Roboto Mono", monospace'
      },
      fontWeight: {
        'normal-light': '351'
      },
      typography: postStyles
    }
  },
  variants: {
    extend: {
      margin: ['first', 'last'],
      height: ['hover']
    }
  }
}
