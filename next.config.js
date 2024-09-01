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
};

module.exports = withNextIntl(nextConfig);
