const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: false,
	compiler: {
		styledComponents: true,
	},
	output: "standalone",
	images: {
		domains: ["res.cloudinary.com"],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = withNextIntl(nextConfig);
