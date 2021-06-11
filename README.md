# tailwindcss-square

A plugin that provides utilities for visually rendering square containers.


## Installation

Install the plugin from npm:

```sh
# Using npm
npm install tailwindcss-square

# Using Yarn
yarn add tailwindcss-square
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-square'),
    // ...
  ],
}
```

## Usage

Use the `square-{n}` utilities to specify the size of the square

```html
<div class="square-15"></div>
<button class="square-30"></button>
<i class="square-45"></i>
```

Utilities for 3 square containers are generated by default:

| Class  | CSS |
| ---  | --- |
| `square-15` |  `width: 15px;`<br>`height: 15px;`<br>`min-width: 15px;` |
| `square-30` |  `width: 30px;`<br>`height: 30px;`<br>`min-width: 30px;` |
| `square-45` |  `width: 30px;`<br>`height: 30px;`<br>`min-width: 30px;` |

## Configuration

You can configure which values and variants are generated by this plugin under the `square` key in your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      square: {
        5: '5',
        10: '10',
        20: '20',
        25: '25',
      }
    }
  },
  variants: {
    square: ['responsive', 'hover']
  }
}
```