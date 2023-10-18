import React, { useContext, useRef } from "react";
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
  const titleCountRef = useRef(null);
  const descriptionCountRef = useRef(null);

  // Update the state when inputs change
  const handleChange = ({ setter, countRef, e }) => {
    // Let AT know things are in progress to limit excessive announcements while typing
    countRef.current.ariaBusy = true;
    setter(e.target.value);
    // Let AT know things are done
    countRef.current.ariaBusy = false;
  };

  return (
    <>
      <div>
        <label htmlFor="aic-ct-metadata__title">
          Tour Title{" "}
          <span ref={titleCountRef} aria-live="polite">
            ({charactersRemaining(tourTitle, maxLength)}
            <span className="sr-only"> characters remaining</span>)
          </span>
        </label>
        <br />
        <input
          type="text"
          onChange={(e) =>
            handleChange({
              setter: setTourTitle,
              countRef: titleCountRef,
              e,
            })
          }
          value={tourTitle}
          id="aic-ct-metadata__title"
          maxLength={maxLength}
        />
      </div>

      <div>
        <label htmlFor="aic-ct-metadata__description">
          Tour Description{" "}
          <span ref={descriptionCountRef} aria-live="polite">
            ({charactersRemaining(tourDescription, maxLength)}
            <span className="sr-only"> characters remaining</span>)
          </span>
        </label>
        <br />
        <textarea
          id="aic-ct-metadata__description"
          onChange={(e) =>
            handleChange({
              setter: setTourDescription,
              countRef: descriptionCountRef,
              e,
            })
          }
          rows="5"
          defaultValue={tourDescription}
          maxLength={maxLength}
        />
      </div>
    </>
  );
}

export default TourMetadata;
