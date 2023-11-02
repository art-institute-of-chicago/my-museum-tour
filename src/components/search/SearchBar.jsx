import React, { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import useFetch from "../../hooks/useFetch";
import { createSearchUrl } from "../../utils";

/**
 * SearchBar
 */
function SearchBar() {
  const {
    searchQuery,
    setSearchQuery,
    setSearchResultItems,
    setSearchFetching,
    setSearchError,
    setActiveTheme,
  } = useContext(SearchContext);

  const { fetchData } = useFetch({
    dataSubSelector: "data",
    dataSetter: setSearchResultItems,
    fetchingSetter: setSearchFetching,
    errorSetter: setSearchError,
  });

  const handleSubmit = (event) => {
    fetchData(createSearchUrl({ keywords: searchQuery }));
    // Deselect any active theme
    setActiveTheme(null);
    event.preventDefault();
  };

  return (
    <form
      id="aic-ct-search"
      role="search"
      aria-label="Objects for your tour"
      onSubmit={handleSubmit}
    >
      <label htmlFor="aic-ct-search__input" className="sr-only">
        Search the collection
      </label>
      <br />
      <input
        id="aic-ct-search__input"
        type="search"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => {
          if (e.target.value) e.target.setCustomValidity("");
          setSearchQuery(e.target.value);
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
