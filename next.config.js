/** @type {import('next').NextConfig} */
// https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout#disabling
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
}

module.exports = nextConfig
