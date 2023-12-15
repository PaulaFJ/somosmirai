/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors: {
        'footer-bg': '#016059',
      },
      backgroundImage: {
        'background-mirai': "url('/background.png')",
        'bg-mirai': "url('/bg-mirai.png')",
        'onair_bg': "linear-gradient(90deg, rgba(36,115,100,1) 0%, rgba(78,159,122,1) 2%, rgba(243,129,44,1) 32%, rgba(243,129,44,1) 100%)",
        
      },
      fontFamily: {
        'sans': 'Granphyr',
        'sans-thin': 'Granphyr Thin',
        'sans-bold': 'Granphyr Bold'
      },
      backgroundColor: {

      },
      screens: {
        'xl': '1440px',
      },
    },
  },
  plugins: [],
}