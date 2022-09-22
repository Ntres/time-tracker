module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'green-btn': '#5EBEA3',
      'ligh-grey': '#B5B5B5',
      'dark-white' :'#E7E7E7',
      'extra-ligh-grey': '#F4F4F4',
      'salmon': '#FF9984',
      'green-dot': '#5EBEA3',
      'extra-dark-gray': '#3F3F3F'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}