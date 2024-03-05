/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  /**
   * TODO: Remove this when the site is ready
   */
  async redirects() {
    if (process.env.NODE_ENV === 'development') return [];

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
