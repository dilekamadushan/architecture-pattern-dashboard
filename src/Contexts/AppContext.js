import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [analyzedResults, setAnalyzedResults] = useState({});
    const [userInputs, setUserInputs] = useState({});
    const [userInputXml, setUserInputXml] = useState('');

  return (
    <AppContext.Provider
      value={{
          analyzedResults,
          setAnalyzedResults,
          userInputs,
          setUserInputs,
          userInputXml,
          setUserInputXml
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
