import React, {
  createContext,
  useState,
  useReducer,
  useRef,
  useEffect,
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

  // Update validityIssues when tourTitle and tourItems change
  useEffect(() => {
    const newValidityIssues = [];
    if (!tourTitle) {
      newValidityIssues.push({
        page: "Tour Metadata",
        target: "Tour Title",
        issue: "A title is required",
      });
    }
    if (!tourItems.length) {
      newValidityIssues.push({
        page: "Tour Items",
        target: "Tour Items",
        issue: "At least one item is required",
      });
    }
    setValidityIssues(newValidityIssues);
  }, [tourTitle, tourItems.length]);
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
    validityIssues: PropTypes.arrayOf(
      PropTypes.shape({
        page: PropTypes.string,
        label: PropTypes.string,
        issue: PropTypes.string,
      }),
    ),
    setValidityIssues: PropTypes.func,
  }),
};
