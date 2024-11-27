import React, { useState } from "react";
import ThemeSwitchBTN from "../ThemeSwitch/ThemeSwitch";

const Navbar = () => {
  const Navs = ["Home", "Services", "Skills", "Projects", "contact"];

  return (
    <>
      <section className="flex items-center justify-between sm:justify-around">
        <div className="hidden md:block lg:block text-3xl font-extrabold text-white dark:text-black bg-black dark:bg-white p-4 rounded-3xl cursor-pointer">
          <p>TA</p>
        </div>

        <div className="w-full md:w-1/2 h-20 rounded-full flex justify-center gap-3 items-center text-xl text-center backdrop-blur-sm bg-black/10 dark:bg-white/30">
          {Navs.map((data, index) => {
            return (
              <p className="w-[21%] py-2 rounded-full dark:text-white hover:bg-black hover:text-white cursor-pointer duration-500">
                {data}
              </p>
            );
          })}
        </div>

        <ThemeSwitchBTN className="hidden md:block" />
      </section>
    </>
  );
};

export default Navbar;
