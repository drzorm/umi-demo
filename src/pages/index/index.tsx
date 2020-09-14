import React, { useContext, useEffect } from "react";

import { useMount } from "ahooks";
import clsx from "clsx";
import { Helmet, request, useRequest } from "umi";

import ThemeContext from "@/provider/theme/context";

import style from "./index.less";

let index = 0;
const interval = 6000;
export default () => {
  const themeContext = useContext(ThemeContext);

  const { data, error, loading } = useRequest(
    () =>
      request("/topics", {
        params: {
          page: ~~(Math.random() * 99),
          limit: 1,
        },
      }),
    {
      pollingInterval: 6000,
    },
  );

  useEffect(() => {
    console.log("ENV :>> ", ENV);
    console.log("SERVER_PATH", SERVER_PATH);
  }, []);

  useMount(() => {
    console.log("useMount");
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      themeContext.dispatch({
        type: "update",
        payload: ["blue", "red"][index++ % 2],
      });
    }, interval);
    return () => {
      window.clearTimeout(timer);
    };
  }, [themeContext]);

  return (
    <>
      <Helmet>
        <title>{themeContext.state}</title>
      </Helmet>
      <div className={clsx(style.theme, style[themeContext.state])}>{data?.[0]?.title}</div>
    </>
  );
};
