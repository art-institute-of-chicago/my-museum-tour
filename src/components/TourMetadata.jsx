import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

/**
 * TourMetadata
 * Title and description of the tour
 */

function TourMetadata() {
  const { tourTitle, setTourTitle, tourDescription, setTourDescription } =
    useContext(AppContext);

  return (
    <>
      <div>
        <label htmlFor="aic-ct-metadata__title">
          Tour Title{" "}
          <span>
            (255<span className="sr-only"> characters left</span>)
          </span>
        </label>
        <br />
        <input
          type="text"
          onChange={(e) => setTourTitle(e.target.value)}
          value={tourTitle}
          id="aic-ct-metadata__title"
        />
      </div>

      <div>
        <label htmlFor="aic-ct-metadata__description">
          Tour Description{" "}
          <span>
            (255<span className="sr-only"> characters left</span>)
          </span>
        </label>
        <br />
        <textarea
          id="aic-ct-metadata__description"
          onChange={(e) => setTourDescription(e.target.value)}
          rows="5"
          defaultValue={tourDescription}
        />
      </div>
    </>
  );
}

export default TourMetadata;
