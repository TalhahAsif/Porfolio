import React from "react";
import git from "../../assets/tech-Icons/Git.png";
import Postman from "../../assets/tech-Icons/Postman.png";
import Antigravity from "../../assets/tech-Icons/Antigravity.svg";
import Windsurf from "../../assets/tech-Icons/Windsurf.svg";
import ClaudeCode from "../../assets/tech-Icons/ClaudeCode.svg";

const UseDaily = () => {
  const techStack = [
    {
      logo: git,
      title: "Git",
    },
    {
      logo: Postman,
      title: "Postman",
    },
    {
      logo: Antigravity,
      title: "Antigravity",
    },
    {
      logo: Windsurf,
      title: "Windsurf",
    },
    {
      logo: ClaudeCode,
      title: "Claude Code",
    },
  ];

  return (
    <>
      <section>
        <div className="flex justify-between">
          <p className="dark:text-text_silver text-3xl font-bold text-left">
            Tech I Use Daily
          </p>
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

export default UseDaily;
