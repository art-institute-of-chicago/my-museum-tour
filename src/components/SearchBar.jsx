import React, { useState, useEffect, useContext } from "react";
import useFetchItems from "../hooks/useFetchItems";
import { SearchContext } from "../contexts/SearchContext";

/**
 * SearchBar
 */
function SearchBar() {
  const {
    searchQuery,
    setSearchQuery,
    setSearchResultItems,
    setSearchError,
    setSearchFetching,
  } = useContext(SearchContext);
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
  }, [data, setSearchResultItems]);

  useEffect(() => {
    setSearchError(error);
  }, [error, setSearchError]);

  useEffect(() => {
    setSearchFetching(fetching);
  }, [fetching, setSearchFetching]);

  return (
    <form
      id="aic-ct-search"
      role="search"
      aria-label="Objects for your tour"
      onSubmit={handleSubmit}
    >
      <input
        id="aic-ct-search__input"
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
      <button id="aic-ct-search__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
