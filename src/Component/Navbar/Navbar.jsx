"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ThemeSwitchBTN from "../ThemeSwitch/ThemeSwitch";
import SocialIcons from "../SocialIcons/SocialIcons";
import { DarkmodeContext } from "@/Contextss/Theme";

const Navs = [
  { section: "Home", id: "Home" },
  { section: "Service", id: "Service" },
  { section: "Stack", id: "Skill" },
  { section: "Work", id: "Projects" },
  { section: "About", path: "/about" },
  { section: "Contact", path: "/contact" },
];

// Section links scroll programmatically so the URL never gains a #hash.
// When the target lives on the home page and we are elsewhere, the id is
// parked here until the home page has mounted.
const PENDING_KEY = "pendingSection";

const scrollToSection = (id, behavior = "smooth") => {
  if (id === "Home") {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
};

const EASE = [0.76, 0, 0.24, 1];

const panel = {
  hidden: { x: "100%" },
  show: { x: 0, transition: { duration: 0.7, ease: EASE } },
  exit: { x: "100%", transition: { duration: 0.6, ease: EASE, delay: 0.15 } },
};

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const rise = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.7, ease: EASE } },
  exit: { y: "110%", transition: { duration: 0.35, ease: EASE } },
};

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.9 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const { navbarImg } = useContext(DarkmodeContext);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Finish a section jump that started on another page.
  useEffect(() => {
    if (pathname !== "/") return;
    const id = sessionStorage.getItem(PENDING_KEY);
    if (!id) return;
    sessionStorage.removeItem(PENDING_KEY);
    const t = setTimeout(() => scrollToSection(id, "instant"), 150);
    return () => clearTimeout(t);
  }, [pathname]);

  const goToSection = (e, id) => {
    e.preventDefault();
    setOpen(false);

    if (pathname === "/") {
      // Let the menu release its scroll lock before scrolling.
      setTimeout(() => scrollToSection(id), 50);
    } else {
      sessionStorage.setItem(PENDING_KEY, id);
      router.push("/");
    }
  };

  // Lock page scroll and allow Esc to close while the menu is open.
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <section className="flex items-center justify-between m-auto px-5 sm:max-w-[60%] sticky top-5 z-[65] bg-transparent">
        <Link href="/" aria-label="Home" onClick={(e) => goToSection(e, "Home")}>
          {!navbarImg ? (
            <div className="text-2xl font-extrabold text-white dark:text-black bg-black dark:bg-white p-1.5 rounded-xl cursor-pointer">
              <p>TA</p>
            </div>
          ) : (
            <Image
              src="https://res.cloudinary.com/pvcq6rie/image/upload/v1787094437/copy_of_gemini_generated_image_ldaaqmldaaqmldaa.jpg"
              alt="Talha Asif"
              width={56}
              height={56}
              className="w-14 p-1.5 rounded-2xl cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-12"
            />
          )}
        </Link>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative flex h-12 w-12 items-center justify-center rounded-full bg-black/10 dark:bg-white/30 backdrop-blur-sm hover:bg-blue-500 dark:hover:bg-blue-500 duration-300 group"
          >
            <span className="relative block h-4 w-6">
              <motion.span
                className="absolute left-0 h-0.5 w-6 rounded bg-black dark:bg-white group-hover:bg-white"
                animate={open ? { top: 7, rotate: 45 } : { top: 0, rotate: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
              />
              <motion.span
                className="absolute left-0 top-[7px] h-0.5 w-6 rounded bg-black dark:bg-white group-hover:bg-white"
                animate={open ? { opacity: 0, x: 12 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute left-0 h-0.5 w-6 rounded bg-black dark:bg-white group-hover:bg-white"
                animate={
                  open ? { top: 7, rotate: -45 } : { top: 14, rotate: 0 }
                }
                transition={{ duration: 0.4, ease: EASE }}
              />
            </span>
          </button>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="menu"
            variants={panel}
            initial="hidden"
            animate="show"
            exit="exit"
            aria-label="Main menu"
            className="fixed inset-0 z-[60] flex h-dvh w-screen flex-col overflow-hidden pt-24 pb-24 bg-background dark:bg-bg_rich_Black text-black dark:text-white"
          >
            <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-52 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

            <motion.ul
              variants={list}
              className="relative mx-auto my-auto flex w-full max-w-5xl flex-col gap-[1.5vh] px-8"
            >
              {Navs.map((data, index) => (
                <li key={data.section} className="overflow-hidden">
                  <motion.div variants={rise}>
                    <Link
                      href={data.path ?? "/"}
                      onClick={(e) =>
                        data.id ? goToSection(e, data.id) : setOpen(false)
                      }
                      className="group flex items-baseline gap-4 text-[min(8vh,14vw,6.5rem)] leading-[1.1] font-extrabold tracking-tight duration-500 hover:translate-x-4 hover:text-blue-500"
                    >
                      <span className="text-sm font-semibold text-blue-500 sm:text-base">
                        0{index + 1}
                      </span>
                      {data.section}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fade}
              className="absolute bottom-6 left-0 right-0 mx-auto flex w-full max-w-5xl items-center justify-between px-8"
            >
              <SocialIcons iconClassName="w-6 h-6" />
              <ThemeSwitchBTN />
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
