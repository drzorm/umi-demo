import React, { memo, useReducer } from "react";

import ThemeContext from "./context";

const reducerCallback = (state: string, args: any): string => {
  switch (args.type) {
    case "update":
      return args.payload;

    default:
      return state;
  }
};

const ThemeProvider: React.FC<{ children: any }> = memo(props => {
  const [state, dispatch] = useReducer(reducerCallback, "red");

  return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>;
});

export default ThemeProvider;
