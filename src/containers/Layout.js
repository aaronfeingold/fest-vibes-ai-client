import React from "react";
import Navbar from "../components/Navbar.component";

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <div style={{ paddingTop: "60px" }}>{children}</div>
  </div>
);

export default Layout;
