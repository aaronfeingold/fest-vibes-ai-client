import React from "react";
import Navbar from "../components/Navbar.component";

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    {/* todo: create footer */}
  </div>
);

export default Layout;
