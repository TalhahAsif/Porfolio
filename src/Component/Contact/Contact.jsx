import { div } from "framer-motion/client";
import React, { useContext } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DarkmodeContext } from "../../Contextss/Theme";

const sociallink = [
  {
    title: "GitHub",
    link: "https://github.com/talhahasif",
    lightIcon:
      "https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF",
    darkicon:
      "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/talha-asif-83b80522b/",
    darkicon:
      "https://img.icons8.com/?size=100&id=8808&format=png&color=000000",
    lightIcon:
      "https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF",
  },
  {
    title: "Whatsapp",
    link: "https://api.whatsapp.com/send/?phone=%2B923222827558&text&type=phone_number&app_absent=0",
    darkicon:
      "https://img.icons8.com/?size=100&id=16733&format=png&color=000000",
    lightIcon:
      "https://img.icons8.com/?size=100&id=16733&format=png&color=FFFFFF",
  },
  {
    title: "Email",
    link: "https://mail.google.com/mail/u/0/?fs=1&to=talhahasif995@gmail.com&tf=cm",
    darkicon:
      "https://img.icons8.com/?size=100&id=YRRhCXfA0Vd0&format=png&color=000000",
    lightIcon:
      "https://img.icons8.com/?size=100&id=YRRhCXfA0Vd0&format=png&color=FFFFFF",
  },
];

const Contact = () => {
  const { darkmode } = useContext(DarkmodeContext);

  return (
    <div className="flex flex-col justify-center items-center sm:max-w-[60%] gap-10 m-auto">
      <h1 className="text-4xl font-extrabold text-center md:text-start text-yellow-400">
        Let’s connect and discuss how I can contribute to your goals
      </h1>
      <div className="flex gap-20 flex-wrap justify-center items-center">
        <div className="lg:w-[30%] sm:w-full flex flex-col gap-5 text-center md:text-start">
          <h2 className="text-3xl font-bold">Talha Asif</h2>
          <h2 className="text-sm">
            Your Partner in Building a Strong Online Presence
          </h2>
        </div>
        <div className="w-[60%]">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
            {sociallink.map((data, index) => (
              <a
                target="#"
                href={data.link}
                key={index}
                className="group flex items-center justify-between w-[180px] hover:w-[220px] hover:text-2xl duration-400"
              >
                <div className="flex items-center gap-3">
                  <img
                    width="32"
                    height="32"
                    src={data.lightIcon}
                    alt={data.title}
                    className="animate__animated animate__pulse animate__infinite animate__slow group-hover:w-[40px] duration-400"
                  />
                  <p>{data.title}</p>
                </div>
                <ArrowForwardIcon fontSize="small" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
