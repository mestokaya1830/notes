/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API: 'mesto',
  },
  async rewrites() {
    return {
      beforeFiles:[
        {
          source: '/rewrite/:path*',
          destination: '/'
        }
      ]
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
        port: ''
      }
    ]
  },
  
};

export default nextConfig;
