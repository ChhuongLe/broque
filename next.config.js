/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol:"https",
        hostname:"images.unsplash.com",
      },
      {
        protocol:"https",
        hostname:"vignette.wikia.nocookie.net",
      }
    ]
  }
};

module.exports = nextConfig;
