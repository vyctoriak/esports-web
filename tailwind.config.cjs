/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/back-galaxy.png')",
        'nlw-gradient': 'linear-gradient(88deg, #9572F0 4%, #43E7AD 33%, #E1D52A 107%);',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}
