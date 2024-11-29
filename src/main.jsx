import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { DarkmodeProvider } from "./Contextss/Theme.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkmodeProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </DarkmodeProvider>
  </StrictMode>
);
