import React, { memo } from "react";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = memo(props => {
  return <div className="layout">{props.children}</div>;
});

export default Layout;
