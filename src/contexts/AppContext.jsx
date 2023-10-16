import React, { createContext } from "react";

export const AppContext = createContext();

/**
 * AppProvider
 */
export function AppProvider({ children }) {
  return (
    <AppContext.Provider
      value={{
        iiifBaseUrl: "https://artic.edu/iiif/2",
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
