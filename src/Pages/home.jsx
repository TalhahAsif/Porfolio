import { useContext, useState } from "react";
import "../App.css";
import ServicesScroll from "../Component/ServicesScroll/ServicesScroll";
import Skills from "../Component/Skills/Skills";
import { DarkmodeContext } from "../Contextss/Theme";
import UseDaily from "../Component/UseDaily/UseDaily";
import Projects from "../Component/Projects/Projects";
import Contact from "../Component/Contact/Contact";
import Header from "../assets/Headers/header";

function Home() {
  const { darkmode, setDarkmode } = useContext(DarkmodeContext);

  return (
    <div className={"dark:bg-bg_rich_Black"}>
      <section className="dark:bg-bg_rich_Black">
        <div className="sm:max-w-[60%] m-auto text-center p-5" id="Home">
          <Header />

          <section
            id="Projects"
            className="my-24 dark:text-text_silver  animate__animated animate__fadeIn animate__slow"
          >
            <Projects />
          </section>
        </div>

        {/* Services */}
        <section
          id="Service"
          className="w-full dark:text-text_silver animate__animated animate__fadeIn animate__slow"
        >
          <ServicesScroll />
        </section>

        <div className="sm:max-w-[60%] m-auto text-center p-5">
          {/* //SKILLS */}

          <section
            id="Skill"
            className="my-24 dark:text-text_silver  animate__animated animate__fadeIn animate__slow "
          >
            <Skills />
          </section>

          <section className="my-24 dark:text-text_silver  animate__animated animate__fadeIn animate__slow">
            <UseDaily />
          </section>
        </div>

        <section
          id="Contect"
          className="py-10 text-text_silver bg-black dark:bg-slate-900  animate__animated animate__fadeIn animate__slow"
        >
          <Contact />
        </section>
      </section>
    </div>
  );
}

export default Home;
