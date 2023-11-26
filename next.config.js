/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  /**
   * TODO: Remove this when the site is ready
   */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/maintenance',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
