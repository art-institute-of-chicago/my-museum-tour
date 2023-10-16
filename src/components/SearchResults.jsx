import React, { useContext } from "react";
import SearchResultItem from "./SearchResultItem";
import { AppContext } from "../contexts/AppContext";
import { SearchContext } from "../contexts/SearchContext";

function SearchResults() {
  const { iiifBaseUrl } = useContext(AppContext);
  const { searchError, searchFetching, searchResultItems } =
    useContext(SearchContext);

  // Render only the loading message while fetching
  if (searchFetching) {
    return <div id="aic-ct-search__loading">Loading...</div>;
  }

  // Render only the error message if there is an error
  if (searchError) {
    return <div id="aic-ct-search__error">{searchError}</div>;
  }

  // Render only a no results message if there are no results
  if (searchResultItems?.length === 0) {
    return <div id="aic-ct-search__no-results">No results found</div>;
  }

  // Render the results if there are results
  if (searchResultItems?.length > 0) {
    return (
      <ul id="aic-ct-search__results">
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
