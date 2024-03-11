import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { SearchContext } from "../../contexts/SearchContext";
import { iiifUrl } from "../../utils";
import classNames from "classnames";
/**
 * SearchPreview
 */

function SearchPreview() {
  const { searchPreviewId, searchResultItems, searchPreviewRef } =
    useContext(SearchContext);
  const { iiifBaseUrl, tourItems, tourItemsDispatch, limits } =
    useContext(AppContext);
  const [inTour, setInTour] = useState(false);
  const [previewData, setPreviewData] = useState(null);

  const containerClassNames = classNames({
    "aic-ct-preview__content": true,
    "aic-ct-preview--loading": !previewData,
  });

  useEffect(() => {
    setPreviewData(
      searchResultItems.find((item) => item.id === searchPreviewId),
    );
  }, [searchPreviewId, searchResultItems]);

  const handleAddRemove = () => {
    // Remove the item if it existed before
    tourItemsDispatch({
      type: inTour ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: inTour ? previewData.id : previewData,
    });
    searchPreviewRef?.current?.close();
  };

  const handleClose = () => {
    // Close the modal
    searchPreviewRef?.current?.close();
  };

  // Check if this item is in the tour whenever the tour items change
  useEffect(() => {
    if (!previewData) {
      return;
    }
    // loop tourItems array to see if this item is in the tour
    setInTour(tourItems.find((item) => item.id === previewData.id));
  }, [tourItems, previewData]);

  if (tourItems.length < 6 || inTour) {
    return (
      <div className={containerClassNames} id="aic-ct-preview__content">
        {previewData ? (
          <>
            <div className="aic-ct-preview__header aic-ct-preview__core">
              <button
                id="aic-ct-preview__close"
                className="btn btn--icon btn--transparent aic-ct-preview__close"
                type="button"
                aria-label="Close"
                onClick={handleClose}
              >
                <svg className="icon--close--24" aria-hidden="true">
                  <use xlinkHref="#icon--close--24"></use>
                </svg>
              </button>
            </div>

            <div className="aic-ct-preview__image">
              <img
                src={iiifUrl(iiifBaseUrl, previewData.image_id, 680, 680)}
                width={previewData.thumbnail.width}
                height={previewData.thumbnail.height}
                alt={previewData.thumbnail.alt_text || ""}
              />
            </div>

            <div className="aic-ct-preview__core">
              <div className="aic-ct-preview__details">
                <h3 className="aic-ct-preview__title f-headline-editorial">
                  {previewData.title}
                  {previewData.date_display && (
                    <>
                      ,{" "}
                      <span className="aic-ct-preview__date f-list-4">
                        {previewData.date_display}
                      </span>
                    </>
                  )}
                </h3>
                {previewData.artist_title && (
                  <p className="aic-ct-preview__artist f-subheading-1">
                    {previewData.artist_title}
                  </p>
                )}
              </div>

              <div className="aic-ct-preview__links">
                {/*
                  This may need more extensive checking for accessibility
                  It's been modelled on the Button Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/button/
                  */}
                {/* If the item isn't in the tour and the limit isn't reached: show add */}
                {/* Otherwise don't show a button */}
                {/* Needs to be done in a way that doesn't remove this button and lose focus */}
                {tourItems.length < 6 || inTour ? (
                  <button
                    id={`aic-ct-preview__action-button-${previewData.id}`}
                    className="btn f-buttons aic-ct-preview__action-button"
                    type="button"
                    onClick={handleAddRemove}
                    aria-pressed={inTour ? "true" : "false"}
                    aria-label="Toggle from your tour"
                  >
                    {inTour ? "Remove from Your Tour" : "Add to Your Tour"}
                  </button>
                ) : (
                  <p className="f-body">
                    You have already added {limits.items.max} artworks, the
                    maximum number allowed. Please remove one if you would like
                    to include this artwork.
                  </p>
                )}
              </div>

              {(previewData.short_description || previewData.description) && (
                <div className="aic-ct-preview__description">
                  <h3 className="aic-ct-preview__description-title f-module-title-2">
                    Artwork description
                  </h3>
                  {/* N.b. It appears short_description lacks wrapping html or formatting,
                  whereas full descriptions have this */}
                  <div
                    className="f-body"
                    dangerouslySetInnerHTML={{
                      __html: previewData.short_description
                        ? previewData.short_description
                        : previewData.description,
                    }}
                  ></div>
                  <a
                    className="aic-ct-preview__learn-more f-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.artic.edu/artworks/${previewData.id}`}
                  >
                    Learn more&nbsp;
                    <svg aria-hidden="true" className="icon--new-window">
                      <use xlinkHref="#icon--new-window"></use>
                    </svg>
                  </a>
                </div>
              )}

              <button
                className="btn btn--transparent btn--w-icon f-buttons aic-ct-preview__close-trans"
                type="button"
                onClick={handleClose}
              >
                <svg className="icon--close--24" aria-hidden="true">
                  <use xlinkHref="#icon--close--24"></use>
                </svg>
                Close and go back to results
              </button>
            </div>
          </>
        ) : (
          <div className="aic-ct-preview__core aic-ct-loader f-body">
            <p>Loading...</p>
            <div className="loader"></div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={containerClassNames} id="aic-ct-preview__content">
        <>
          <div className="aic-ct-preview__header aic-ct-preview__core">
            <button
              id="aic-ct-preview__close"
              className="btn btn--icon btn--transparent aic-ct-preview__close"
              type="button"
              aria-label="Close"
              onClick={handleClose}
            >
              <svg className="icon--close--24" aria-hidden="true">
                <use xlinkHref="#icon--close--24"></use>
              </svg>
            </button>
          </div>

          <div className="aic-ct-preview__core">
            <p className="f-body">
              You have already added 6 artworks, the maximum number allowed.
              Please remove one if you would like to choose a different work.
            </p>
          </div>
          <br />
        </>
      </div>
    );
  }
}

export default SearchPreview;
