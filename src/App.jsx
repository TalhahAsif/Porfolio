import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { Button, Image } from "@nextui-org/react";
import Banner from "../src/assets/Banner.png";
import ServicesScroll from "./Component/ServicesScroll/ServicesScroll";
import Skills from "./Component/Skills/Skills";
import { DarkmodeContext } from "./Contextss/Theme";
import UseDaily from "./Component/UseDaily/UseDaily";
import Projects from "./Component/Projects/Projects";
import Contact from "./Component/Contact/Contact";

function App() {
  const { darkmode, setDarkmode } = useContext(DarkmodeContext);

  return (
    <div className={darkmode == false ? "" : "dark bg-bg_cream"}>
      <section className="dark:bg-bg_rich_Black ">
        <div className="sm:max-w-[60%] m-auto text-center p-5" id="Home">
          <Navbar />
          <section className="animate__animated animate__fadeIn animate__slow">
            <div className="my-20 lg:mx-20">
              <img
                src={Banner}
                alt=""
                className="m-auto rounded-2xl drop-shadow-2xl"
              />
            </div>
            <section className="flex justify-center items-center flex-col">
              <div className="dark:text-text_silver text-md text-left md:mx-20">
                Hi there! I'm Talha Asif 👋 , a passionate MERN Stack Developer
                with a strong focus on React. I love creating efficient,
                scalable, and user-friendly web applications. Let's build
                something amazing together! 🚀
              </div>
            </section>
          </section>

          {/* Services */}

          <div id="Service" className="dark:text-text_silver text-left mt-20  animate__animated animate__fadeIn animate__slow">
            <p className="font-bold text-2xl">What I can do</p>
            <ServicesScroll />
          </div>

          {/* //SKILLS */}

          <section id="Skill" className="my-24 dark:text-text_silver  animate__animated animate__fadeIn animate__slow ">
            <Skills />
          </section>

          <section className="my-24 dark:text-text_silver  animate__animated animate__fadeIn animate__slow">
            <UseDaily />
          </section>

          <section id="Projects" className="my-24 dark:text-text_silver  animate__animated animate__fadeIn animate__slow">
            <Projects />
          </section>
        </div>

        <section id="Contect" className="py-10 text-text_silver bg-black dark:bg-slate-900  animate__animated animate__fadeIn animate__slow">
          <Contact />
        </section>
      </section>
    </div>
  );
}

export default App;
