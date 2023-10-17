import React, { createContext, useState, useReducer } from "react";
import PropTypes from "prop-types";
import tourItemsReducer from "../reducers/tourItemsReducer";

export const AppContext = createContext();

/**
 * AppProvider
 */
export function AppProvider(props) {
  const { children, tourItems: tourItemsValue } = props;
  const [tourTitle, setTourTitle] = useState("");
  const [tourDescription, setTourDescription] = useState("");
  // Although we could use an Array using a Map allows us to
  // use the id as the key and makes the value easier to access
  const [tourItems, dispatch] = useReducer(
    tourItemsReducer,
    new Map(tourItemsValue ? [...tourItemsValue] : []),
  );

  return (
    <AppContext.Provider
      value={{
        iiifBaseUrl: "https://artic.edu/iiif/2",
        tourTitle,
        setTourTitle,
        tourDescription,
        setTourDescription,
        tourItems,
        tourItemsDispatch: dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
  tourItems: PropTypes.instanceOf(Map),
};

AppContext.Provider.propTypes = {
  value: PropTypes.shape({
    iiifBaseUrl: PropTypes.string,
    tourItems: PropTypes.instanceOf(Map),
    tourItemsDispatch: PropTypes.func,
  }),
};
