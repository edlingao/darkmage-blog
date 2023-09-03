/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");
import MDX from "@next/mdx";

const withMDX = MDX({
  extension: /\.mdx?$/,

});

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true,
  },

  images: {
    domains: ["images.unsplash.com", "cdn.discordapp.com"],
  },

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   },
};

export default withMDX(config);
