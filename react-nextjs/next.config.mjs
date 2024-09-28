/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[{
        port: '',
        hostname: 'picsum.photos'
      }
    ]
  }
};

export default nextConfig;
