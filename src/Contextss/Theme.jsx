import React, { createContext, useState, useContext } from "react";

const DarkmodeContext = createContext();

const DarkmodeProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState(true);

  return (
    <DarkmodeContext.Provider value={{ darkmode, setDarkmode }}>
      {children}
    </DarkmodeContext.Provider>
  );
};

export { DarkmodeProvider, DarkmodeContext };
