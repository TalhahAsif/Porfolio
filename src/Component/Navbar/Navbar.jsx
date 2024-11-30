import React, { useState } from "react";
import ThemeSwitchBTN from "../ThemeSwitch/ThemeSwitch";

const Navbar = () => {
  const Navs = ["Home", "Services", "Skills", "Projects", "contact"];

  return (
    <>
      <section
        className="flex items-center justify-between sm:justify-around sticky top-5 z-10"
      >
        <div className="hidden md:block lg:block text-2xl font-extrabold text-white dark:text-black bg-black dark:bg-white p-2 rounded-2xl cursor-pointer">
          <p>TA</p>
        </div>

        <div className="w-full md:w-1/2 h-16 rounded-full flex justify-center gap-4 items-center text-md text-center backdrop-blur-sm bg-black/10 dark:bg-white/30 px-10 sticky top-3">
          {Navs.map((data, index) => {
            return (
              <p
                key={index}
                className="w-[21%] py-2 rounded-full dark:text-white hover:bg-black hover:text-white cursor-pointer duration-500"
              >
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
