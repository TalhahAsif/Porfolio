import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DarkmodeContext } from "../../Contextss/Theme";
import SocialIcons from "../SocialIcons/SocialIcons";

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
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center sm:max-w-[60%] gap-14 m-auto">
      <h1
        onClick={() => navigate("/contact")}
        className="text-4xl font-extrabold text-center md:text-start text-yellow-400 hover:text-yellow-300 duration-300 cursor-pointer"
      >
        Let’s connect and discuss how I can contribute to your goals
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 w-full">
        <div className="sm:w-full flex flex-col gap-5 text-center md:text-start">
          <h2
            onClick={() => navigate("/about")}
            className="text-3xl font-bold hover:text-yellow-400 duration-300 cursor-pointer"
          >
            Talha Asif
          </h2>
          <h2 className="text-sm">
            Your Partner in Building a Strong Online Presence
          </h2>
        </div>
        <div>
          <section className="flex flex-col items-center gap-4">
            <p className="dark:text-text_silver text-sm">Find me on</p>
            <SocialIcons iconClassName="w-6 h-6" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
