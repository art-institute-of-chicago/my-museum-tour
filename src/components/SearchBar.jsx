import React, { useState, useEffect } from "react";
import useFetchItems from "../hooks/useFetchItems";

function SearchBar(props) {
  const {
    searchQuery,
    setSearchQuery,
    setSearchResultItems,
    setSearchError,
    setSearchFetching,
    setIiifBaseUrl,
  } = props;
  const [inputValue, setInputValue] = useState("");
  const { data, error, fetching } = useFetchItems(searchQuery);

  const handleSubmit = (event) => {
    setSearchQuery(inputValue);
    event.preventDefault();
  };

  useEffect(() => {
    // "data" is contingent on handleSubmit being called
    if (!data) return;
    setSearchResultItems(data.data);
    setIiifBaseUrl(data.config.iiif_url);
  }, [data, setSearchResultItems, setIiifBaseUrl]);

  useEffect(() => {
    setSearchError(error);
  }, [error, setSearchError]);

  useEffect(() => {
    setSearchFetching(fetching);
  }, [fetching, setSearchFetching]);

  return (
    <form
      role="search"
      aria-label="Objects for your tour"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => {
          if (e.target.value) e.target.setCustomValidity("");
          setInputValue(e.target.value);
        }}
        onInvalid={(e) => {
          e.target.setCustomValidity("You must enter a search term");
        }}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
