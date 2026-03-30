import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#07111F',
          800: '#0C1A2E',
          700: '#122743',
        },
        light: {
          100: '#F7F9FC',
          200: '#EEF3F8',
        },
        'text-light': '#F8FBFF',
        'text-dark': '#162235',
        accent: {
          400: '#7DB2FF',
          200: '#CFE2FF',
        },
      },
    },
  },
  plugins: [],
}

export default config
