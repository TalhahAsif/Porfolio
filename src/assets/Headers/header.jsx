import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import BugReportRoundedIcon from "@mui/icons-material/BugReportRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import DownloadCV from "../../Component/DownloadCV/DowloadCV";

const traits = [
  { label: "Code", icon: CodeRoundedIcon },
  { label: "Design", icon: DesignServicesRoundedIcon },
  { label: "Debug", icon: BugReportRoundedIcon },
  { label: "Ship", icon: RocketLaunchRoundedIcon },
  { label: "Coffee", icon: LocalCafeRoundedIcon },
];

const Header = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 mt-10 text-left">
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

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {traits.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 dark:text-text_silver text-sm font-medium bg-black/5 dark:bg-white/10 px-3 py-1.5 rounded-full"
            >
              <Icon fontSize="small" className="text-yellow-400" />
              {label}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-2">
          <DownloadCV />
          <a
            href="#Contect"
            className="group flex items-center gap-1 font-semibold dark:text-white hover:text-yellow-400 duration-200"
          >
            Let&apos;s talk
            <ArrowForwardIcon
              fontSize="small"
              className="group-hover:translate-x-1 duration-200"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Header;
