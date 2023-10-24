import React, { useContext, useEffect, useState } from "react";
import TourItem from "./TourItem";
import { AppContext } from "../../contexts/AppContext";

/**
 * SearchResults
 */
function TourItems() {
  const { tourItems, navSearchButtonRef } = useContext(AppContext);
  const [shouldAssignFocus, setShouldAssignFocus] = useState({
    flag: false,
    id: null,
  });
  const [removeButtons, setRemoveButtons] = useState([]);

  // When tourItems change check if this item was removed
  // Focus will always need to be reassigned in some way in that instance
  useEffect(() => {
    if (shouldAssignFocus.flag) {
      if (!tourItems.length && navSearchButtonRef?.current) {
        // When there's no items in the tour, focus on the "no results" button
        navSearchButtonRef.current.focus();
      } else {
        // Otherwise focus on the element passed out by the removed item
        removeButtons
          .find((item) => item.id === shouldAssignFocus.id)
          .ref.current.focus();
      }

      setShouldAssignFocus(false);
    }
  }, [tourItems, shouldAssignFocus, removeButtons, navSearchButtonRef]);

  // Render the results if there are results
  return (
    <>
      {tourItems.length > 0 ? (
        <>
          <h2 id="aic-ct-tour__heading">Your tour</h2>
          <ul id="aic-ct-tour__results">
            {/* JSX cannot directly render a Map and it must be converted to an Array */}
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
      ) : (
        <div id="aic-ct-tour__no-items">
          You haven’t added any artworks to your tour yet
        </div>
      )}
    </>
  );
}

export default TourItems;
