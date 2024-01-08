import React, { useContext, useEffect, useRef, useMemo } from "react";
import { iiifUrl } from "../../utils";
import { AppContext } from "../../contexts/AppContext";
import useCappedInput from "../../hooks/useCappedInput";
import PropTypes from "prop-types";

/**
 * TourItem
 */
function TourItem(props) {
  const { itemData, itemIndex, setShouldAssignFocus, setRemoveButtons } = props;
  const { iiifBaseUrl, tourItems, tourItemsDispatch, limits } =
    useContext(AppContext);
  const buttonRef = useRef(null);

  const cappedNote = useCappedInput({
    initialValue: tourItems[itemIndex]?.objectNote,
    maxLength: limits.objectNote,
  });

  // payload needs to be memoized so that it doesn't change on every render
  // This avoids an infinite loop when paired with the UPDATE_NOTE action
  const memoizedNotePayload = useMemo(
    () => ({
      id: itemData.id,
      objectNote: cappedNote.value,
    }),
    [itemData.id, cappedNote.value],
  );

  const handleClick = () => {
    // Remove the item from the tour
    tourItemsDispatch({
      type: "REMOVE_ITEM",
      payload: itemData.id,
    });
  };

  // Update a note on an item when it changes
  useEffect(() => {
    tourItemsDispatch({
      type: "UPDATE_NOTE",
      payload: memoizedNotePayload,
    });
  }, [memoizedNotePayload, tourItemsDispatch]);

  // When tourItems change check if this item was removed
  useEffect(() => {
    // This needs to be defined outside of the callback so that it can be used in the cleanup function
    const ref = buttonRef.current;

    return () => {
      // Infer an item was removed and that focus should be reassigned if the remove button has focus
      // This is more likely to be the case than comparing the length of the tourItems array
      // as items can be toggled from the search screen
      if (document.activeElement === ref) {
        if (tourItems.length > 1) {
          // Calculate which the next item to focus on should be using the id
          // This should be the item that was after the one that was removed (or the last item)
          tourItems.find((item, index) => {
            if (item.id === itemData.id) {
              setShouldAssignFocus({
                flag: true,
                id: tourItems[
                  index !== tourItems.length - 1 ? index + 1 : index - 1
                ].id,
              });
            }
          });
        } else {
          // Focus on the "no results" button
          setShouldAssignFocus({
            flag: true,
            id: null,
          });
        }
      }
    };
  }, [tourItems, itemData.id, setShouldAssignFocus]);

  // Add remove button ref to the array of remove buttons
  // This is used externall to move focus to the next item when an item is removed
  useEffect(() => {
    setRemoveButtons((prev) => [...prev, { id: itemData.id, ref: buttonRef }]);
    return () => {
      setRemoveButtons((prev) =>
        prev.filter((item) => item.id !== itemData.id),
      );
    };
  }, [setRemoveButtons, tourItems, itemData.id]);

  return (
    <li
      className="aic-ct-tour-item aic-ct__core"
      id={`aic-ct-tour-item-${itemData.id}`}
    >
      <div className="aic-ct-tour-item__lockup">
        <div className="aic-ct-tour-item__info">
          {itemData.title && (
            <h2 className="aic-ct-tour-item__title f-deck">
              {itemData.title}
              {itemData.date_display && <>, {itemData.date_display}</>}
            </h2>
          )}
          {itemData.artist_title && (
            <h3 className="aic-ct-tour-item__artist f-body">
              {itemData.artist_title}
            </h3>
          )}
          {itemData.gallery_title && (
            <p className="aic-ct-tour-item__gallery f-secondary">
              {itemData.gallery_title}
            </p>
          )}
        </div>
        {itemData.image_id && (
          <img
            className="aic-ct-tour-item__image"
            src={iiifUrl(
              iiifBaseUrl,
              itemData.image_id,
              "128",
              "128",
              "square",
              true,
            )}
            alt={itemData.thumbnail.alt_text}
          />
        )}
      </div>

      {/* Note the reducer reassigns short_description to description for this output */}
      {itemData.description && (
        <div
          className="aic-ct-tour-item__description f-body "
          dangerouslySetInnerHTML={{ __html: itemData.description }}
        ></div>
      )}
      <div className="aic-ct-tour-item__note">
        <label
          htmlFor={`aic-ct-note-${itemData.id}`}
          className="label f-secondary"
        >
          Your notes on this artwork&nbsp;<em>(optional)</em>
        </label>
        <span className="textarea">
          <span className="input__io-container">
            <textarea
              className="f-secondary"
              id={`aic-ct-note-${itemData.id}`}
              onChange={cappedNote.onChange}
              rows="5"
              placeholder="e.g. I love the colors in this one."
              value={cappedNote.value}
              maxLength={cappedNote.maxLength}
            />
            {cappedNote.counterEl}
          </span>
        </span>
      </div>
      <button
        className="btn btn--transparent f-secondary aic-ct-tour-item__remove"
        ref={buttonRef}
        type="button"
        onClick={() => {
          handleClick(itemData.id);
        }}
      >
        <svg className="icon--delete" aria-hidden="true">
          <use xlinkHref="#icon--delete"></use>
        </svg>
        Remove from tour
      </button>
    </li>
  );
}

TourItem.propTypes = {
  itemData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image_id: PropTypes.string,
    thumbnail: PropTypes.shape({
      alt_text: PropTypes.string,
    }),
    artist_title: PropTypes.string,
    description: PropTypes.string,
    date_display: PropTypes.string,
    gallery_title: PropTypes.string,
  }),
  itemIndex: PropTypes.number.isRequired,
  setRemoveButtons: PropTypes.func,
  setShouldAssignFocus: PropTypes.func,
};

export default TourItem;
