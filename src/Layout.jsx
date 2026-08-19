import Navbar from "@/Component/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="dark:bg-bg_rich_Black min-h-screen">
      <Navbar />

      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
