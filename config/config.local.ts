/* 本地环境配置 - 优先级最高 */

import { defineCustomConfig } from "config";

module.exports = defineCustomConfig({
  SERVER_PATH: "https://cnodejs.org/api/v1",
});
