/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        //elements
        DarkBlue:"#2b3945",
        //bg
        VDarkBlue:"#202c37",
        //ltext
        VLDarkBlue:"#111517",
        //linput
        DarkGray:"#858585",
        //lbg
        VLightGray:"#fafafa"
        //DTEXT && lightElement WHITE

      }
    },
 
  },
  plugins: [],
}