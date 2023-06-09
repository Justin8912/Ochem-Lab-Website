/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/*.{js,ts,jsx,tsx,mdx}',
    './resources/**/*.{js,ts,jsx,tsx,mdx}',
    './resources/assets/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        heightTransition: {
          '0%': {height: '0px'},
          '100%': {height: '500px'}
        },
        animation: {
          'height-transition': 'height-transition 2s linear infinite',
        }
      },
    },
    listStyleType: {
      alpha: 'upper-alpha'
    }
  },
  plugins: [],
}
