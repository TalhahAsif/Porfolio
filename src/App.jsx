import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { Button } from "@nextui-org/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="border border-red-500 h-screen max-w-[1280px] m-auto text-center p-5">
        <Navbar/>
      </div>
    </>
  );
}

export default App;
