import React, { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import useCappedInput from "../../hooks/useCappedInput";

/**
 * TourMetadata
 * Title and description of the tour
 */

function TourMetadata() {
  const { tourTitle, setTourTitle, tourDescription, setTourDescription } =
    useContext(AppContext);
  // You may wish to make this smaller for debugger
  const cappedTitle = useCappedInput(tourTitle, 255);
  const cappedDescription = useCappedInput(tourDescription, 255);

  // Update tourTitle and tourDescription when cappedTitle and cappedDescription change
  useEffect(() => {
    setTourTitle(cappedTitle.value);
  }, [cappedTitle, setTourTitle]);

  useEffect(() => {
    setTourDescription(cappedDescription.value);
  }, [cappedDescription, setTourDescription]);

  return (
    <>
      <div>
        <label htmlFor="aic-ct-metadata__title">
          Tour Title{" "}
          <span ref={cappedTitle.countRef} aria-live="polite">
            ({cappedTitle.charsRemaining}
            <span className="sr-only"> characters remaining</span>)
          </span>
        </label>
        <br />
        <input
          type="text"
          onChange={cappedTitle.onChange}
          value={cappedTitle.value}
          id="aic-ct-metadata__title"
          maxLength={cappedTitle.maxLength}
          required
        />
      </div>

      <div>
        <label htmlFor="aic-ct-metadata__description">
          Tour Description{" "}
          <span ref={cappedDescription.countRef} aria-live="polite">
            ({cappedDescription.charsRemaining}
            <span className="sr-only"> characters remaining</span>)
          </span>
        </label>
        <br />
        <textarea
          id="aic-ct-metadata__description"
          onChange={cappedDescription.onChange}
          rows="5"
          value={cappedDescription.value}
          maxLength={cappedDescription.maxLength}
        />
      </div>
    </>
  );
}

export default TourMetadata;
