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
  const handleClose = useCallback(
    (e) => {
      // Dual use for this function during the close event and the click event
      if (
        e.type === "close" ||
        (searchPreviewRef?.current?.open &&
          e.target === searchPreviewRef?.current)
      ) {
        // Close the window if open -- does nothing on close event
        searchPreviewRef.current.close();
        setSearchPreviewId(null);

        document.documentElement.scrollTop = scrollY;
        document.documentElement.classList.remove(
          "s-body-locked",
          "s-body-locked--ct",
        );
      }
    },
    [setSearchPreviewId, scrollY, searchPreviewRef],
  );

  const handlePageUpdated = useCallback(() => {
    const evt = new Event("page:updated", { bubbles: true });
    setTimeout(() => {
      document.dispatchEvent(evt);
    }, 0);
  });

  useEffect(() => {
    const ref = searchPreviewRef.current;

    if (ref) {
      ref.addEventListener("close", handleClose);
      ref.addEventListener("click", handleClose);
    }
    return () => {
      if (ref) {
        ref.removeEventListener("close", handleClose);
        ref.removeEventListener("click", handleClose);
      }
    };
  }, [searchPreviewRef, handleClose]);

  // This does dispatch multiple times, but it doesn't seem to cause any issues
  // Might consider debouncing this
  useEffect(() => {
    // Relayout pinboard when results change
    handlePageUpdated();
  }, [searchResultItems, handlePageUpdated]);

  // Safari in particular (but potentially unnoticed in other browsers)
  // Would sometimes fire page:updated, and not be picked up by the pinboard listener
  // Possibly some kind of race condition?
  // Safest way to have this always fire regardless is when page finishes loading.
  // (in addition to when search results change)
  useEffect(() => {
    window.addEventListener("load", handlePageUpdated);
    return () => {
      window.removeEventListener("load", handlePageUpdated);
    };
  }, [handlePageUpdated]);

  // Catch all for no results, error, and loading states
  if (!searchResultItems && !searchFetching && !searchError) {
    return null;
  }

  return (
    <>
      <div className="aic-ct-search-results">
        {searchFetching && (
          // Render only the loading message while fetching
          <div
            id="aic-ct-search-results__loading"
            className="aic-ct-search-results__message aic-ct-loader f-body"
          >
            <p>Loading...</p>
            <div className="loader"></div>
          </div>
        )}
        {searchError && (
          // Render only the error message if there is an error
          <div
            id="aic-ct-search-results__error"
            className="aic-ct-search-results__message f-body"
          >
            <p>{searchError}</p>
          </div>
        )}
        {searchResultItems?.length === 0 && !searchFetching && !searchError && (
          // Render only a no results message if there are no results
          <div
            id="aic-ct-search-results__no-results"
            className="aic-ct-search-results__message f-body"
          >
            <p>Sorry, we couldn’t find any artworks matching your search. </p>
          </div>
        )}
        {searchResultItems?.length > 0 && !searchFetching && !searchError && (
          // Render the results if there are results
          <>
            <header className="aic-ct-section-header f-body">
              <h2 className="f-module-title-2">Browse Artworks</h2>
            </header>
            <p className="aic-ct-pre-result-text f-body">
              These artworks are currently on view and available for your tour.
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
      {/* For description text when result is in tour */}
      <p className="u-hide" id="aic-ct-search__in-your-tour">
        This object is in your tour{" "}
      </p>
    </>
  );
}

export default SearchResults;
