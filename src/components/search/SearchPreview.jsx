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
  const { iiifBaseUrl, tourItems, tourItemsDispatch } = useContext(AppContext);
  const [inTour, setInTour] = useState(false);
  const [itemData, setItemData] = useState(null);

  const containerClassNames = classNames({
    "aic-ct-preview__content": true,
    "aic-ct-preview--loading": !itemData,
  });

  useEffect(() => {
    setItemData(searchResultItems.find((item) => item.id === searchPreviewId));
  }, [searchPreviewId, searchResultItems]);

  const handleAddRemove = () => {
    // Remove the item if it existed before
    tourItemsDispatch({
      type: inTour ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: inTour ? itemData.id : itemData,
    });
    searchPreviewRef.current.close();
  };

  const handleClose = () => {
    // Close the modal
    searchPreviewRef.current.close();
  };

  // Whenever the tourItems map changes, update the inTour state for this item
  useEffect(() => {
    if (!itemData) {
      return;
    }
    // loop tourItems array to see if this item is in the tour
    setInTour(tourItems.find((item) => item.id === itemData.id));
  }, [tourItems, itemData]);

  return (
    <div className={containerClassNames} id="aic-ct-preview__content">
      {itemData ? (
        <>
          <div className="aic-ct-preview__header aic-ct-preview__padded">
            <button
              className="btn btn--icon btn--transparent aic-ct-preview__close"
              type="button"
              aria-label="Close"
              onClick={handleClose}
            >
              <svg className="icon--close--24" aria-hidden="true">
                <use xlinkHref="#icon--close--24"></use>
              </svg>
            </button>
            <h2 className="f-module-title-2">Artwork details</h2>
          </div>

          <div className="aic-ct-preview__image">
            <img
              src={iiifUrl(iiifBaseUrl, itemData.image_id, 680, 680)}
              width={itemData.thumbnail.width}
              height={itemData.thumbnail.height}
              alt={itemData.thumbnail.alt_text || ""}
            />
          </div>

          <div className="aic-ct-preview__padded">
            <div className="aic-ct-preview__details">
              <h3 className="aic-ct-preview__title f-headline-editorial">
                {itemData.title}
                {itemData.date_display && (
                  <>
                    ,{" "}
                    <span className="aic-ct-preview__date f-list-4">
                      {itemData.date_display}
                    </span>
                  </>
                )}
              </h3>
              {itemData.artist_title && (
                <p className="aic-ct-preview__artist f-subheading-1">
                  {itemData.artist_title}
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
              {(tourItems.length < 6 || inTour) && (
                <button
                  className="btn f-buttons aic-ct-preview__action-button"
                  type="button"
                  onClick={handleAddRemove}
                  aria-pressed={inTour ? "true" : "false"}
                  aria-label="Toggle from your tour"
                >
                  {inTour ? "Remove from your tour" : "Add to your tour"}
                </button>
              )}
              <a
                className="f-link"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.artic.edu/artworks/${itemData.id}`}
              >
                View full artwork page&nbsp;
                <svg aria-hidden="true" className="icon--new-window">
                  <use xlinkHref="#icon--new-window"></use>
                </svg>
              </a>
            </div>

            {/* TODO: Update this to "short description"? When we have that field */}
            {itemData.description && (
              <div className="aic-ct-preview__description">
                <h3 className="aic-ct-preview__description-title f-module-title-2">
                  Artwork description
                </h3>
                <div
                  className="f-body"
                  dangerouslySetInnerHTML={{ __html: itemData.description }}
                ></div>
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
              Close and back to results
            </button>
          </div>
        </>
      ) : (
        <div className="aic-ct-preview__padded">
          Loading... <span className="loader"></span>
        </div>
      )}
    </div>
  );
}

export default SearchPreview;
