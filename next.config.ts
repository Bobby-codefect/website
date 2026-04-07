import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

/* A SUPPRIMER EN PROD */
module.exports = {
    allowedDevOrigins: ['192.168.1.72'],
}

export default nextConfig;
