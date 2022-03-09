module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottom-only': '0px 15px 10px -15px #111',
      },
      colors: {
        'logo-color': '#5D8BF4',
        'taskinputbg':'#8aa4e3',
        'tasksbg': '#051367'
      },
      fontFamily: {
        'logo-font': ['"Shadows Into Light"'],
        'overpass' : ['Overpass'],
        'Architects-Daughter' : ['"Architects Daughter"'],
        'Indie-Flower' : ['"Indie Flower"'],
        'Patrick-Hand' : ['"Patrick Hand"'],

      }
    },
  },
  plugins: [],
}