import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

/**
 * TourMetadata
 * Title and description of the tour
 */

function TourMetadata() {
  return (
    <>
      <div>
        <label htmlFor="aic-ct-metadata__title">Tour Title</label>
        <br />
        <input type="text" id="aic-ct-metadata__title" />
      </div>

      <div>
        <label htmlFor="aic-ct-metadata__description">Tour Description</label>
        <br />
        <textarea id="aic-ct-metadata__description" rows={5} />
      </div>
    </>
  );
}

export default TourMetadata;
