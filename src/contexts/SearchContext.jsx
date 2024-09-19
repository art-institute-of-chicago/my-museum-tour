import React, { createContext, useState, useRef } from "react";
import PropTypes from "prop-types";

export const SearchContext = createContext();

/**
 * SearchProvider
 */
export function SearchProvider(props) {
  const {
    children,
    searchResultItems: searchResultItemsValue,
    searchQuery: searchQueryValue,
    searchFetching: searchFetchingValue,
    searchError: searchErrorValue,
    searchPreviewId: searchPreviewIdValue,
    pagination: paginationValue,
  } = props;
  const [searchResultItems, setSearchResultItems] = useState(
    searchResultItemsValue || null,
  );
  const [searchQuery, setSearchQuery] = useState(searchQueryValue || "");
  const [searchFetching, setSearchFetching] = useState(
    searchFetchingValue || false,
  );
  const [searchError, setSearchError] = useState(searchErrorValue || false);
  const [activeTheme, setActiveTheme] = useState(null);
  const [searchPreviewId, setSearchPreviewId] = useState(
    searchPreviewIdValue || null,
  );
  const searchPreviewRef = useRef();
  const [pagination, setPagination] = useState(paginationValue || null);

  return (
    <SearchContext.Provider
      value={{
        searchResultItems,
        setSearchResultItems,
        searchQuery,
        setSearchQuery,
        searchFetching,
        setSearchFetching,
        searchError,
        setSearchError,
        activeTheme,
        setActiveTheme,
        searchPreviewId,
        setSearchPreviewId,
        searchPreviewRef,
        pagination,
        setPagination,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
  searchResultItems: PropTypes.array,
  searchQuery: PropTypes.string,
  searchFetching: PropTypes.bool,
  searchError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  searchPreviewId: PropTypes.number,
  pagination: PropTypes.object,
};

SearchContext.Provider.propTypes = {
  value: PropTypes.shape({
    searchResultItems: PropTypes.array,
    setSearchResultItems: PropTypes.func,
    searchQuery: PropTypes.string,
    setSearchQuery: PropTypes.func,
    searchFetching: PropTypes.bool,
    setSearchFetching: PropTypes.func,
    searchError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    setSearchError: PropTypes.func,
    activeTheme: PropTypes.string,
    setActiveTheme: PropTypes.func,
    searchPreviewId: PropTypes.number,
    setSearchPreviewId: PropTypes.func,
    searchPreviewRef: PropTypes.object,
    pagination: PropTypes.object,
    setPagination: PropTypes.func,
  }),
  children: PropTypes.node.isRequired,
};
