/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://lh3.googleusercontent.com/', 'https://api.themoviedb.org/', 'drive.google.com'],
  }
}

module.exports = nextConfig
