module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },
    extend: {
      fontSize: {
        xs: '0.8rem'
      },
      animation: {
        'arrow': 'arrow 250ms linear forwards',
        'show': 'show 250ms linear forwards',
      },
      backgroundImage: {
        dots: 'url("/public/images/bg-dots.svg")',
        tablet: 'url("/public/images/bg-tablet-pattern.svg")'
      },
      colors: {
        'soft-blue': 'hsl(231, 69%, 60%)',
        'soft-red': 'hsl(0, 94%, 66%)',
        'grayish-blue': 'hsl(229, 8%, 60%)',
        'very-dark-blue': 'hsl(229, 31%, 21%)',
      },
      keyframes: {
        arrow: {
          '0%': { transform: 'rotate(0deg)', filter: 'brightness(0) saturate(100%) invert(48%) sepia(80%) saturate(2106%) hue-rotate(329deg) brightness(107%) contrast(96%)' },
          '100%': { transform: 'rotate(180deg)', filter: 'brightness(0) saturate(100%) invert(48%) sepia(80%) saturate(2106%) hue-rotate(329deg) brightness(107%) contrast(96%)' },
        },
        show: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        }
      }
    },
  },
  plugins: [],
}
