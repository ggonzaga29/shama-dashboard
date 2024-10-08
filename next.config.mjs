/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/r',
        destination: '/refine',
      },
      {
        source: '/',
        destination: '/dashboard',
      },
    ];
  },
  images: {
    loader: 'custom',
    loaderFile: './src/common/lib/supabase/imageLoader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
