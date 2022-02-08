module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cb3success: {
          50: '#F7F6EB',
          100: '#F0ECD6',
          200: '#E8E3C2',
          300: '#E1DAAE',
          400: '#DCD5A1',
          500: '#D8CF96',
          600: '#D4CA8A',
          700: '#D0C57F',
          800: '#CBBF73',
          900: '#C7BA67',
        },
        cb3warning: {
          50: '#FFA974',
          100: '#FFA46C',
          200: '#FF9F63',
          300: '#FF995A',
          400: '#FF934F',
          500: '#FF8B43',
          600: '#FF8234',
          700: '#FF7926',
          800: '#FF7017',
          900: '#FF6708',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
