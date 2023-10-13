import React, { useState, useEffect } from "react";
import useFetchItems from "../hooks/useFetchItems";

function SearchBar(props) {
  const {
    searchQuery,
    setSearchQuery,
    setSearchResultItems,
    setSearchError,
    setSearchFetching,
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
  }, [data, setSearchResultItems]);

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
          setInputValue(e.target.value);
        }}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
