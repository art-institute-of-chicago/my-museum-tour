import { useEffect, useState } from "react";

/**
 * @typedef {object} useFetchOptions
 * @property {string} dataSubSelector - The key to use when setting the data state
 * @property {function} dataSetter - Function to call when setting the data state
 * @property {string} paginationSelector - The key to use when setting the pagination state
 * @property {function} paginationSetter - Function to call when setting the pagination state
 * @property {function} fetchingSetter - Function to call when setting the fetching state
 * @property {function} errorSetter - Function to call when setting the error state
 */

/**
 * useFetch
 * Custom hook for fetching data from the API
 * @param {useFetchOptions} options
 * @returns {object} { data, pagination, fetching, error, fetchData, resetState }
 */
const useFetch = (options) => {
  const [data, setData] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [abortController, setAbortController] = useState(null);
  const {
    dataSubSelector,
    dataSetter,
    paginationSelector,
    paginationSetter,
    fetchingSetter,
    errorSetter,
  } = options || {};

  // Reset the state to the initial values
  const resetState = () => {
    setData(null);
    setPagination(null);
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
      setData(dataSubSelector ? data[dataSubSelector] : data);
      setPagination(paginationSelector ? data[paginationSelector] : {});
      setError(null);
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

  useEffect(() => {
    if (!dataSetter) return;
    dataSetter(data);
  }, [data, dataSetter]);

  useEffect(() => {
    if (!paginationSetter) return;
    paginationSetter(pagination);
  }, [pagination, paginationSetter]);

  useEffect(() => {
    if (!errorSetter) return;
    errorSetter(error);
  }, [error, errorSetter]);

  useEffect(() => {
    if (!fetchingSetter) return;
    fetchingSetter(fetching);
  }, [fetching, fetchingSetter]);

  return { data, pagination, fetching, error, fetchData, resetState };
};

export default useFetch;
