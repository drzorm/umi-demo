import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = React.memo(props => {
  return <div className="layout">{props.children}</div>;
});

export default Layout;
