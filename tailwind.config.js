/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Ubuntu', 'sans-serif']
    },
    extend: {
      colors: {
        "primaryMarineBlue": 'hsl(213, 96%, 18%)',
        "primaryPurplishBlue": 'hsl(243, 100%, 62%)',
        "primaryPastelBlue": 'hsl(228, 100%, 84%)',
        "primaryLightBlue": 'hsl(206, 94%, 87%)',
        "primaryStrawberryRed": 'hsl(354, 84%, 57%)',
        "neutralCoolGray": 'hsl(231, 11%, 63%)',
        "neutralLightGray": 'hsl(229, 24%, 87%)',
        "neutralMagnolia": 'hsl(217, 100%, 97%)',
        "neutralAlabaster": 'hsl(231, 100%, 99%)',
        "neutralWhite": 'hsl(0, 0%, 100%)'
      },
      backgroundImage: {
        'sidebar-desktop': "url('/src/assets/images/bg-sidebar-desktop.svg')",
        'sidebar-mobile': "url('/src/assets/images/bg-sidebar-mobile.svg')",
      }
    },
  },
  plugins: [],
}