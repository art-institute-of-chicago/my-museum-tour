import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

const CustomTourBuilder = () => {
  const [searchResultItems, setSearchResultItems] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFetching, setSearchFetching] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [iiifBaseUrl, setIiifBaseUrl] = useState("");

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSearchFetching={setSearchFetching}
        setSearchError={setSearchError}
        setSearchResultItems={setSearchResultItems}
        setIiifBaseUrl={setIiifBaseUrl}
      />
      <SearchResults
        searchError={searchError}
        searchFetching={searchFetching}
        searchResultItems={searchResultItems}
        iiifBaseUrl={iiifBaseUrl}
      />
    </>
  );
};

export default CustomTourBuilder;
