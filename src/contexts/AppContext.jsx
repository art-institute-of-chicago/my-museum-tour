import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

/**
 * AppProvider
 */
export function AppProvider({ children }) {
  const [tourTitle, setTourTitle] = useState("");
  const [tourDescription, setTourDescription] = useState("");

  return (
    <AppContext.Provider
      value={{
        iiifBaseUrl: "https://artic.edu/iiif/2",
        tourTitle,
        setTourTitle,
        tourDescription,
        setTourDescription,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

AppContext.Provider.propTypes = {
  value: PropTypes.shape({
    iiifBaseUrl: PropTypes.string,
  }),
};
