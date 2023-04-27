/** @type {import('next').NextConfig} */
const withPostCSS = require('next-postcss');
const tailwindcss = require('tailwindcss');
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPostCSS({
  postcss:{
    plugins: [
      tailwindcss,
      require('autoprefixer')
    ]
  }
})

module.exports = nextConfig
