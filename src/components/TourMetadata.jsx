import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { charactersRemaining } from "../utils";

/**
 * TourMetadata
 * Title and description of the tour
 */

function TourMetadata() {
  const { tourTitle, setTourTitle, tourDescription, setTourDescription } =
    useContext(AppContext);
  // You may wish to make this smaller for debugger
  const maxLength = 255;

  return (
    <>
      <div>
        <label htmlFor="aic-ct-metadata__title">
          Tour Title{" "}
          <span>
            ({charactersRemaining(tourTitle, maxLength)}
            <span className="sr-only"> characters remaining</span>)
          </span>
        </label>
        <br />
        <input
          type="text"
          onChange={(e) => setTourTitle(e.target.value)}
          value={tourTitle}
          id="aic-ct-metadata__title"
          maxLength={maxLength}
        />
      </div>

      <div>
        <label htmlFor="aic-ct-metadata__description">
          Tour Description{" "}
          <span>
            ({charactersRemaining(tourDescription, maxLength)}
            <span className="sr-only"> characters remaining</span>)
          </span>
        </label>
        <br />
        <textarea
          id="aic-ct-metadata__description"
          onChange={(e) => setTourDescription(e.target.value)}
          rows="5"
          defaultValue={tourDescription}
          maxLength={maxLength}
        />
      </div>
    </>
  );
}

export default TourMetadata;
