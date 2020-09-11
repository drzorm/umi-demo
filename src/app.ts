import { RequestConfig } from "umi";

export const request: RequestConfig = {
  timeout: 30000,
  errorConfig: {
    adaptor: res => {
      const { success, error_msg, ...others } = res;
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
