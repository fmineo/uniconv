/** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa")({
//     dest: "public",
//     register: true,
//     skipWaiting: true,
// });

const nextConfig = {
    env: {
        EXCHANGERAGE_API_KEY: "28fa5a1cf3c031015b299c64",
    }
};

module.exports = nextConfig;
