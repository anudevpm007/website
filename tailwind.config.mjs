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
      fontFamily: {
        'body': ['Gliroy'],
        'heading': ["Gliroy-ExtraBold"],
        'headingHeavy': ["Gliroy-Heavy"],
        'headingSemiBold': ["Gliroy-SemiBold"]

      },
      keyframes: {
        fade_left: {
          "0%": {
            opacity: "0",
            // scale:"0"
            "margin-left": "-50vw"

          },
          "50%": {
            opacity: "0",
            // scale:"0"
            "margin-left": "-50vw"

          },
          "100%": {
            opacity: "1",
            // scale:"1"
            "margin-left": "0vw"
          }
        },
        fade: {
          "0%": {
            opacity: "0",

          },
          "100%": {
            opacity: "1",
          }
        },

      },
      animation: {
        fade_left: "fade_left linear",
        fade: "fade linear",
      }

    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none"
        },

        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none"
        },
        ".scrollSettings": {
          "animation-timeline": "View()",
          "animation-range": "entry 0% cover 50%"
        },
        ".scrollSettings2": {
          "animation-timeline": "View()",
          "animation-range": "entry 0% cover 30%"
        },
        ".Gradient": {
          "background": "rgb(24,91,216)",
          "background": "linear-gradient(180deg, rgba(24,91,216,0.5) 0%, rgba(255,255,255,1) 100%)"
        }

      }
      addUtilities(newUtilities)
    }

  ],
};
