import React, { useContext } from "react";
import TourItem from "./TourItem";
import { AppContext } from "../contexts/AppContext";

/**
 * SearchResults
 */
function TourItems() {
  const { tourItems } = useContext(AppContext);

  window.tourItems = tourItems;

  // Render the results if there are results
  return (
    <>
      {tourItems.size > 0 && (
        <>
          <h2>Your tour</h2>
          <ul id="aic-ct-tour__results">
            {/* JSX cannot directly render a Map and it must be converted to an Array */}
            {Array.from(tourItems).map(([id, itemData]) => (
              <TourItem key={id} itemData={itemData} />
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default TourItems;
