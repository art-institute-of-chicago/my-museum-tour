import React, { useContext, useEffect, useRef, useState } from "react";
import TourItem from "./TourItem";
import { AppContext } from "../contexts/AppContext";

/**
 * SearchResults
 */
function TourItems() {
  const { tourItems, setActiveNavPage } = useContext(AppContext);
  const [shouldAssignFocus, setShouldAssignFocus] = useState({
    flag: false,
    id: null,
  });
  const [removeButtons, setRemoveButtons] = useState([]);
  const noResultButtonRef = useRef(null);

  // When tourItems change check if this item was removed
  // Focus will always need to be reassigned in some way in that instance
  useEffect(() => {
    if (shouldAssignFocus.flag) {
      if (noResultButtonRef?.current) {
        // When there's no items in the tour, focus on the "no results" button
        noResultButtonRef.current.focus();
      } else {
        // Otherwise focus on the element passed out by the removed item
        removeButtons
          .find((item) => item.id === shouldAssignFocus.id)
          .ref.current.focus();
      }

      setShouldAssignFocus(false);
    }
  }, [tourItems, shouldAssignFocus, removeButtons]);

  // Render the results if there are results
  return (
    <>
      {tourItems.length > 0 ? (
        <>
          <h2 id="aic-ct-tour__heading">Your tour</h2>
          <ul id="aic-ct-tour__results">
            {/* JSX cannot directly render a Map and it must be converted to an Array */}
            {tourItems.map((itemData) => (
              <TourItem
                key={itemData.id}
                setRemoveButtons={setRemoveButtons}
                itemData={itemData}
                shouldAssignFocus={shouldAssignFocus}
                setShouldAssignFocus={setShouldAssignFocus}
              />
            ))}
          </ul>
        </>
      ) : (
        <div id="aic-ct-tour__no-items">
          You haven’t added any items to your tour yet
          <button
            ref={noResultButtonRef}
            id="aic-ct-tour__no-items-search-button"
            type="button"
            onClick={() => {
              setActiveNavPage(0);
            }}
          >
            Search
          </button>
        </div>
      )}
    </>
  );
}

export default TourItems;
