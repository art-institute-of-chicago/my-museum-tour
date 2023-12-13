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
    tourTitle: tourTitleValue,
    creatorEmail: creatorEmailValue,
    creatorName: creatorNameValue,
    recipientName: recipientNameValue,
    tourDescription: tourDescriptionValue,
    marketingOptIn: marketingOptInValue,
    tourItems: tourItemsValue,
    navPages: navPagesValue,
    apiSaveEndpoint: apiSaveEndpointValue,
    iiifBaseUrl,
    unloadHandler,
  } = props;
  const [tourTitle, setTourTitle] = useState(tourTitleValue || "");
  const [creatorEmail, setCreatorEmail] = useState(creatorEmailValue || "");
  const [validCreatorEmail, setValidCreatorEmail] = useState(false);
  const [creatorName, setCreatorName] = useState(creatorNameValue || "");
  const [recipientName, setRecipientName] = useState(recipientNameValue || "");
  const [marketingOptIn, setMarketingOptIn] = useState(
    marketingOptInValue || false,
  );
  const [tourDescription, setTourDescription] = useState(
    tourDescriptionValue || "",
  );
  const [navPages, setNavPages] = useState(navPagesValue || []);
  const [activeNavPage, setActiveNavPage] = useState(0);
  const [tourItems, tourItemsDispatch] = useReducer(
    tourItemsReducer,
    tourItemsValue || [],
  );
  const headerNextButonRef = useRef(null);
  const [validityIssues, setValidityIssues] = useState([]);
  const apiSaveEndpoint = apiSaveEndpointValue || "/api/v1/custom-tours";
  const [isSaving, setIsSaving] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Something to do with this being a reference type
  // Causes an infinite loop if it's not memoized
  const limits = useMemo(
    () => ({
      objectNote: 255,
      title: 255,
      creatorName: 140,
      recipientName: 140,
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
        apiSaveEndpoint,
        iiifBaseUrl,
        limits,
        tourTitle,
        setTourTitle,
        creatorEmail,
        setCreatorEmail,
        validCreatorEmail,
        setValidCreatorEmail,
        creatorName,
        setCreatorName,
        recipientName,
        setRecipientName,
        tourDescription,
        setTourDescription,
        marketingOptIn,
        setMarketingOptIn,
        tourItems,
        tourItemsDispatch,
        navPages,
        setNavPages,
        activeNavPage,
        setActiveNavPage,
        headerNextButonRef,
        validityIssues,
        setValidityIssues,
        isSaving,
        setIsSaving,
        scrollY,
        setScrollY,
        unloadHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  apiSaveEndpoint: PropTypes.string,
  iiifBaseUrl: PropTypes.string,
  children: PropTypes.node.isRequired,
  tourTitle: PropTypes.string,
  creatorEmail: PropTypes.string,
  creatorName: PropTypes.string,
  recipientName: PropTypes.string,
  marketingOptIn: PropTypes.bool,
  tourDescription: PropTypes.string,
  tourItems: PropTypes.instanceOf(Array),
  navPages: PropTypes.instanceOf(Array),
  unloadHandler: PropTypes.func,
};

AppContext.Provider.propTypes = {
  value: PropTypes.shape({
    apiSaveEndpoint: PropTypes.string,
    iiifBaseUrl: PropTypes.string,
    limits: PropTypes.shape({
      note: PropTypes.number,
      title: PropTypes.number,
      creatorName: PropTypes.number,
      recipientName: PropTypes.number,
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
    creatorEmail: PropTypes.string,
    setCreatorEmail: PropTypes.func,
    validCreatorEmail: PropTypes.bool,
    setValidCreatorEmail: PropTypes.func,
    creatorName: PropTypes.string,
    setCreatorName: PropTypes.func,
    recipientName: PropTypes.string,
    setRecipientName: PropTypes.func,
    tourDescription: PropTypes.string,
    setTourDescription: PropTypes.func,
    marketingOptIn: PropTypes.bool,
    setMarketingOptIn: PropTypes.func,
    navPages: PropTypes.instanceOf(Array),
    setNavPages: PropTypes.func,
    activeNavPage: PropTypes.number,
    setActiveNavPage: PropTypes.func,
    headerNextButonRef: PropTypes.shape({
      current: PropTypes.instanceOf(Element),
    }),
    validityIssues: PropTypes.arrayOf(PropTypes.string),
    setValidityIssues: PropTypes.func,
    isSaving: PropTypes.bool,
    setIsSaving: PropTypes.func,
    scrollY: PropTypes.number,
    setScrollY: PropTypes.func,
  }),
};
