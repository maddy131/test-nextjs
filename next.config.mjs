
// next.config.mjs

import 'dotenv/config';

const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
};

export default nextConfig;
