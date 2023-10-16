import React, { createContext } from "react";
import PropTypes from "prop-types";

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

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

AppContext.Provider.propTypes = {
  value: PropTypes.shape({
    iiifBaseUrl: PropTypes.string,
  }),
};
