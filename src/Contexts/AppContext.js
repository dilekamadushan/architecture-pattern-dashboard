import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [analyzedResults, setAnalyzedResults] = useState({});
    const [userInputs, setUserInputs] = useState({});

  return (
    <AppContext.Provider
      value={{
          analyzedResults,
          setAnalyzedResults,
          userInputs,
          setUserInputs
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
