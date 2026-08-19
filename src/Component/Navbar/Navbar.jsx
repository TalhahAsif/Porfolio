import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitchBTN from "../ThemeSwitch/ThemeSwitch";
import { DarkmodeContext } from "@/Contextss/Theme";
import { i } from "framer-motion/client";

const Navbar = () => {
  const { darkmode, setDarkmode } = useContext(DarkmodeContext);
  const { navbarImg, setNavbarImg } = useContext(DarkmodeContext);

  console.log(navbarImg, "navbarImg");
  const Navs = [
    { section: "Home", id: "#Home" },
    { section: "Service", id: "#Service" },
    { section: "Skill", id: "#Skill" },
    { section: "Projects", id: "#Projects" },
    { section: "About", path: "/about" },
    { section: "Contect", id: "#Contect" },
  ];

  return (
    <>
      <section className="flex items-center justify-between m-auto sm:max-w-[60%] sm:justify-around sticky top-5 z-10 bg-transparent">
        <a href="#Home">
          {!navbarImg ? (
            <div className="hidden md:block lg:block text-2xl font-extrabold text-white dark:text-black bg-black dark:bg-white p-1.5 rounded-xl cursor-pointer">
              <p>TA</p>
            </div>
          ) : (
            <img
              src="https://res.cloudinary.com/pvcq6rie/image/upload/v1787094437/copy_of_gemini_generated_image_ldaaqmldaaqmldaa.jpg"
              alt="Talha Asif"
              className="hidden w-14 md:block lg:block p-1.5 rounded-2xl cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-12"
            />
          )}
        </a>

        <div className="w-full md:w-fit h-12 rounded-full flex justify-center text-sm items-center text-center backdrop-blur-sm bg-black/10 dark:bg-white/30 px-10 sticky top-3">
          {Navs.map((data, index) => {
            if (data.path) {
              return (
                <Link
                  to={data.path}
                  key={index}
                  className="rounded-full dark:text-white hover:bg-black hover:text-white cursor-pointer duration-500 "
                >
                  <p className="mx-2 my-1">{data.section}</p>
                </Link>
              );
            }
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
