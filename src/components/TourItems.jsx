import React, { useContext } from "react";
import TourItem from "./TourItem";
import { AppContext } from "../contexts/AppContext";

/**
 * SearchResults
 */
function TourItems() {
  const { tourItems } = useContext(AppContext);

  // Render the results if there are results
  return (
    <>
      {tourItems.length > 0 && (
        <>
          <h2 id="aic-ct-tour__heading">Your tour</h2>
          <ul id="aic-ct-tour__results">
            {/* JSX cannot directly render a Map and it must be converted to an Array */}
            {tourItems.map((itemData) => (
              <TourItem key={itemData.id} itemData={itemData} />
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default TourItems;
