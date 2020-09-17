/* eslint-disable @typescript-eslint/no-require-imports */

/*
 * 生产环境配置 - 默认
 * 通过 .umirc.ts define 配置项注入, 用于提供给代码中可用的变量
 */

const localConfig = require(`./config.local.ts`);
const envConfig = require(`./config.${process.env.BIZ_ENV || "prod"}.ts`);

interface Config {
  SERVER_PATH: string;
  [key: string]: any;
}

const config: Config = {
  ...envConfig,
  ...(process.env.NODE_ENV === "development" ? localConfig : null),
};

export default config;
