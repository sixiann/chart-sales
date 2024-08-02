/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/chart',
          permanent: true, // Use `false` for a temporary redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  