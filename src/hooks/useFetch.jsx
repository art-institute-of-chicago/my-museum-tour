import { useEffect, useContext, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";

/**
 * @typedef {object} useFetchOptions
 * @property {string} dataSelector - The key to use when setting the data state
 * @property {string} paginationSelector - The key to use when setting the pagination state
 */

/**
 * useFetch
 * Custom hook for fetching data from the API
 * @param {useFetchOptions} options
 * @returns {object} { fetchData, resetState }
 */
const useFetch = (options) => {
  const [abortController, setAbortController] = useState(null);
  const {
    setSearchError,
    setSearchFetching,
    setSearchResultItems,
    setPagination,
  } = useContext(SearchContext);
  const { dataSelector = "data", paginationSelector = "pagination" } =
    options || {};

  // Reset the state to the initial values
  const resetState = () => {
    setSearchResultItems(null);
    setPagination(null);
    setSearchFetching(false);
    setSearchError(null);
    setAbortController(null);
  };

  /**
   * fetchData
   * Fetch data and update state
   * @param {string|URL} url
   * @returns
   */
  const fetchData = async (url) => {
    setSearchFetching(true);
    // Provide an AbortController to cancel the fetch request
    // if this function runs again before the request completes

    // Note that storing this in a variable bypasses race conditions
    // Where the state might not be updated by the time we need to use it
    // Using a ref would also work, but this is nicer
    const newAbortController = new AbortController();
    setAbortController(newAbortController);

    try {
      const res = await fetch(url, { signal: newAbortController.signal });
      const data = await res.json();
      setSearchResultItems(dataSelector ? data[dataSelector] : data);
      setPagination(paginationSelector ? data[paginationSelector] : {});
      setSearchError(null);
      setSearchFetching(false);
    } catch (error) {
      // Explicity ignore AbortError's as they aren't really errors as far as we're concerned
      if (error.name === "AbortError") {
        resetState();
        return;
      }

      setSearchError("Error fetching results");
      setSearchFetching(false);
    }
  };

  useEffect(() => {
    // setController is called when a new fetch request is made
    // Triggering this effect which will abort the previous request
    // Remember: the callback runs before the next render
    const prevAbortController = abortController;

    return () => {
      if (prevAbortController) {
        prevAbortController.abort();
      }
    };
  }, [abortController]);

  return { fetchData, resetState };
};

export default useFetch;
