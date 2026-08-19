import React from "react";
import Reactjs from "../../assets/tech-Icons/React.png";
import Next from "../../assets/tech-Icons/Next.js.png";
import Nodejs from "../../assets/tech-Icons/Node.js.png";
import Mongodb from "../../assets/tech-Icons/MongoDB.png";
import AWS from "../../assets/tech-Icons/AWS.svg";
import N8n from "../../assets/tech-Icons/n8n.svg";
import TypeScript from "../../assets/tech-Icons/TypeScript.svg";
import DownloadCV from "../DownloadCV/DowloadCV";

const Skills = () => {
  const techStack = [
    {
      logo: Reactjs,
      title: "React.js",
    },
    {
      logo: Next,
      title: "Next.js",
    },
    {
      logo: Nodejs,
      title: "Node.js",
    },
    {
      logo: Mongodb,
      title: "Mongo DB",
    },
    {
      logo: AWS,
      title: "AWS",
    },
    {
      logo: N8n,
      title: "n8n",
    },
    {
      logo: TypeScript,
      title: "TypeScript",
    },
  ];

  return (
    <>
      <section>
        <div className="flex justify-between">
          <p className="text-3xl font-bold text-left">My Stack</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-6">
          {techStack.map((data, index) => {
            return (
              <div
                className="flex items-center gap-4 px-8 py-5 rounded-full border dark:border-gray-700 dark:hover:border-gray-500 hover:border-gray-400 transition-colors"
                key={index}
              >
                <img src={data.logo} alt={data.title} className="w-9 h-9 object-contain" />
                <p className="dark:text-text_silver text-xl font-bold whitespace-nowrap">
                  {data.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
