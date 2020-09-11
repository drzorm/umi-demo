import React, { useContext, useEffect } from "react";

import { useMount } from "ahooks";
import clsx from "clsx";
import { Helmet, useRequest } from "umi";
import request from "umi-request";

import ThemeContext from "@/provider/theme/context";

import style from "./index.less";

let index = 0;
export default () => {
  const themeContext = useContext(ThemeContext);

  const { data, error, loading } = useRequest(
    () =>
      request("/api/topics", {
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
    }, 3000);
    return () => {
      window.clearTimeout(timer);
    };
  }, [themeContext]);

  return (
    <>
      <Helmet>
        <title>{themeContext.state}</title>
      </Helmet>
      <div className={clsx(style.state, style[themeContext.state])}>{data?.[0]?.title}</div>
    </>
  );
};
