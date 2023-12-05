import React, { useContext, useEffect, useCallback } from "react";
import SearchResultItem from "./SearchResultItem";
import SearchPreview from "./SearchPreview";
import { AppContext } from "../../contexts/AppContext";
import { SearchContext } from "../../contexts/SearchContext";
/**
 * SearchResults
 */
function SearchResults() {
  const {
    searchError,
    searchFetching,
    searchResultItems,
    searchPreviewRef,
    setSearchPreviewId,
  } = useContext(SearchContext);
  const { scrollY } = useContext(AppContext);

  // Store a reference to the event listener callback to remove it later
  const handleClose = useCallback(() => {
    setSearchPreviewId(null);
    document.documentElement.scrollTop = scrollY;
    document.documentElement.classList.remove("s-body-locked");
  }, [setSearchPreviewId, scrollY]);

  useEffect(() => {
    const ref = searchPreviewRef.current;
    if (ref) {
      ref.addEventListener("close", handleClose);
    }
    return () => {
      if (ref) {
        ref.removeEventListener("close", handleClose);
      }
    };
  }, [searchPreviewRef, handleClose]);

  // This does dispatch multiple times, but it doesn't seem to cause any issues
  // Might consider debouncing this
  useEffect(() => {
    const evt = new Event("page:updated", { bubbles: true });
    setTimeout(() => {
      document.dispatchEvent(evt);
    }, 0);
  }, [searchResultItems]);

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
    return (
      <div id="aic-ct-search__no-results">
        Sorry, we couldn’t find any results matching your criteria
      </div>
    );
  }

  // Render the results if there are results
  if (searchResultItems?.length > 0) {
    return (
      <>
        <header className="aic-ct-section-header">
          <h2 className="f-module-title-2">Choose artworks</h2>
          <span className="aic-ct-item-count">{searchResultItems.length}</span>
        </header>
        <p className="f-body">
          Browse these artworks currently on view and available for your tour.
        </p>
        <ul
          id="aic-ct-search__results"
          className="o-pinboard o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--3-col@medium o-pinboard--4-col@large o-pinboard--4-col@xlarge"
          data-pinboard-option-layout="o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--2-col@medium o-pinboard--3-col@large o-pinboard--3-col@xlarge"
          data-pinboard-maintain-order="false"
          data-behavior="pinboard"
        >
          {searchResultItems.map((itemData) => (
            <SearchResultItem key={itemData.id} itemData={itemData} />
          ))}
        </ul>
        <dialog
          ref={searchPreviewRef}
          id="aic-ct-search-preview"
          onClose={handleClose}
        >
          <SearchPreview />
        </dialog>
      </>
    );
  }

  // Catch all
  return null;
}

export default SearchResults;
