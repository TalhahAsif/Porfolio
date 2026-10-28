"use client";

import React, { createContext, useState } from "react";

const DarkmodeContext = createContext();

const DarkmodeProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState(true);
  const [navbarImg, setNavbarImg] = useState(true);

  return (
    <DarkmodeContext.Provider
      value={{ darkmode, setDarkmode, navbarImg, setNavbarImg }}
    >
      {children}
    </DarkmodeContext.Provider>
  );
};

export { DarkmodeProvider, DarkmodeContext };
