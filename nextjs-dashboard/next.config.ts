import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/cogs125-react-dv',
    assetPrefix: '/cogs125-react-dv/',
};

export default nextConfig;
