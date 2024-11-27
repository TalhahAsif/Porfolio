import React, { useState } from "react";
import ThemeSwitchBTN from "../ThemeSwitch/ThemeSwitch";

const Navbar = () => {
  return (
    <>
      <section className="flex items-center justify-around">
        <div className="text-3xl font-extrabold text-white dark:text-black bg-black dark:bg-white p-4 rounded-3xl cursor-pointer">
          <p>TA</p>
        </div>

        <div className="lg:w-1/2 h-20 rounded-full flex justify-center gap-3 items-center text-2xl text-center backdrop-blur-sm bg-black/10 dark:bg-white/30">
          <p className="w-[21%] py-2 rounded-full dark:text-white hover:bg-black hover:text-white cursor-pointer duration-500">
            Home
          </p>
          <p className="w-[21%] py-2 rounded-full dark:text-white hover:bg-black hover:text-white cursor-pointer duration-500">
            Skills
          </p>
          <p className="w-[21%] py-2 rounded-full dark:text-white hover:bg-black hover:text-white cursor-pointer duration-500">
            Projects
          </p>
          <p className="w-[21%] py-2 rounded-full dark:text-white hover:bg-black hover:text-white cursor-pointer duration-500">
            Lets Talk
          </p>
        </div>

        <ThemeSwitchBTN />
      </section>
    </>
  );
};

export default Navbar;
