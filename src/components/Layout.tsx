import { Header } from "./index";
import React, { memo } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div>
      <Header />

      <div className="mt-20">{children}</div>
    </div>
  );
};

export default memo(Layout);
