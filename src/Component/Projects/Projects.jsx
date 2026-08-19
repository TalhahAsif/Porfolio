import React, { useState } from "react";
import todoapp from "../../assets/Projects/todo-app.png";
import Ecommerce from "../../assets/Projects/Ecommerce-app.png";
import GuessTheNumber from "../../assets/Projects/Number-game.png";
import acewallScholars from "../../assets/Projects/acewallscholars.png";
import AppleClone from "../../assets/Projects/Apple-Clone.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CodeIcon from "@mui/icons-material/Code";
import PublicIcon from "@mui/icons-material/Public";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
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

  return (
    <>
      <div className="">
        <p className="text-left text-xl font-bold">Recent Works</p>
        <section className="my-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
            {projects.map((data, index) => {
              return (
                <Card className="group relative mx-auto w-full max-w-sm pt-0">
                  <div className="absolute inset-0 z-30 aspect-video bg-black/35 transition-opacity duration-300 group-hover:opacity-0" />

                  <img
                    src={data.thumbnail}
                    alt={data.title}
                    className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale transition-all duration-500 group-hover:brightness-100 group-hover:grayscale-0"
                  />

                  <CardHeader>
                    <CardTitle>{data.title}</CardTitle>
                    <CardDescription>
                      A practical talk on component APIs, accessibility, and
                      shipping faster.
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="flex items-center justify-between">
                    <Button className="w-30">View Details</Button>

                    <Button className="w-10">
                      <ExternalLink />
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
