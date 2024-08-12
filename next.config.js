const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'fr-FR', 'ar-DZ'],
    defaultLocale: 'en-US',
  },
  images: {
    domains: ['pickbazar-react-rest.vercel.app']
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)