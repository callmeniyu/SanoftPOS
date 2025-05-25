import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    /* config options here */
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["yourdomain.com"], // Add your domain here
        formats: ["image/avif", "image/webp"], // Modern image formats
    },
}

export default nextConfig
