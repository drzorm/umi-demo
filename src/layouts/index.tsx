import React, { memo } from "react";

import Layout from "@/components/Layout";
import ThemeProvider from "@/provider/theme";

interface IProps {
  children: React.ReactNode;
}

export default memo((props: IProps) => {
  return (
    <ThemeProvider>
      <Layout>{props.children}</Layout>
    </ThemeProvider>
  );
});
