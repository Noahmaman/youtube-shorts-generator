/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0fff2',
          100: '#b3ffe0',
          200: '#80ffcc',
          300: '#4dffb8',
          400: '#26ffa8',
          500: '#00FF94',
          600: '#00cc76',
          700: '#009957',
          800: '#00663a',
          900: '#00331d',
        },
        secondary: {
          50: '#e0f7ff',
          100: '#b3eaff',
          200: '#80dcff',
          300: '#4dceff',
          400: '#26c5ff',
          500: '#00B8FF',
          600: '#0093cc',
          700: '#007099',
          800: '#004c66',
          900: '#002633',
        },
        dark: {
          50: '#737373',
          100: '#666666',
          200: '#595959',
          300: '#4d4d4d',
          400: '#404040',
          500: '#333333',
          600: '#262626',
          700: '#1a1a1a',
          800: '#0d0d0d',
          900: '#0A0A0A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #00FF94 0%, #00B8FF 100%)',
      },
    },
  },
  plugins: [],
} 