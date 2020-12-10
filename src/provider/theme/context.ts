import React from "react";

interface Theme {
  state: "red" | "blue";
  dispatch: (args: any) => void;
}

const ThemeContext = React.createContext<Theme>({
  state: "red",
  dispatch: (_args: any) => {}
});

export default ThemeContext;
