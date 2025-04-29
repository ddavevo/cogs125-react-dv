import type { NextConfig } from 'next';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/cogs125-react-dv', // match your repo name!
  assetPrefix: '/cogs125-react-dv',
};

export default nextConfig;
