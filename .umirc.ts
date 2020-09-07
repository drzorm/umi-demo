import { defineConfig } from "umi";

export default defineConfig({
  base: "/",
  publicPath: "/static/",
  hash: true,
  history: {
    type: "hash",
  },
  define: {
    ENV: process.env.NODE_ENV,
  },
  targets: {
    chrome: 79,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
  esbuild: {},
  nodeModulesTransform: {
    type: "none",
  },
  cssLoader: {
    localsConvention: "camelCase",
  },
});
