import React, { useContext, useRef, useEffect, useState } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import useFetch from "../../hooks/useFetch";
import { createSearchUrl } from "../../utils";
import classNames from "classnames";

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

  const [initialRender, setInitialRender] = useState(true);

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

  const searchButtonRef = useRef(null);

  const formClasses = classNames("m-search-bar aic-ct-search", {
    "s-autocomplete-active": searchQuery,
  });

  // Fetch the default search results on mount
  // initialRender gets around the eslint warning about fetchData being a dependency.
  // If not present it will cause an infinite loop
  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      fetchData(createSearchUrl({ keywords: "" }));
    }
  }, [fetchData, initialRender, setInitialRender]);

  return (
    <form
      id="aic-ct-search"
      role="search"
      aria-label="Objects for your tour"
      onSubmit={handleSubmit}
      className={formClasses}
    >
      <div className="m-search-bar__inner">
        <label htmlFor="aic-ct-search__input" className="sr-only">
          Search the collection
        </label>
        <input
          id="aic-ct-search__input"
          className="f-secondary"
          type="text"
          placeholder="Search by keyword, artist, or title"
          value={searchQuery}
          autoComplete="off"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />

        <button
          id="aic-ct-search__button"
          className="m-search-bar__submit"
          type="submit"
          aria-label="Search"
          aria-expanded="false"
          ref={searchButtonRef}
        >
          <svg aria-hidden="true" className="icon--search--24">
            <use xlinkHref="#icon--search--24"></use>
          </svg>
        </button>
        <button
          className="m-search-bar__clear"
          aria-label="Clear search"
          type="reset"
          onClick={() => {
            setSearchQuery("");
            setSearchResultItems(null);
            setActiveTheme(null);
            // Apply results for empty keyword search
            fetchData(createSearchUrl({ keywords: "" }));
            searchButtonRef.current.focus();
          }}
        >
          <svg aria-hidden="true" className="icon--close">
            <use xlinkHref="#icon--close"></use>
          </svg>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
