import React, {
  createContext,
  useState,
  useReducer,
  useRef,
  useMemo,
} from "react";
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
  const [validityIssues, setValidityIssues] = useState([]);
  const iiifBaseUrl = "https://artic.edu/iiif/2";

  // Something to do with this being a reference type
  // Causes an infinite loop if it's not memoized
  const limits = useMemo(
    () => ({
      note: 255,
      title: 255,
      description: 255,
      items: {
        min: 1,
        max: 6,
      },
    }),
    [],
  );

  return (
    <AppContext.Provider
      value={{
        iiifBaseUrl,
        limits,
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
        validityIssues,
        setValidityIssues,
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
    limits: PropTypes.shape({
      note: PropTypes.number,
      title: PropTypes.number,
      description: PropTypes.number,
      items: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }),
    }),
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
    navSearchButtonRef: PropTypes.shape({
      current: PropTypes.instanceOf(Element),
    }),
    validityIssues: PropTypes.arrayOf(PropTypes.string),
    setValidityIssues: PropTypes.func,
  }),
};
