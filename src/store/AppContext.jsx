import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userdata, setUserData] = useState({});

  return (
    <AppContext.Provider value={{ userdata, setUserData }}>
      {children}
    </AppContext.Provider>
  );
};
