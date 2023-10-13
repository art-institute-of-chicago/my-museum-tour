import { useEffect, useState } from "react";

const useFetchItems = (keywords) => {
  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Build the API request URL
    // I've broken this up to make it easer to reason about and manipulate
    const apiUrl = new URL("https://api.artic.edu/api/v1/artworks/search");
    apiUrl.searchParams.set("query[bool][must][][term][is_on_view]", "true");
    apiUrl.searchParams.set(
      "query[bool][must][][exists][field]",
      "description",
    );
    apiUrl.searchParams.set(
      "query[bool][should][][exists][field]",
      "description",
    );
    apiUrl.searchParams.set(
      "query[bool][should][][exists][field]",
      "subject_id",
    );
    apiUrl.searchParams.set("query[bool][should][][exists][field]", "style_id");
    apiUrl.searchParams.set("query[bool][should][][term][is_boosted]", "true");
    apiUrl.searchParams.set("query[bool][minimum_should_match]", "1");
    apiUrl.searchParams.set("fields", "true");
    apiUrl.searchParams.set("limit", "10");
    apiUrl.searchParams.set("q", keywords);

    // Provide an AbortController to cancel the fetch request if the keywords change
    const abortController = new AbortController();
    const signal = abortController.signal;

    // Empty keywords should not trigger a fetch or return results
    // Note: HTML validation should mean this never fires
    if (keywords === "") {
      setData(null);
      setFetching(false);
      setError(null);
      return;
    }

    async function getData() {
      try {
        const res = await fetch(apiUrl, { signal });
        const data = await res.json();
        setData(data);
        setFetching(false);
      } catch (error) {
        // Explicity ignore AbortError's as they aren't really errors as far as we're concerned
        if (error.name === "AbortError") return;

        setError(error.message);
        setFetching(false);
      }
    }
    setFetching(true);
    getData();

    // Cancel the fetch request if the keywords change
    return () => {
      abortController.abort();
    };
  }, [keywords]);

  return { data, error, fetching };
};

export default useFetchItems;
