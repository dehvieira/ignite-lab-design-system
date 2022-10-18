/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors:{
      gray: {
          900: '#121214',
          800: '#202024',
          400: '#7C7C8A', 
          100: '#E1E1E6',  
      },
      blue:{
          500: '#1E76FD', 
          300: '#2D9CDB',
      },          
     
        'white': '#FFFFFF',
        'black': '#000',
        'black-900':'#202024',
        'transparent': 'transparent',
    },
    extend: {      
      screens:{
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      }, 
      
      fontFamily: {
        sans: 'Inter, sans-serif'
      },     
    },
  },
  plugins: [],
}
