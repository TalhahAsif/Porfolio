import React from "react";
import todoapp from "../../assets/Projects/todo-app.png";
import Ecommerce from "../../assets/Projects/Ecommerce-app.png";
import realestatecrm from "../../assets/Projects/realestatecrm.png";
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
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Real Estate CRM Software",
      thumbnail: realestatecrm,
      liveLink: "https://real-estate-crm-software-gray.vercel.app/",
    },
    {
      id: 2,
      title: "Number Game",
      thumbnail: GuessTheNumber,
      liveLink: "https://smit-number-game.netlify.app/",
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
                <Card key={data.id} className="group relative mx-auto w-full max-w-sm pt-0">
                  <div className="absolute inset-0 z-30 aspect-video bg-black/35 transition-opacity duration-300 group-hover:opacity-0" />

                  <Image
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

                    <a href={data.liveLink} target="#">
                      <Button className="w-10">
                        <ExternalLink />
                      </Button>
                    </a>
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
