import React, { useState, useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { createSearchURL } from "../../utils";

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
  const [inputValue, setInputValue] = useState(searchQuery);

  const fetchItems = (keywords) => {
    // Generate request URL
    const apiUrl = createSearchURL({ keywords });

    // Provide an AbortController to cancel the fetch request if the keywords change
    const abortController = new AbortController();
    const signal = abortController.signal;

    // Empty keywords should not trigger a fetch or return results
    // Note: HTML validation should mean this never fires
    if (keywords === "") {
      setSearchResultItems(null);
      setSearchFetching(false);
      setSearchError(null);
      return;
    }

    async function getData() {
      try {
        const res = await fetch(apiUrl, { signal });
        const data = await res.json();
        setSearchResultItems(data.data);
        setSearchFetching(false);
      } catch (error) {
        // Explicity ignore AbortError's as they aren't really errors as far as we're concerned
        if (error.name === "AbortError") return;

        setSearchError("Error fetching results");
        setSearchFetching(false);
      }
    }

    setSearchFetching(true);
    getData();

    // Cancel the fetch request if the keywords change
    return () => {
      abortController.abort();
    };
  };

  const handleSubmit = (event) => {
    setSearchQuery(inputValue);
    fetchItems(inputValue);
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
        value={inputValue}
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
