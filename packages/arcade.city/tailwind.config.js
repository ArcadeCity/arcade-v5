const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const mdx = require('@mdx-js/mdx')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/**/*.{tsx,js,mdx}',
      './components/**/*.{tsx,js,mdx}',
      './next.config.js',
    ],
    transform: {
      mdx: mdx.sync,
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        amber: '#ffa76c',
        arwes: '#7efcf6',
        arwes2: '#acf9fb',
        bluebell: '#9D98CB',
        electricindigo: '#5B20F2',
        electricviolet: '#AE30FF',
        haiti: '#120B29',
        minsk: '#46367C',
        moonraker: '#EEECFB',
        pinkflamingo: '#F459F4',
        portgore: '#2D2252',
        purple: '#1C133A',
        radicalred: '#FC3A57',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.white'),
            p: {
              fontSize: 20,
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            a: {
              color: theme('colors.white'),
              '&:hover': {
                color: theme('colors.moonraker'),
              },
            },
            strong: {
              color: theme('colors.white'),
              fontWeight: 700,
            },
            blockquote: {
              color: theme('colors.bluebell'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    function ({ addBase }) {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            fontDisplay: 'swap',
            src: 'url("/fonts/Inter-roman.var-latin.woff2?3.13") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            fontDisplay: 'swap',
            src: 'url("/fonts/Inter-italic.var-latin.woff2?3.13") format("woff2")',
          },
        },
      ])
    },
  ],
}
