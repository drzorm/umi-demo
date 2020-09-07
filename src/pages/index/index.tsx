import React, { useContext, useEffect } from "react";

import "./index.less";

import { useMount } from "ahooks";

import ThemeContext from "@/provider/theme/content";

let index = 0;
export default () => {
  const themeContext = useContext(ThemeContext);

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

  return <div className={themeContext.state}>{themeContext.state}</div>;
};
