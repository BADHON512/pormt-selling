import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    serverActions:true
  },
  images: {
    domains: ['pixner.net',"res.cloudinary.com"],
  },
  /* config options here */
};

export default nextConfig;
