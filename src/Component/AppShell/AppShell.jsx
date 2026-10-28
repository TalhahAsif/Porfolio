"use client";

import { useContext } from "react";
import Navbar from "@/Component/Navbar/Navbar";
import { DarkmodeContext } from "@/Contextss/Theme";

const AppShell = ({ children }) => {
  const { darkmode } = useContext(DarkmodeContext);

  return (
    <div className={darkmode ? "dark" : ""}>
      <div className="dark:bg-bg_rich_Black min-h-screen">
        <Navbar />

        <section>{children}</section>
      </div>
    </div>
  );
};

export default AppShell;
