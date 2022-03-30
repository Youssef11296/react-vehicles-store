// modules
import React from "react";
// children
import Header from "./Header";
import Controller from "./Controller";
// styles
import "../styles/WidgetsStyles/Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Controller />
        {children}
      </main>
    </div>
  );
};

export default Layout;
