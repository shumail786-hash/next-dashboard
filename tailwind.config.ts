import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        clrBg: {
          1: "#151c2c",
          2: "#2e374a"
        },
        clrBgSoft: "#182237",
        clrText: "white",
        clrTextSoft : "#b7bac1",
        positiveClr : "lime",
        pending: "#f7cb7375",
        done: "#afd6ee75",
        cancelled: "#f7737375"
      }
    },
  },
  plugins: [],
}
export default config
