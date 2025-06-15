import React, { createContext, useContext, useState } from "react";

const LigaContext = createContext();

export function LigaProvider({ children }) {
  const [bundesland, setBundesland] = useState(null);
  const [liga, setLiga] = useState(null);

  return (
    <LigaContext.Provider value={{ bundesland, setBundesland, liga, setLiga }}>
      {children}
    </LigaContext.Provider>
  );
}

export function useLiga() {
  return useContext(LigaContext);
}
