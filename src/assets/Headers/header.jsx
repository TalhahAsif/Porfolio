import { motion, useScroll, useTransform } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadCV from "../../Component/DownloadCV/DowloadCV";
import { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInView } from "motion/react";
import { DarkmodeContext } from "@/Contextss/Theme";
import { Button } from "@/components/ui/button";
import TraitPills from "@/Component/TraitPills/TraitPills";

const Header = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const { navbarImg, setNavbarImg } = useContext(DarkmodeContext);

  const isInView = useInView(sectionRef, {
    amount: 0,
  });

  useEffect(() => {
    setNavbarImg(!isInView);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 mt-10 text-left"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative shrink-0"
      >
        <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-2xl scale-110" />
        <img
          src="https://res.cloudinary.com/pvcq6rie/image/upload/v1787094437/copy_of_gemini_generated_image_ldaaqmldaaqmldaa.jpg"
          alt="Talha Asif"
          className="relative w-40 h-40 md:w-52 md:h-52 rounded-full object-cover ring-4 ring-yellow-400/60 drop-shadow-2xl"
        />
        <span className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-black/80 dark:bg-white text-white dark:text-black text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col items-center md:items-start gap-4 max-w-xl"
      >
        <p className="text-yellow-400 font-semibold tracking-wide">
          Hi there! I&apos;m 👋
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold dark:text-white">
          Talha Asif
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-yellow-400">
          Full-Stack Developer
        </h2>

        <TraitPills />

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-2">
          <Button variant="ghost" onClick={() => navigate("/contact")} className="group flex items-center gap-1 font-semibold dark:text-white hover:text-yellow-400 duration-200">
            Start a Project
            <ArrowForwardIcon
              fontSize="small"
              className="group-hover:translate-x-1 duration-200"
            />
          </Button>
          <Link to="/about">
            <Button variant="outline" className="group flex items-center gap-1 font-semibold dark:text-white hover:text-blue-400 duration-200">
              About Me
              <ArrowForwardIcon
                fontSize="small"
                className="group-hover:translate-x-1 duration-200"
              />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Header;
