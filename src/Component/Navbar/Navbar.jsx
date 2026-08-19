import React, { useContext, useState } from "react";
import ThemeSwitchBTN from "../ThemeSwitch/ThemeSwitch";
import { DarkmodeContext } from "@/Contextss/Theme";

const Navbar = () => {
  const { darkmode, setDarkmode } = useContext(DarkmodeContext);
  const Navs = [
    { section: "Home", id: "#Home" },
    { section: "Service", id: "#Service" },
    { section: "Skill", id: "#Skill" },
    { section: "Projects", id: "#Projects" },
    { section: "Contect", id: "#Contect" },
  ];

  return (
    <>
      <section className="flex items-center justify-between m-auto sm:max-w-[60%] sm:justify-around sticky top-5 z-10 bg-transparent">
        <a href="#Home">
          <div className="hidden md:block lg:block text-2xl font-extrabold text-white dark:text-black bg-black dark:bg-white p-1.5 rounded-xl cursor-pointer">
            <p>TA</p>
          </div>
        </a>

        <div className="w-full md:w-fit h-12 rounded-full flex justify-center text-sm items-center text-center backdrop-blur-sm bg-black/10 dark:bg-white/30 px-10 sticky top-3">
          {Navs.map((data, index) => {
            return (
              <a
                href={data.id}
                key={index}
                className="rounded-full dark:text-white hover:bg-black hover:text-white cursor-pointer duration-500 "
              >
                <p className="mx-2 my-1">{data.section}</p>
              </a>
            );
          })}
        </div>

        <ThemeSwitchBTN className="hidden md:flex" />
      </section>
    </>
  );
};

export default Navbar;
