import path from "path";
import { defineConfig } from "umi";

import packageJson from "./package.json";

interface ExternalsItem {
  key: string;
  var: string;
  cdn: string;
}

const NODE_ENV = process.env.NODE_ENV;
const dependencies = packageJson.dependencies as Record<string, string>;

const externalList: ExternalsItem[] = [
  {
    key: "react",
    var: "window.React",
    cdn: `https://cdn.jsdelivr.net/npm/react@{version}/umd/react.${NODE_ENV}.min.js`,
  },
  {
    key: "react-dom",
    var: "window.ReactDOM",
    cdn: `https://cdn.jsdelivr.net/npm/react-dom@{version}/umd/react-dom.${NODE_ENV}.min.js`,
  },
];

// * 适用 package.json dependencies 版本号使用 ^version/version 格式
const matchVersion = (it: ExternalsItem) => /^\^?\d+/.test(dependencies[it.key]);

const matchExternals = externalList.filter(matchVersion).map(it => ({
  ...it,
  cdn: it.cdn.replace("{version}", dependencies[it.key].replace(/^\^/, "")),
}));

const externals = matchExternals.reduce(
  (prev, curr) =>
    Object.assign(prev, {
      [curr.key]: curr.var,
    }),
  {} as Record<string, string>,
);

const scripts = [
  "https://polyfill.io/v3/polyfill.js?features=es5,es6,es7&flags=gated",
  ...matchExternals.map(it => it.cdn),
];

export default defineConfig({
  base: "/",
  outputPath: "docs",
  hash: true,
  history: {
    type: "hash",
  },
  define: {
    ENV: process.env.NODE_ENV,
  },
  proxy: {},
  targets: {
    chrome: 79,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
  title: "hi",
  theme: {
    // 配置less变量
  },
  cssLoader: {
    localsConvention: "camelCase",
  },
  ignoreMomentLocale: true,
  esbuild: {},
  nodeModulesTransform: {
    type: "none",
    exclude: [],
  },
  externals,
  scripts: scripts,
  chainWebpack: config => {
    config.resolve.alias.set("@", path.resolve(__dirname, "./src/"));
    config.optimization.splitChunks({
      chunks: "all",
      automaticNameDelimiter: ".",
      name: true,
      minSize: 30000,
      minChunks: 1,
      cacheGroups: {
        vendors: {
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          priority: -11,
          enforce: true,
        },
      },
    });
  },
  chunks: ["vendors", "umi"],
});
