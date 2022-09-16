/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['thumbs2.imgbox.com']
  }
}

module.exports = nextConfig
