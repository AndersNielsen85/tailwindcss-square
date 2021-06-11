const plugin = require('tailwindcss/plugin')

const square = plugin(
  function ({ addUtilities, theme, variants, e }) {
    const values = theme('square')

    addUtilities(
      [
        Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`square-${key}`)}`]: {
              'width': `${value}`,
              'height': `${value}`,
              'min-width': `${value}`,
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
        15: '15px',
        30: '30px',
        45: '45px',
      },
    },
    variants: {
      square: ['responsive'],
    },
  }
)

module.exports = square
