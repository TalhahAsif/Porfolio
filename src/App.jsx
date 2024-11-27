import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { Button } from "@nextui-org/react";
import Banner from "../src/assets/Banner.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <section className="dark:bg-black">
        <div className="h-screen max-w-[1280px] m-auto text-center p-5">
          <Navbar />
          <div className="my-20">
            <img
              src={Banner}
              width={"80%"}
              alt=""
              className="m-auto rounded-2xl drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
