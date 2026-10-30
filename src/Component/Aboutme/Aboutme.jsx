"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@/components/ui/button";
import SocialIcons from "../SocialIcons/SocialIcons";
import TraitPills from "../TraitPills/TraitPills";
import Reveal from "@/Component/Reveal/Reveal";
import DottedBackground from "@/Component/DottedBackground/DottedBackground";
import { motion } from "framer-motion";

const profileImg =
  "https://res.cloudinary.com/pvcq6rie/image/upload/v1787094437/copy_of_gemini_generated_image_ldaaqmldaaqmldaa.jpg";

const quickFacts = [
  { icon: WorkRoundedIcon, label: "Full-Stack Developer (MERN)" },
  { icon: LocationOnRoundedIcon, label: "Pakistan · Remote-friendly" },
  { icon: MailRoundedIcon, label: "talhahasif995@gmail.com" },
];

const socialLinks = [
  { title: "GitHub", link: "https://github.com/talhahasif" },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/talha-asif-83b80522b/",
  },
  {
    title: "WhatsApp",
    link: "https://api.whatsapp.com/send/?phone=%2B923222827558&text&type=phone_number&app_absent=0",
  },
  {
    title: "Email",
    link: "https://mail.google.com/mail/u/0/?fs=1&to=talhahasif995@gmail.com&tf=cm",
  },
];

const Aboutme = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      className="dark:bg-bg_rich_Black pb-24"
    >
      {/* Fullscreen dotted hero: dots fade out towards the bottom */}
      <section className="relative -mt-14 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-5 pt-20 pb-10 text-center">
        <DottedBackground />

        <div className="relative z-10 flex flex-col items-center gap-[clamp(0.75rem,2.5vh,1.75rem)]">
          <Reveal>
            <h2 className="text-[clamp(3.25rem,min(13vw,14vh),11rem)] font-extrabold uppercase leading-none tracking-tighter text-black dark:text-white">
              About Me
            </h2>
          </Reveal>

          <div className="mt-[clamp(1.5rem,8vh,6rem)] flex flex-col items-center gap-[clamp(1rem,3vh,2rem)] sm:flex-row sm:gap-10 md:gap-14">
          <Reveal delay={0.1}>
            <div className="relative mx-auto">
              <div className="absolute inset-0 scale-110 rounded-full bg-blue-500/30 blur-2xl" />
              <Image
                src={profileImg}
                alt="Talha Asif"
                width={320}
                height={320}
                priority
                className="relative h-[clamp(9rem,36vh,22rem)] w-[clamp(9rem,36vh,22rem)] rounded-full object-cover shadow-2xl ring-4 ring-white dark:ring-bg_rich_Black"
              />
              <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white shadow-lg dark:bg-white dark:text-black">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                Available
              </span>
            </div>
          </Reveal>

          <Reveal
            delay={0.2}
            className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left"
          >
            <h1 className="text-[clamp(2.25rem,min(7vw,9.5vh),6.5rem)] font-extrabold leading-tight dark:text-white">
              Talha Asif
            </h1>
            <p className="text-[clamp(1rem,2.4vh,1.5rem)] font-semibold text-blue-500">
              Full-Stack Developer
            </p>
            <Link href="/contact" className="mt-2">
              <Button
                variant="outline"
                className="group flex items-center gap-1 font-semibold dark:text-white hover:text-blue-500 duration-200"
              >
                Let&apos;s Talk
                <ArrowForwardIcon
                  fontSize="small"
                  className="group-hover:translate-x-1 duration-200"
                />
              </Button>
            </Link>
          </Reveal>
          </div>
        </div>
      </section>

      {/* Bio + quick facts: one full screen */}
      <div className="sm:max-w-[70%] m-auto px-5 min-h-screen items-center grid md:grid-cols-3 gap-10">
        <Reveal className="md:col-span-2 flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-2xl font-bold dark:text-white">About Me</h2>
          <p className="dark:text-text_silver leading-relaxed">
            I Build Digital Products That Help Businesses Grow I'm a Full Stack
            Developer with 3+ years of experience building modern, scalable web
            applications for businesses and international clients, including
            projects for international clients. I don't just write code — I turn
            ideas into functional, user-friendly digital products that are ready
            for the real world. From custom dashboards and business platforms to
            full-stack web applications, I work across the entire development
            process using MongoDB, Express.js, React, and Node.js.
          </p>
          <p className="dark:text-text_silver leading-relaxed">
            Let's Bring Your Idea Online Whether you have an idea that needs to
            be built from scratch or an existing application that needs
            improvement, I'm available to work on your next project. You have
            the idea. I'll help turn it into a product.
          </p>

          <TraitPills className="mt-2" />
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-3">
          <div className="rounded-2xl border dark:border-gray-800 p-6 flex flex-col gap-4">
            <h3 className="text-lg font-bold dark:text-white">Quick Facts</h3>
            {quickFacts.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 dark:text-text_silver text-xs"
              >
                <Icon fontSize="small" className="text-blue-500 shrink-0" />
                {label}
              </div>
            ))}

            <div className="h-px bg-gray-800/50 my-1" />

            <div className="">
              <section className="flex flex-col items-center gap-4">
                <p className="dark:text-text_silver text-sm">Find me on</p>
                <SocialIcons iconClassName="w-6 h-6" />
              </section>
            </div>
          </div>
        </Reveal>
      </div>
    </motion.div>
  );
};

export default Aboutme;
