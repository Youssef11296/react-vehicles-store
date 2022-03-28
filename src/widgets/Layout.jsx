// modules
import React from "react";
// children
import Header from "./Header";
// styles
import "../styles/WidgetsStyles/Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
