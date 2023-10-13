import React from "react";

function SearchBar(props) {
  const { setSearchQuery } = props;

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form role="search" aria-label="Objects for your tour">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
