/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
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
