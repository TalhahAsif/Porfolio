import ServicesScroll from "@/Component/ServicesScroll/ServicesScroll";
import Skills from "@/Component/Skills/Skills";
import UseDaily from "@/Component/UseDaily/UseDaily";
import Projects from "@/Component/Projects/Projects";
import Contact from "@/Component/Contact/Contact";
import Header from "@/assets/Headers/header";
import Reveal from "@/Component/Reveal/Reveal";
import DottedBackground from "@/Component/DottedBackground/DottedBackground";

export default function Home() {
  return (
    <div className={"dark:bg-bg_rich_Black"}>
      <section className="dark:bg-bg_rich_Black">
        {/* Fullscreen dotted hero, extends behind the navbar */}
        <div
          id="Home"
          className="relative -mt-14 flex min-h-screen items-center justify-center overflow-hidden pt-14"
        >
          <DottedBackground />
          <div className="relative z-10 w-full sm:max-w-[60%] m-auto text-center p-5">
            <Header />
          </div>
        </div>

        <div className="sm:max-w-[60%] m-auto text-center p-5">
          <Reveal
            as="section"
            id="Projects"
            className="my-24 dark:text-text_silver"
          >
            <Projects />
          </Reveal>
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

          <Reveal
            as="section"
            id="Skill"
            className="my-24 dark:text-text_silver"
          >
            <Skills />
          </Reveal>

          <Reveal as="section" className="my-24 dark:text-text_silver">
            <UseDaily />
          </Reveal>
        </div>

        <Reveal
          as="section"
          pop={false}
          amount={0.3}
          id="Contect"
          className="py-10 text-text_silver bg-black dark:bg-slate-900"
        >
          <Contact />
        </Reveal>
      </section>
    </div>
  );
}
