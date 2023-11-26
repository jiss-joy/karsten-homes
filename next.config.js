/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/maintenance',
        permanent: false,
      },
      {
        source: '/**',
        destination: '/not-found',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
