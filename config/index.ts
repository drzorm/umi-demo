/* eslint-disable @typescript-eslint/no-require-imports */

/*
 * 默认生产环境配置
 * 配置会通过 umirc.ts define 注入, 用于提供给代码中可用的变量
 */

const Config = {
  SERVER_PATH: "https://cnodejs.org/api/v1",
};

if (process.env.BIZ_ENV !== "prod") {
  if (process.env.NODE_ENV === "development") {
    Object.assign(Config, require(`./config.${process.env.BIZ_ENV}.ts`), require(`./config.local.ts`));
  } else {
    Object.assign(Config, require(`./config.${process.env.BIZ_ENV}.ts`));
  }
}

export default Config;
