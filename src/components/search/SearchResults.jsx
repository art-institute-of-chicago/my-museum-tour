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

  // Catch all for no results, error, and loading states
  if (!searchResultItems && !searchFetching && !searchError) {
    return null;
  }

  return (
    <div className="aic-ct-search-results">
      {searchFetching && (
        // Render only the loading message while fetching
        <div id="aic-ct-search-results__loading">Loading...</div>
      )}
      {searchError && (
        // Render only the error message if there is an error
        <div id="aic-ct-search-results__error">{searchError}</div>
      )}
      {searchResultItems?.length === 0 && !searchFetching && !searchError && (
        // Render only a no results message if there are no results
        <div id="aic-ct-search-results__no-results">
          Sorry, we couldn’t find any results matching your criteria
        </div>
      )}
      {searchResultItems?.length > 0 && !searchFetching && !searchError && (
        // Render the results if there are results
        <>
          <header className="aic-ct-section-header f-body">
            <h2 className="f-module-title-2">Choose artworks</h2>
            <span className="aic-ct-item-count aic-ct-item-count--body">
              {searchResultItems.length}
            </span>
          </header>
          <p className="aic-ct-pre-result-text f-body">
            Browse these artworks currently on view and available for your tour.
          </p>
          <ul
            id="aic-ct-search-results__items"
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
      )}
    </div>
  );
}

export default SearchResults;
