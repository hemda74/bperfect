const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./i18n/request.ts"); // Specify custom path for i18n configuration

/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true, // Enable React strict mode
	poweredByHeader: false, // Remove "X-Powered-By" header for security
	trailingSlash: false, // Disable trailing slashes in URLs
	compiler: {
		styledComponents: true, // Enable support for styled-components
	},
	output: "standalone", // Optimize for deployment as a standalone app
	images: {
		domains: ["res.cloudinary.com"], // Allow images from specific domains
		formats: ["image/avif", "image/webp"], // Enable modern image formats
		deviceSizes: [640, 768, 1024, 1280, 1600], // Define responsive image sizes
		minimumCacheTTL: 60, // Cache images for 60 seconds
	},
	eslint: {
		ignoreDuringBuilds: true, // Ignore ESLint during builds
	},
	typescript: {
		ignoreBuildErrors: true, // Ignore TypeScript errors during builds
	},
	webpack: (config, { isServer }) => {
		// Custom Webpack configurations
		if (!isServer) {
			config.resolve.fallback = {
				fs: false, // Disable Node.js `fs` module on the client-side
			};
		}
		return config;
	},
};

module.exports = withNextIntl(nextConfig);
