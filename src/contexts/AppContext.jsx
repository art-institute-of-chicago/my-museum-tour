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
  const [navPages, setNavPages] = useState([
    {
      id: 0,
      title: "Search",
    },
    {
      id: 1,
      title: "Tour",
    },
  ]);
  const [activeNavPage, setActiveNavPage] = useState(0);
  // Although we could use an Array using a Map allows us to
  // use the id as the key and makes the value easier to access
  const [tourItems, tourItemsDispatch] = useReducer(
    tourItemsReducer,
    new Map(
      tourItemsValue ? tourItemsValue.map((item) => [item.id, item]) : [],
    ),
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
        tourItemsDispatch,
        navPages,
        setNavPages,
        activeNavPage,
        setActiveNavPage,
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
    tourTitle: PropTypes.string,
    setTourTitle: PropTypes.func,
    tourDescription: PropTypes.string,
    setTourDescription: PropTypes.func,
  }),
};
