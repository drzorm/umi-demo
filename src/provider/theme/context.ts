import React from "react";

const ThemeContext = React.createContext({
  state: "red",
  dispatch: (_args: any) => {},
});

export default ThemeContext;
