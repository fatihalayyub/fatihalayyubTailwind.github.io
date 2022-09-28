module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: { 
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors : {
        primary : '#16A34A',
        secondary : '#ffffff',
        heroSection : '#EDE0C4',
      },
      fontFamily : {
        'sans-serif' : ['Poppins',]
      },
      screens : {
        '2xl' : '1320px',
      },
    },
  }
}