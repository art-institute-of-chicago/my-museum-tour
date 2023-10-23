import React, { createContext, useState, useReducer, useRef } from "react";
import PropTypes from "prop-types";
import tourItemsReducer from "../reducers/tourItemsReducer";

export const AppContext = createContext();

/**
 * AppProvider
 */
export function AppProvider(props) {
  const {
    children,
    tourItems: tourItemsValue,
    navPages: navPagesValue,
  } = props;
  const [tourTitle, setTourTitle] = useState("");
  const [tourDescription, setTourDescription] = useState("");
  const [navPages, setNavPages] = useState(navPagesValue || []);
  const [activeNavPage, setActiveNavPage] = useState(0);
  const [tourItems, tourItemsDispatch] = useReducer(
    tourItemsReducer,
    tourItemsValue || [],
  );
  const navSearchButtonRef = useRef(null);

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
        navSearchButtonRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
  tourItems: PropTypes.instanceOf(Array),
  navPages: PropTypes.instanceOf(Array),
};

AppContext.Provider.propTypes = {
  value: PropTypes.shape({
    iiifBaseUrl: PropTypes.string,
    tourItems: PropTypes.instanceOf(Array),
    tourItemsDispatch: PropTypes.func,
    tourTitle: PropTypes.string,
    setTourTitle: PropTypes.func,
    tourDescription: PropTypes.string,
    setTourDescription: PropTypes.func,
    navPages: PropTypes.instanceOf(Array),
    setNavPages: PropTypes.func,
    activeNavPage: PropTypes.number,
    setActiveNavPage: PropTypes.func,
  }),
};
