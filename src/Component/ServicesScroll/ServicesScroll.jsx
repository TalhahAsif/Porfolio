"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import ApiRoundedIcon from "@mui/icons-material/ApiRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import CloudDoneRoundedIcon from "@mui/icons-material/CloudDoneRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const services = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description:
      "Building dynamic, responsive apps end-to-end with MongoDB, Express, React & Node.js.",
    icon: LayersRoundedIcon,
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Robust server-side logic, clean architecture and secure API integrations.",
    icon: DnsRoundedIcon,
  },
  {
    id: 3,
    title: "Frontend Development",
    description:
      "Intuitive, pixel-perfect React interfaces with smooth, responsive UX.",
    icon: WebRoundedIcon,
  },
  {
    id: 4,
    title: "API Development & Integration",
    description:
      "Designing RESTful APIs that connect systems and third-party services seamlessly.",
    icon: ApiRoundedIcon,
  },
  {
    id: 5,
    title: "Database Management",
    description:
      "Efficient MongoDB schemas that keep data consistent, fast and secure.",
    icon: StorageRoundedIcon,
  },
  {
    id: 6,
    title: "Deployment & Maintenance",
    description:
      "Shipping apps to production and keeping them running smoothly, always.",
    icon: CloudDoneRoundedIcon,
  },
  {
    id: 7,
    title: "Performance Optimization",
    description:
      "Hunting down bottlenecks for faster, leaner, more efficient applications.",
    icon: SpeedRoundedIcon,
  },
  {
    id: 8,
    title: "Custom Web Solutions",
    description:
      "Tailored builds that map directly to your business goals and workflows.",
    icon: TuneRoundedIcon,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const popUp = {
  hidden: { opacity: 0, y: 70, scale: 0.85 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 16 },
  },
};

const ServicesScroll = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const distance = useMotionValue(0);
  const [sectionHeight, setSectionHeight] = useState("100vh");

  // How far the card track has to travel horizontally, and therefore how much
  // vertical scroll the section needs to stay pinned for.
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const travel = Math.max(track.scrollWidth - window.innerWidth, 0);
      distance.set(travel);
      setSectionHeight(`calc(100vh + ${travel}px)`);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [distance]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });
  const x = useTransform([progress, distance], ([p, d]) => -p * d);

  return (
    <section
      ref={sectionRef}
      style={{ height: sectionHeight }}
      className="relative w-full"
    >
      {/* Pinned for as long as the outer section is scrolling */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden">
        {/* Background layer, faded out at the top and bottom so it melts into neighbouring sections */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"
        >
          <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[120px]" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="relative flex flex-col gap-10 pt-16"
        >
          <motion.div
            variants={popUp}
            className="max-w-2xl mx-auto text-center px-5"
          >
            <span className="inline-flex items-center gap-2 text-blue-500 font-semibold text-sm uppercase tracking-widest">
              <AutoAwesomeRoundedIcon fontSize="small" />
              Services
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold dark:text-white">
              What I Can Do
            </h2>
            <p className="mt-3 dark:text-text_silver text-black/60">
              From idea to deployment — full-stack solutions built with modern
              tools and a lot of attention to detail.
            </p>
          </motion.div>

          <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex w-max gap-8 px-[8vw] py-6 will-change-transform"
            >
              {services.map((data) => {
                const Icon = data.icon;
                return (
                  <motion.div
                    key={data.id}
                    variants={popUp}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="group flex-none w-72 backdrop-blur-sm bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/50 transition-shadow duration-300"
                  >
                    <div className="p-6 flex flex-col gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                        <Icon fontSize="medium" />
                      </div>
                      <p className="font-bold text-lg dark:text-white text-left">
                        {data.title}
                      </p>
                      <p className="text-sm text-black/60 dark:text-text_silver text-left leading-relaxed">
                        {data.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* scroll progress */}
          <motion.div variants={popUp} className="mx-auto w-48 h-1 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
            <motion.div
              style={{ scaleX: progress }}
              className="h-full origin-left rounded-full bg-blue-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesScroll;
