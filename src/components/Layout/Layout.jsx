import React from "react";
import logo from "../../assets/perfumeLogo.png";

const Layout = ({ children }) => {
  return (
    <>
      <img src={logo} style={{ position: "absolute", width: "5vw", top: 10 }} />
      {children}
    </>
  );
};

export default Layout;
