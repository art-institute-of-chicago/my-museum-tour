import React, { createContext, useState, useReducer } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

const tourItemsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // Insertion structure is [id(key), payload(value)]
      return new Map([...state, [action.payload.id, action.payload]]);
    case "REMOVE_ITEM":
      return new Map([...state].filter(([key]) => key !== action.payload));
    default:
      return state;
  }
};

/**
 * AppProvider
 */
export function AppProvider({ children }) {
  const [tourTitle, setTourTitle] = useState("");
  const [tourDescription, setTourDescription] = useState("");
  // Although we could use an Array using a Map allows us to
  // use the id as the key and makes the value easier to access
  const [tourItems, dispatch] = useReducer(tourItemsReducer, new Map());

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
};

AppContext.Provider.propTypes = {
  value: PropTypes.shape({
    iiifBaseUrl: PropTypes.string,
    tourItems: PropTypes.instanceOf(Map),
    tourItemsDispatch: PropTypes.func,
  }),
};
