import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
          xs: "320px",
          sm: "375px",
          sml: "500px",
          md: "667px",
          mdl: "768px",
          lg: "960px",
          lgl: "1024px",
          xl: "1280px",
          xxl: "1400px",  
      },
      colors: {
        a_blue:"#131921",
        a_light:"#232F3E",
        a_yellow:"#febd69",
        lightText:"#ccc",
      },
      fontFamily: {
        bodyFont: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
