import { useEffect, useState } from "react";

/**
 * useFetch
 * Custom hook for fetching data from the API
 * @returns {object} { data, fetching, error, fetchData, resetState }
 */
const useFetch = () => {
  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [abortController, setAbortController] = useState(null);

  // Reset the state to the initial values
  const resetState = () => {
    setData(null);
    setFetching(false);
    setError(null);
    setAbortController(null);
  };

  /**
   * fetchData
   * Fetch data and update state
   * @param {string|URL} url
   * @returns
   */
  const fetchData = async (url) => {
    setFetching(true);
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
      setData(data);
      setFetching(false);
    } catch (error) {
      // Explicity ignore AbortError's as they aren't really errors as far as we're concerned
      if (error.name === "AbortError") {
        resetState();
        return;
      }

      setError("Error fetching results");
      setFetching(false);
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

  return { data, fetching, error, fetchData, resetState };
};

export default useFetch;
