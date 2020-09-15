/* eslint-disable @typescript-eslint/no-require-imports */

/*
 * 生产环境配置 - 默认
 * 通过 .umirc.ts define 配置项注入, 用于提供给代码中可用的变量
 */

export interface Config {
  SERVER_PATH: string;
  [key: string]: any;
}

export const defineCustomConfig = (config: Partial<Config>) => config;

const BIZ_ENV = process.env.BIZ_ENV || "prod";

const Config = defineCustomConfig({
  SERVER_PATH: "https://cnodejs.org/api/v1",
});

if (BIZ_ENV !== "prod") {
  if (process.env.NODE_ENV === "development") {
    Object.assign(Config, require(`./config.${BIZ_ENV}.ts`), require(`./config.local.ts`));
  } else {
    Object.assign(Config, require(`./config.${BIZ_ENV}.ts`));
  }
}

export default Config as Config;
