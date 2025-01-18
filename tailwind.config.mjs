/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        'body':['Gliroy'],
        'heading':["Gliroy-ExtraBold"],
        'headingHeavy':["Gliroy-Heavy"],
        'headingSemiBold':["Gliroy-SemiBold"]

      }
      
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
      ".scrollbar-hide::-webkit-scrollbar":{
          display: "none"
      },

      ".scrollbar-hide": {
          "-ms-overflow-style": "none",  
          "scrollbar-width": "none"
      }
      
      }
      addUtilities(newUtilities)
    }
    
  ],
};
