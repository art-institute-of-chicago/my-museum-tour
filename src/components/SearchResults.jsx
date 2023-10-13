import React from "react";
import SearchResultItem from "./SearchResultItem";
import SearchLoading from "./SearchLoading";

function SearchResults(props) {
  const { searchError, searchFetching, searchResultItems, iiifBaseUrl } = props;

  // Render only the loading message while fetching
  if (searchFetching) {
    return <SearchLoading />;
  }

  // Render only the error message if there is an error
  if (searchError) {
    return <div>{searchError}</div>;
  }

  // Render only a no results message if there are no results
  if (searchResultItems?.length === 0) {
    return <div>No results found</div>;
  }

  // Render the results if there are results
  if (searchResultItems?.length > 0) {
    return (
      <ul>
        {searchResultItems.map((item) => (
          <SearchResultItem
            key={item.id}
            item={item}
            iiifBaseUrl={iiifBaseUrl}
          />
        ))}
      </ul>
    );
  }

  // Catch all
  return null;
}

export default SearchResults;
