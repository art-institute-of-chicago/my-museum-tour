import React, { useContext, useEffect, useRef, useCallback } from "react";
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
    activeTheme,
    searchQuery,
  } = useContext(SearchContext);
  const { scrollY } = useContext(AppContext);
  const pinboardRef = useRef(null);

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
    // The zero timeout should defer this to the back of the event loop
    // Helping to ensure it runs after the DOM has been updated
    setTimeout(() => {
      document.dispatchEvent(evt);
    }, 0);
  }, []);

  // When the search results change, if the ref has a value,
  // And all other conditions which would render the pinboard are met
  // Then dispatch the event to update the pinboard
  // This was refactored from a useEffect on just searchResultItems
  // And should help avoid having to add a delay to have the event dispatch after the DOM updates
  // If this ever proves unreliable, consider adding a delay on the dispatch
  useEffect(() => {
    if (
      pinboardRef.current &&
      searchResultItems?.length > 0 &&
      !searchFetching &&
      !searchError
    ) {
      handlePageUpdated();
    }
  }, [
    pinboardRef,
    searchResultItems,
    searchFetching,
    searchError,
    handlePageUpdated,
  ]);

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
            <p className="aic-ct-pre-result-text f-body">
              The artworks below are currently on view and available to choose
              for your tour.
            </p>
            <ul
              ref={pinboardRef}
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

      {/* For screenreader feedback on search */}
      <p className="sr-only" aria-live="polite">
        {searchFetching
          ? "Loading"
          : activeTheme
          ? `Showing results for ${activeTheme}`
          : searchQuery
          ? `Showing results for ${searchQuery}`
          : "Showing default results"}
      </p>
    </>
  );
}

export default SearchResults;
