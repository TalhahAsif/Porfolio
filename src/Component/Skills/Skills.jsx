import React from "react";
import HTMLlogo from "../../assets/tech-Icons/HTML.png";
import CSSlogo from "../../assets/tech-Icons/CSS3.png";
import tailwind from "../../assets/tech-Icons/Tailwind-CSS.png";
import JS from "../../assets/tech-Icons/JS.png";
import Reactjs from "../../assets/tech-Icons/React.png";
import Next from "../../assets/tech-Icons/Next.js.png";
import Nodejs from "../../assets/tech-Icons/Node.js.png";
import Mongodb from "../../assets/tech-Icons/MongoDB.png";
import DownloadCV from "../DownloadCV/DowloadCV";

const Skills = () => {
  const techStack = [
    {
      logo: HTMLlogo,
      title: "HTML",
      intro: "The backbone for web pages, structuring content with elements.",
    },
    {
      logo: CSSlogo,
      title: "CSS",
      intro:
        "Styles and layouts web pages for visual appeal and responsiveness.",
    },
    {
      logo: JS,
      title: "JavaScript",
      intro:
        "Enables interactive web pages with dynamic content and user inputs.",
    },
    {
      logo: Reactjs,
      title: "React.js",
      intro: "JavaScript library for building reusable UI components.",
    },
    {
      logo: tailwind,
      title: "Tailwind CSS",
      intro: "Utility-first CSS framework for custom designs directly in HTML.",
    },
    {
      logo: Next,
      title: "Next.js",
      intro:
        "React-based framework for server-side rendering and static sites.",
    },
    {
      logo: Nodejs,
      title: "Node.js",
      intro: "JavaScript runtime for building scalable network applications.",
    },
    {
      logo: Mongodb,
      title: "Mongo DB",
      intro: "a NoSQL database that uses flexible, JSON-like documents to store data.",
    },
  ];

  return (
    <>
      <section>
        <div className="flex justify-between">
          <p className="text-3xl font-bold text-left">Skills</p>
          <DownloadCV />
        </div>
        <div className="mt-10 gap-10 grid md:grid-cols-1 lg:grid-cols-2 m-auto">
          {techStack.map((data, index) => {
            return (
              <div className="p-8 border-b flex flex-col gap-5 " key={index}>
                <div className="flex items-center gap-5">
                  <img src={data.logo} alt="" className="w-7" />
                  <p className="dark:text-text_silver text-xl font-bold">
                    {data.title}
                  </p>
                </div>
                <div className="w-[80%] m-auto">
                  <p className="text-sm text-left">{data.intro}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
