
// @ts-check
 
export default (phase, { defaultConfig }) => {
  
    @type {import('next').NextConfig};
   
  const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },  /* config options here */
  }
  return nextConfig;
}

