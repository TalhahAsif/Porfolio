import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DarkmodeProvider } from "./Contextss/Theme.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <DarkmodeProvider>
        <App />
      </DarkmodeProvider>
    </StrictMode>
  </BrowserRouter>,
);
