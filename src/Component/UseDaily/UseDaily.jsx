import React from "react";
import VScode from  "../../assets/tech-Icons/VSCode.png"
import Chatgpt from  "../../assets/tech-Icons/chatgpt.png"
import git from  "../../assets/tech-Icons/git.png"
import Github from  "../../assets/tech-Icons/GitHub.png"
import Postman from  "../../assets/tech-Icons/Postman.png"

const UseDaily = () => {
  const techStack = [
    {
      logo: VScode,
      title: "VS Code",
      intro: "A powerful, extensible code editor with features for efficient coding and debugging.",
    },
    {
      logo: Chatgpt,
      title: "Chatgpt",
      intro:
        "An AI tool for coding assistance, debugging, and learning new development concepts.",
    },
    {
      logo: git,
      title: "Git",
      intro:
        "A version control system for tracking code changes and collaborating with teams.",
    },
    {
      logo: Github,
      title: "GitHub",
      intro: "JavaScript library for building reusable UI components.",
    },
    {
      logo: Postman,
      title: "Postman",
      intro: "Postman is a versatile tool used primarily for developing, testing, and managing APIs.",
    },
  ];

  return (
    <>
      <section>
        <div className="flex justify-between">
          <p className="dark:text-text_silver text-3xl font-bold text-left">Tech I Use Daily</p>
        </div>
        <div className="mt-10 gap-10 grid md:grid-cols-1 lg:grid-cols-2 m-auto">
          {techStack.map((data, index) => {
            return (
              <div className="p-8 border-b flex flex-col gap-5" key={index}>
                <div className="flex items-center gap-5">
                  <img src={data.logo} alt="" className="w-7" />
                  <p className="dark:text-text_silver text-xl font-bold">
                    {data.title}
                  </p>
                </div>
                <div className="w-[80%] m-auto">
                  <p className="dark:text-text_silver text-sm text-left">{data.intro}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default UseDaily;
