import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider(props) {
  const {
    children,
    searchResultItems: searchResultItemsValue,
    searchQuery: searchQueryValue,
    searchFetching: searchFetchingValue,
    searchError: searchErrorValue,
  } = props;
  const [searchResultItems, setSearchResultItems] = useState(
    searchResultItemsValue || null,
  );
  const [searchQuery, setSearchQuery] = useState(searchQueryValue || "");
  const [searchFetching, setSearchFetching] = useState(
    searchFetchingValue || false,
  );
  const [searchError, setSearchError] = useState(searchErrorValue || false);

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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
