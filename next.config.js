/** @type {import('next').NextConfig} */
const removeImports = require('next-remove-imports')()

const nextConfig = {
  ...removeImports({
    experimental: {
      esmExternals: true
    }
  }),
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
