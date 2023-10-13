import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

const CustomTourBuilder = () => {
  const [searchResultItems, setSearchResultItems] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFetching, setSearchFetching] = useState(false);
  const [searchError, setSearchError] = useState(null);

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSearchFetching={setSearchFetching}
        setSearchError={setSearchError}
        setSearchResultItems={setSearchResultItems}
      />
      <SearchResults
        searchError={searchError}
        searchFetching={searchFetching}
        searchResultItems={searchResultItems}
      />
    </>
  );
};

export default CustomTourBuilder;
