import { useMount } from "ahooks";
import clsx from "clsx";
import React, { useContext, useEffect } from "react";
import { Helmet, request, useRequest } from "umi";

import ThemeContext from "@/provider/theme/context";

import style from "./index.less";

let index = 0;
const interval = 6000;
export default () => {
  const themeContext = useContext(ThemeContext);

  const { data = {}, error, loading } = useRequest("/sentences");

  console.log("data", data);

  useEffect(() => {
    console.log("ENV :>> ", process.env.ENV);
    console.log("SERVER_PATH", process.env.SERVER_PATH);
  }, []);

  useMount(() => {
    console.log("useMount");
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      themeContext.dispatch({
        type: "update",
        payload: ["blue", "red"][index++ % 2]
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
      <div className={clsx(style.theme, style[themeContext.state])}>{data.name}</div>
    </>
  );
};
