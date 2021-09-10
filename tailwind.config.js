module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'blackMy' : '#06060D',
      'brownMy' : '#B85C38',
     }),
    
    extend: {
      width: {
        '550': '550px',
        '450': '450px',
        '488' : '488px',
        '532' : '532px',
        '480' : '480px',
       },
       height: {
         '600' : '600px',
         '530' : '530px',
         '760' : '760px',
         '432' : '432px'
       },
       margin: {
        'top': '476'
       },
       spacing: {
         29.75 : '29.75rem',
       },
       colors : {
        brownMy : '#B85C38',
        blackMy : '#06060D',
        grayMy: '#A0A0A0'
       }

    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
};
