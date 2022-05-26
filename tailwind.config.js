module.exports = {
  content: ['./src/**/*.html',
  './src/**/*.js',
  './dist/**/*.html',
  './dist/**/*.js'],
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
 backgroundImage: {
  'clear': "url('https://cdn.iconscout.com/icon/free/png-256/close-1912235-1617704.png')",
},
     height: {
      "40v": "40vh",
     },
    },
  },
  plugins: [],
}
