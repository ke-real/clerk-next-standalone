import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env:{
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: "pk_live_xxx",
    CLERK_SECRET_KEY: "sk_live_xxx",
  },
  output: "standalone",
};

export default nextConfig;
