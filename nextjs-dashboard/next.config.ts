import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/cogs125-react-dv', // match your repo name!
    assetPrefix: '/nextjs-dashboard/',
};

module.exports = nextConfig;
export default nextConfig;
