import React from "react";
import { Link } from "react-router-dom";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@/components/ui/button";
import SocialIcons from "../SocialIcons/SocialIcons";
import TraitPills from "../TraitPills/TraitPills";
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
      className="dark:bg-bg_rich_Black min-h-screen pb-24"
    >
      {/* Cover photo */}
      <div className="sm:max-w-[70%] m-auto px-5 mt-10">
        <div className="relative h-48 sm:h-64 md:h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-[#0E0F19] via-[#151830] to-[#0E0F19] border dark:border-gray-800">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(rgba(250,204,21,0.35) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="absolute -top-16 -left-16 w-72 h-72 bg-yellow-400/25 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -right-10 w-80 h-80 bg-yellow-400/10 blur-3xl rounded-full" />
        </div>
      </div>

      {/* Profile row, overlapping the cover like a Facebook profile */}
      <div className="sm:max-w-[70%] m-auto px-5">
        <div className="relative -mt-16 md:-mt-20 flex flex-col md:flex-row md:items-end gap-5 md:gap-8">
          <div className="relative shrink-0 mx-auto md:mx-6">
            <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-2xl scale-110" />
            <img
              src={profileImg}
              alt="Talha Asif"
              className="relative w-32 h-32 md:w-44 md:h-44 rounded-full object-cover ring-4 ring-white dark:ring-bg_rich_Black shadow-2xl"
            />
            <span className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-black/80 dark:bg-white text-white dark:text-black text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available
            </span>
          </div>

          <div className="flex-1 flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-2 text-center md:text-left">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold dark:text-white">
                Talha Asif
              </h1>
              <p className="text-yellow-400 font-semibold mt-1">
                Full-Stack Developer
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-3">
              <a href="/#Contect">
                <Button
                  variant="outline"
                  className="group flex items-center gap-1 font-semibold dark:text-white hover:text-yellow-400 duration-200"
                >
                  Let&apos;s Talk
                  <ArrowForwardIcon
                    fontSize="small"
                    className="group-hover:translate-x-1 duration-200"
                  />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bio + quick facts */}
      <div className="sm:max-w-[70%] m-auto px-5 mt-14 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 flex flex-col gap-4 text-center md:text-left">
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
        </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-2xl border dark:border-gray-800 p-6 flex flex-col gap-4">
            <h3 className="text-lg font-bold dark:text-white">Quick Facts</h3>
            {quickFacts.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 dark:text-text_silver text-xs"
              >
                <Icon fontSize="small" className="text-yellow-400 shrink-0" />
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
        </div>
      </div>
    </motion.div>
  );
};

export default Aboutme;
