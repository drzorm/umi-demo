import { RequestConfig } from "umi";

export const request: RequestConfig = {
  timeout: 30000,
  prefix: process.env.NODE_ENV === "development" ? "/api" : SERVER_PATH,
  errorConfig: {
    adaptor: res => {
      const { success, error_msg, ...others } = res;

      if (typeof success === "undefined") {
        return {
          success: false,
          errorMessage: error_msg || "网络异常, 请稍后重试",
        };
      }

      return {
        ...others,
        success: res.success,
        errorMessage: res.error_msg,
      };
    },
  },
  // 中间件
  middlewares: [],
  // request 拦截器
  requestInterceptors: [],
  // response 拦截器
  responseInterceptors: [],
};
