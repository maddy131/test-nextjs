const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
 
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return  {
 @type {import('next').NextConfig} 

const nextConfig = {
        eslint: {
        ignoreDuringBuilds: true,
    },
};

module.export = nextConfig;
}
