/* eslint-disable @typescript-eslint/no-require-imports */

/*
 * 生产环境配置 - 默认
 * 通过 .umirc.ts define 配置项注入 process.env, 用于提供给代码中可用的变量
 */

export interface Config {
  SERVER_PATH: string;
}

const bizEnv = process.env.BIZ_ENV || "prod";

const config: Config = {
  ...(bizEnv === "local" ? require("./local") : bizEnv !== "prod" ? require(`./${bizEnv}.ts`) : null),
  ...require("./prod")
};

export default config;
