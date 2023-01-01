// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   },
//   eslint: {
//     dirs: ["pages", "components", "styles"],
//   },
// };

// module.exports = nextConfig;

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    reactRemoveProperties: true,
  },
  eslint: {
    dirs: ["pages", "components", "styles"],
  },
  // reactStrictMode: true
  swcMinify: true,
  // compiler: { styledComponents: true},
  images: {
    domains: ["api.themoviedb.org", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
