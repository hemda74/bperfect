const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true, // Enable React strict mode for identifying potential problems
	poweredByHeader: false, // Remove "X-Powered-By" header for improved security
	trailingSlash: false, // Disable trailing slashes in URLs
	compiler: {
		styledComponents: true, // Enable support for styled-components
	},
	output: "standalone", // Optimize for deployment as a standalone application
	images: {
		domains: ["res.cloudinary.com"], // Allow images from specified domains
		formats: ["image/avif", "image/webp"], // Enable modern image formats for performance
		deviceSizes: [640, 768, 1024, 1280, 1600], // Specify responsive image sizes
		minimumCacheTTL: 60, // Cache images for 60 seconds
	},
	experimental: {
		appDir: true, // Enable experimental `app` directory (if applicable)
	},
	eslint: {
		ignoreDuringBuilds: true, // Disable ESLint during build to prevent blocking
	},
	typescript: {
		ignoreBuildErrors: true, // Disable TypeScript errors during builds (if needed)
	},
	webpack: (config, { isServer }) => {
		// Custom Webpack configuration
		if (!isServer) {
			config.resolve.fallback = {
				fs: false, // Disable Node.js `fs` module on the client-side
			};
		}
		return config;
	},
};

module.exports = withNextIntl(nextConfig);
