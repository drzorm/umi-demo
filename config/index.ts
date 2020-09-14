/* eslint-disable @typescript-eslint/no-require-imports */

/*
 * 生产环境配置 - 默认
 * 通过 .umirc.ts define 配置项注入, 用于提供给代码中可用的变量
 */

interface Config {
  SERVER_PATH: string;
  [key: string]: any;
}

export const defineCustomConfig = (config: Partial<Config>) => config;

const Config = defineCustomConfig({
  SERVER_PATH: "https://cnodejs.org/api/v1",
});

if (process.env.BIZ_ENV !== "prod") {
  if (process.env.NODE_ENV === "development") {
    Object.assign(Config, require(`./config.${process.env.BIZ_ENV}.ts`), require(`./config.local.ts`));
  } else {
    Object.assign(Config, require(`./config.${process.env.BIZ_ENV}.ts`));
  }
}

export default Config as Config;
