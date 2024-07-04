// next.config.mjs

import 'dotenv/config';

export default {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
};
const nextConfig = {
    reactStrictMode : false
};

export default nextConfig;
