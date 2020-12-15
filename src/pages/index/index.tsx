import { useMount } from "ahooks";
import clsx from "clsx";
import React, { useContext, useEffect, useRef } from "react";
import { Helmet, useRequest } from "umi";

import ThemeContext from "@/provider/theme/context";

import style from "./index.less";

const interval = 6000;
export default () => {
  const themeContext = useContext(ThemeContext);
  const index = useRef(0);

  const { data = {}, error, loading } = useRequest("/sentences");

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
        payload: ["blue", "red"][index.current++ % 2]
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
