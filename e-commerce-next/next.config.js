/** @type {import('next').NextConfig} */

const { withFrameworkConfig } = require("./framework/common/config")

const nextConfig = withFrameworkConfig({
  reactStrictMode: true,
  framework: {
    name: process.env.NEXT_PUBLIC_FRAMEWORK
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US"
  }
}) 

module.exports = nextConfig
