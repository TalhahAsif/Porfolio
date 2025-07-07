import React, { useState } from "react";
import todoapp from "../../assets/Projects/todo-app.png";
import Ecommerce from "../../assets/Projects/Ecommerce-app.png";
import GuessTheNumber from "../../assets/Projects/Number-game.png";
import acewallScholars from "../../assets/Projects/acewallscholars.png";
import AppleClone from "../../assets/Projects/Apple-Clone.png";
import { Button, Chip, Image } from "@nextui-org/react";
import CodeIcon from "@mui/icons-material/Code";
import PublicIcon from "@mui/icons-material/Public";
import { div, p, title } from "framer-motion/client";

const Projects = () => {
  const projecttabs = [
    {
      id: 0,
      title: "Learning Management System",
    },
    {
      id: 1,
      title: "Todo App",
    },
    {
      id: 2,
      title: "Ecommerce",
    },
    {
      id: 3,
      title: "Number Game",
    },
  ];

  const projects = [
    {
      id: 0,
      title: "Learning Management System",
      thumbnail: acewallScholars,
      techstack: [
        "React.js",
        "Express.js",
        "tailwind CSS",
        "MongoDB",
        "Cloudenary",
      ],
      specs: [
        "Role Based Authentication",
        "Complex Data Structure",
        "Course Enrollement & Management",
        "Grading System",
        "Admin Dashboard",
      ],
      liveLink: "https://acewallscholars.vercel.app/",
    },
    {
      id: 1,
      title: "Todo App",
      thumbnail: todoapp,
      techstack: ["React.js", "tailwind CSS"],
      specs: ["Responsive", "Filters", "Clean UI & UX"],
      liveLink: "https://anytask-sepia.vercel.app/",
      githublink: "https://github.com/TalhahAsif/React-Todo-App-SMIT",
    },
    {
      id: 2,
      title: "Ecommerce",
      thumbnail: Ecommerce,
      techstack: ["HTML", "Tailwind CSS", "Javascript", "Firebase"],
      specs: [
        "Responsive",
        "Category Search",
        "Clean UI & UX",
        "Authentication",
        "Add to Cart",
        "API Integration",
      ],
      liveLink: "https://firebaseemailauth.netlify.app/",
      githublink: "https://github.com/TalhahAsif/E-Commerce-JS-Firebase",
    },
    {
      id: 3,
      title: "Number Game",
      thumbnail: GuessTheNumber,
      techstack: ["HTML", "CSS"],
      specs: ["Responsive", "Clean UI & UX"],
      liveLink: "https://smit-number-game.netlify.app/",
      githublink: "https://github.com/TalhahAsif/Number-Game",
    },
  ];

  const handleProject = (selectedid) => {
    const selected = projects.filter((data) => {
      return data.id === selectedid;
    });
    setselectedProject(selected);
  };

  const [selectedProject, setselectedProject] = useState([projects[0]]);
  console.log(selectedProject);

  return (
    <>
      <div>
        <p className="text-left text-xl font-bold">Projects</p>
        <section className="w-full flex justify-between flex-wrap items-center my-10">
          <div className="flex flex-col gap-9 mx-5">
            <div className="flex flex-col gap-2 text-left">
              <p className="text-xl font-bold">{selectedProject[0].title}</p>
              <div className="flex gap-2 my-2 flex-wrap max-w-60">
                {selectedProject[0]?.specs?.map((data, index) => {
                  return (
                    <Chip className="shadow-lg" key={index} size="sm">
                      {data}
                    </Chip>
                  );
                })}
              </div>
            </div>

            <section className="flex flex-wrap items-end gap-14 justify-between">
              <div className="flex flex-wrap w-40 gap-2">
                {selectedProject[0].techstack.map((data) => {
                  return <p className="text-sm">{data}</p>;
                })}
              </div>
              <div className="flex gap-4 ">
                <a target="#" href={selectedProject[0].liveLink}>
                  <Button className="bg-yellow-200 text-black shadow-lg">
                    {<PublicIcon />}Live
                  </Button>
                </a>
                {}
                <a target="#" href={selectedProject[0].githublink}>
                  <Button className="bg-green-400 text-black shadow-lg">
                    {<CodeIcon />} Code
                  </Button>
                </a>
              </div>
            </section>
          </div>
          <div>
            <Image
              isBlurred
              width={300}
              height={200}
              src={selectedProject[0].thumbnail}
              alt="NextUI Album Cover"
              className="m-5 z-10"
            />
          </div>
        </section>
        <section>
          <div className="flex gap-4 flex-wrap justify-left items-center">
            {projecttabs.map((data, index) => {
              return (
                <div
                  className="dark:text-black px-5 py-3 shadow-lg cursor-pointer bg-slate-300 text-sm rounded-xl"
                  onClick={() => handleProject(data.id)}
                  key={data.id}
                >
                  {data.title}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
