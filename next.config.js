// bundle analyzer 
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'primetaxis.co.nz',
            port: '',
            pathname: '/**'
        }],
    },
    env: {
        url: "https://primetaxis.co.nz"
    },
}

module.exports = withBundleAnalyzer(nextConfig)
