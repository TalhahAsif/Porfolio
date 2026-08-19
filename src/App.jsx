import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Banner from "../src/assets/Banner.png";
import ServicesScroll from "./Component/ServicesScroll/ServicesScroll";
import Skills from "./Component/Skills/Skills";
import { DarkmodeContext } from "./Contextss/Theme";
import UseDaily from "./Component/UseDaily/UseDaily";
import Projects from "./Component/Projects/Projects";
import Contact from "./Component/Contact/Contact";
import Header from "./assets/Headers/header";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./home";

function App() {
  const { darkmode, setDarkmode } = useContext(DarkmodeContext);

  return (
    <div className={darkmode ? "dark" : ""}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
