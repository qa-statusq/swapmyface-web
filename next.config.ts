import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,

  async redirects() {
    return [
      { source: '/privacy/index.html', destination: '/privacy', permanent: true },
      { source: '/terms/index.html', destination: '/terms', permanent: true },
      { source: '/support/index.html', destination: '/support', permanent: true },
      { source: '/responsible-use/index.html', destination: '/responsible-use', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
