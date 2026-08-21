import Navbar from "@/Component/Navbar/Navbar";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

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
