import { RequestConfig } from "umi";

// https://umijs.org/plugins/plugin-request
export const request: RequestConfig = {
  timeout: 30000,
  prefix: "",
  errorConfig: {
    adaptor: res => {
      return {
        ...res,
        success: res.code === 200,
        errorMessage: res.message
      };
    }
  },
  middlewares: [
    // async (ctx, next) => {
    //   await next();
    // }
  ],
  requestInterceptors: [
    (url, options) => {
      if (!/^https?:\/\//.test(url)) {
        url = `${process.env.BIZ_ENV === "local" ? "/api" : process.env.SERVER_PATH}${url}`;
      }

      return { url, options };
    }
  ],
  responseInterceptors: [
    // async response => {
    //   const data = await response.clone().json();
    //   if(data.code !== 200) message.error(data.message)
    //   return response;
    // }
  ]
};
