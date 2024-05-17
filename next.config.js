/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configurations (if any)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ], // Update this with your remote image domains or patterns
    loader: 'default', // Specify the image loader to use ('default', 'imgix', 'cloudinary', or a custom loader)
    path: '/_next/image', // Specify the path for the optimized images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Specify device sizes for automatic quality selection
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Specify image sizes for automatic quality selection
  },
  
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: 'file-loader',
    });

    return config;
  }
};

module.exports = nextConfig;
