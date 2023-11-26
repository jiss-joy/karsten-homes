/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  trailingSlash: true,
  output: 'export'
  /**
   * TODO: Remove this when the site is ready
   */
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/maintenance',
  //       permanent: false,
  //     },
  //     {
  //       source: '/*',
  //       destination: '/not-found',
  //       permanent: true,
  //     }
  //   ]
  // },
}

module.exports = nextConfig
