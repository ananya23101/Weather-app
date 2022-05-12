module.exports = {
  content: ['./src/**/*.html',
  './src/**/*.js',
  './public/**/*.html',
  './public/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary:  '#45278B',
        secondary: '#2E335A',
        third: '#1C1B33',
        
     },
     screens:{
      mg: '1000px',
      ml: '850px'
},
     fontFamily:{
      bob: ['Nunito'],
},
 width:{
  '128': '30rem',
 },
     height: {
      "40v": "40vh",
     },
    },
  },
  plugins: [],
}
