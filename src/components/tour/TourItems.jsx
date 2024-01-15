import React, { useContext, useEffect, useState, useRef } from "react";
import TourItem from "./TourItem";
import { AppContext } from "../../contexts/AppContext";

/**
 * SearchResults
 */
function TourItems() {
  const { tourItems, headerNextButtonRef, setActiveNavPage, limits } =
    useContext(AppContext);
  const [shouldAssignFocus, setShouldAssignFocus] = useState({
    flag: false,
    id: null,
  });
  const [removeButtons, setRemoveButtons] = useState([]);

  const browseButtonRef = useRef(null);

  const handleBrowseClick = () => {
    setActiveNavPage(0);
    headerNextButtonRef.current.focus();
  };
  const handleFinishClick = () => {
    setActiveNavPage(2);
    headerNextButtonRef.current.focus();
  };

  // When tourItems change check if this item was removed
  // Focus will always need to be reassigned in some way in that instance
  useEffect(() => {
    if (shouldAssignFocus.flag) {
      if (!tourItems.length && browseButtonRef?.current) {
        // When there's no items in the tour, focus on the "no results" button
        browseButtonRef.current.focus();
      } else {
        // Otherwise focus on the element passed out by the removed item
        removeButtons
          .find((item) => item.id === shouldAssignFocus.id)
          .ref.current.focus();
      }

      setShouldAssignFocus(false);
    }
  }, [tourItems, shouldAssignFocus, removeButtons, browseButtonRef]);

  // Render the results if there are results
  return (
    <div className="aic-ct-tour">
      {tourItems.length > 0 && (
        <>
          <div className="aic-ct__core">
            <header className="aic-ct-section-header f-body">
              <h2 id="aic-ct-tour__heading" className="f-module-title-2">
                Artworks in your tour
              </h2>
            </header>
            <div className="f-body aic-ct-tour__intro">
              <p>
                To optimize your visit, we automatically arrange the order of
                your tour based on the location of the artwork in the museum.
              </p>
              {tourItems.length === 6 && (
                <p>
                  You&apos;ve added 6 artworks, the maximum number allowed.
                  Please remove one if you would like to include more artwork.
                </p>
              )}
            </div>
          </div>
          <ul id="aic-ct-tour__results">
            {tourItems.map((itemData, index) => (
              <TourItem
                key={itemData.id}
                setRemoveButtons={setRemoveButtons}
                itemData={itemData}
                itemIndex={index}
                shouldAssignFocus={shouldAssignFocus}
                setShouldAssignFocus={setShouldAssignFocus}
              />
            ))}
          </ul>
        </>
      )}
      <div className="aic-ct-tour__cta aic-ct-full-bleed">
        <div className="aic-ct-tour__cta-wrapper aic-ct-full-bleed__core">
          {tourItems.length > 0 && tourItems.length < 6 && (
            <>
              <p className="f-body">
                You&apos;ve added {tourItems.length} of the maximum{" "}
                {limits.items.max} artworks.
              </p>
              <div className="aic-ct-tour__cta-actions">
                <button
                  ref={browseButtonRef}
                  id="aic-ct-tour__cta-browse"
                  type="button"
                  className="f-buttons btn btn--secondary"
                  onClick={handleBrowseClick}
                >
                  Browse for more artworks
                </button>
                <button
                  type="button"
                  className="f-buttons btn btn--primary"
                  onClick={handleFinishClick}
                >
                  Finish creating tour
                </button>
              </div>
            </>
          )}
          {tourItems.length === 6 && (
            <>
              <p className="f-body">
                You&apos;ve added {tourItems.length} artworks, the maximum
                number allowed. Please remove one if you would like to include
                more artwork
              </p>
              <div className="aic-ct-tour__cta-actions">
                <button
                  type="button"
                  className="f-buttons btn btn--primary"
                  onClick={handleFinishClick}
                >
                  Finish creating tour
                </button>
              </div>
            </>
          )}
          {tourItems.length === 0 && (
            <>
              <p className="f-body">
                You haven&apos;t added any artworks to your tour yet
              </p>
              <div className="aic-ct-tour__cta-actions">
                <button
                  ref={browseButtonRef}
                  id="aic-ct-tour__cta-browse"
                  type="button"
                  className="f-buttons btn btn--secondary"
                  onClick={handleBrowseClick}
                >
                  Browse for more artworks
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TourItems;
