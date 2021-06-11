const plugin = require('tailwindcss/plugin')

const square = plugin(
  function ({ addUtilities, theme, variants, e }) {
    const values = theme('square')

    addUtilities(
      [
        Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`square-${key}`)}`]: {
              'width': `${value}px`,
              'height': `${value}px`,
              'min-width': `${value}px`,
            },
          }
        }),
      ],
      variants('square')
    )
  },
  {
    theme: {
      square: {
        15: '15',
        30: '30',
        45: '45',
      },
    },
    variants: {
      square: ['responsive'],
    },
  }
)

module.exports = square
