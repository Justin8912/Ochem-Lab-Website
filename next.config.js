/** @type {import('next').NextConfig} */
const withPostCSS = require('next-postcss');
const tailwindcss = require('tailwindcss');
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.txt$/i,
      loader: 'raw-loader'
    })
    config.module.rules.push({
      test: /\.tsv$/i,
      loader: 'raw-loader'
    })

    return config
  }
}

module.exports = withPostCSS({
  postcss:{
    plugins: [
      tailwindcss,
      require('autoprefixer')
    ]
  },
})

module.exports = nextConfig
