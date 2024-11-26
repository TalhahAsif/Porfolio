import React from "react";
import ThemeSwitchBTN from "../ThemeSwitch/ThemeSwitch";

const Navbar = () => {
  return (
    <>
      <section className="flex items-center justify-around">
        <div className="text-3xl font-extrabold text-white bg-black p-4 rounded-3xl">
          <p>TA</p>
        </div>

        <div className="border border-blue-900 lg:w-1/2 h-20 rounded-full flex justify-center gap-3 items-center text-2xl text-center">
          <p className="border w-[21%] py-2 rounded-full hover:bg-black hover:text-white cursor-pointer">
            Home
          </p>
          <p className="border w-[21%] py-2 rounded-full hover:bg-black hover:text-white cursor-pointer">
            Skills
          </p>
          <p className="border w-[21%] py-2 rounded-full hover:bg-black hover:text-white cursor-pointer">
            Projects
          </p>
          <p className="border w-[21%] py-2 rounded-full hover:bg-black hover:text-white cursor-pointer">
            Lets Talk
          </p>
        </div>

        <ThemeSwitchBTN />
      </section>
    </>
  );
};

export default Navbar;
