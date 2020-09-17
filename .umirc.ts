import path from "path";
import { defineConfig } from "umi";

import config from "./config";
import packageJson from "./package.json";

interface ExternalsItem {
  key: string;
  var: string;
  cdn: string;
}

const NODE_ENV = process.env.NODE_ENV;
const dependencies = packageJson.dependencies as Record<string, string>;

// https://polyfill.alicdn.com/polyfill.min.js
// https://cdn.polyfill.io/v3/polyfill.min.js
// 自建polyfill服务: https://github.com/Financial-Times/polyfill-service
const polyfill = "https://polyfill.alicdn.com/polyfill.min.js?features=es2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019";
const externalList: ExternalsItem[] = [
  {
    key: "react",
    var: "window.React",
    cdn: `https://cdn.jsdelivr.net/npm/react@{{version}}/umd/react.${NODE_ENV}.min.js`,
  },
  {
    key: "react-dom",
    var: "window.ReactDOM",
    cdn: `https://cdn.jsdelivr.net/npm/react-dom@{{version}}/umd/react-dom.${NODE_ENV}.min.js`,
  },
];

// * 适用 package.json dependencies 版本号使用 ^version/version 格式
const matchVersion = (it: ExternalsItem) => /^\^?\d+/.test(dependencies[it.key]);

const matchExternals = externalList.filter(matchVersion).map((it) => ({
  ...it,
  cdn: it.cdn.replace("{{version}}", dependencies[it.key].replace(/^\^/, "")),
}));

const externals = matchExternals.reduce(
  (prev, curr) =>
    Object.assign(prev, {
      [curr.key]: curr.var,
    }),
  {} as Record<string, string>,
);

const scripts = [polyfill, ...matchExternals.map((it) => it.cdn)];

export default defineConfig({
  base: "/",
  outputPath: "docs",
  publicPath: "./",
  favicon: "./favicon.ico",
  title: false,
  hash: true,
  history: {
    type: "hash",
  },
  define: {
    ENV: process.env.BIZ_ENV,
    ...config,
  },
  proxy: {
    // https://cli.vuejs.org/config/#devserver-proxy
    "/api": {
      target: config.SERVER_PATH,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    },
  },
  targets: {
    chrome: 79,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
  theme: {
    // 配置less变量
  },
  cssLoader: {
    localsConvention: "camelCase",
  },
  cssModulesTypescriptLoader: {
    mode: "emit",
  },
  ignoreMomentLocale: true,
  esbuild: {
    minify: true,
  },
  nodeModulesTransform: {
    type: "none",
    exclude: [],
  },
  externals,
  scripts: scripts,
  chainWebpack: (config) => {
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
