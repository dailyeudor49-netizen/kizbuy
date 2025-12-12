/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Opzionale: Se decidi di usare next/image in futuro per le immagini da picsum
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

module.exports = nextConfig;