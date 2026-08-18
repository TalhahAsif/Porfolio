import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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

const ServicesScroll = () => {
  const scrollRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    let frameId;

    const scrollStep = () => {
      if (scrollContainer && !isPaused.current) {
        scrollAmount += 0.6;
        scrollContainer.scrollLeft = scrollAmount;

        // If reached end, reset to start (seamless loop with clones)
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(scrollStep);
    };

    frameId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(frameId);
  }, []);

  const loopedServices = [...services, ...services];

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent dark:via-yellow-400/10 border-y border-black/5 dark:border-white/10">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-yellow-400/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-2xl mx-auto text-center px-5 mb-14"
      >
        <span className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm uppercase tracking-widest">
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

      <div
        ref={scrollRef}
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => (isPaused.current = false)}
        className="relative flex w-full overflow-x-scroll scrollbar-hide whitespace-nowrap py-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      >
        {loopedServices.map((data, index) => {
          const Icon = data.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex-none mx-4 w-72 whitespace-normal backdrop-blur-sm bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl shadow-lg hover:shadow-yellow-400/20 hover:border-yellow-400/50 transition-shadow duration-300"
            >
              <div className="p-6 flex flex-col gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-400/15 text-yellow-500 dark:text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
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
      </div>
    </section>
  );
};

export default ServicesScroll;
