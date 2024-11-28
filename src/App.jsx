import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { Button, Image } from "@nextui-org/react";
import Banner from "../src/assets/Banner.png";
import { DarkmodeContext } from "./context/theme";
import ServicesScroll from "./Component/ServicesScroll/ServicesScroll";
import Skills from "./Component/Skills/Skills";

function App() {
  const { darkmode, setDarkmode } = useContext(DarkmodeContext);

  return (
    <div className={darkmode == false ? "dark" : ""}>
      <section className="dark:bg-bg_rich_Black bg-bg_cream">
        <div className="max-w-[1280px] m-auto text-center p-5">
          <Navbar />
          <div className="my-20">
            <img
              src={Banner}
              alt=""
              className="m-auto rounded-2xl drop-shadow-2xl lg:w-[80%]"
            />
          </div>
          <section className="flex justify-center items-center flex-col">
            <div className="dark:text-text_silver text-2xl text-left w-[80%]">
              Hi there! I'm Talha Asif 👋 , a passionate MERN Stack Developer
              with a strong focus on React. I love creating efficient, scalable,
              and user-friendly web applications. Let's build something amazing
              together! 🚀
            </div>

            {/* // Services */}

            <div className="dark:text-text_silver text-left mt-20">
              <p className="font-bold text-4xl">Services we offer</p>
              <ServicesScroll />
            </div>
          </section>

          {/* //SKILLS */}

          <section>
            <Skills />
          </section>
        </div>
      </section>
    </div>
  );
}

export default App;
