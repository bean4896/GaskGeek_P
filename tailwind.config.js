module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        kiwibrown:'#533228',
        dmorange:'#aa330b',
        dmbody:'#1a1a1a',
        dmtitle:'#e2e2e2',
        dmcontent:'#a5a5a5',
        dmbgblack:'#414344',
        dmbgblackie:'#383838',
        dmbglight:'#2b2d2e',
        toxic: '#B1DB30',
        lighttoxic:'#E0F97D',
        green:{
          deep: '#588800',
        }
      }

    },
  },
  plugins: [],
}