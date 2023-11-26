/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  trailingSlash: true,
  /**
   * TODO: Remove this when the site is ready
   */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/maintenance',
        permanent: false,
      }
    ]
  },
}

module.exports = nextConfig
