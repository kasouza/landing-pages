module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Spartan', 'sans-serif']
    },
    extend: {
      colors: {
        'desaturated-dark-cyan': 'hsl(180, 29%, 50%)',
        'light-grayish-cyan-background': 'hsl(180, 52%, 96%)',
        'light-grayish-cyan-tablets': 'hsl(180, 31%, 95%)',
        'dark-grayish-cyan': 'hsl(180, 8%, 52%)',
        'very-dark-grayish-cyan': 'hsl(180, 14%, 20%)',
      },
    },
  },
  plugins: [],
}
