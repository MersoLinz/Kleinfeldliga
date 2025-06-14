import React, { createContext, useContext, useState } from "react";

const SelectedStateContext = createContext();

export const SelectedStateProvider = ({ children }) => {
  const [selectedState, setSelectedState] = useState("OOE"); // Standard OÖ

  return (
    <SelectedStateContext.Provider value={{ selectedState, setSelectedState }}>
      {children}
    </SelectedStateContext.Provider>
  );
};

export const useSelectedState = () => useContext(SelectedStateContext);
