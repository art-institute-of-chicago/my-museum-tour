import React, { useContext, useEffect, useRef } from "react";
import { iiifUrl } from "../../utils";
import { AppContext } from "../../contexts/AppContext";
import PropTypes from "prop-types";

/**
 * TourItem
 */
function TourItem(props) {
  const { itemData, setShouldAssignFocus, setRemoveButtons } = props;
  const { iiifBaseUrl, tourItems, tourItemsDispatch } = useContext(AppContext);
  const buttonRef = useRef(null);

  const handleClick = () => {
    // Remove the item from the tour
    tourItemsDispatch({
      type: "REMOVE_ITEM",
      payload: itemData.id,
    });
  };

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
    <li id={`aic-ct-tour__item-${itemData.id}`}>
      {itemData.title && <h2>{itemData.title}</h2>}
      {itemData.image_id && (
        <img
          src={iiifUrl(iiifBaseUrl, itemData.image_id, "240", "240")}
          alt={itemData.thumbnail.alt_text}
        />
      )}
      {itemData.artist_title && <p>{itemData.artist_title}</p>}
      {/* TODO: Update this to "short description"? When we have that field */}
      {itemData.description && (
        <div dangerouslySetInnerHTML={{ __html: itemData.description }}></div>
      )}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => {
          handleClick(itemData.id);
        }}
      >
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
  }),
  setRemoveButtons: PropTypes.func,
  setShouldAssignFocus: PropTypes.func,
};

export default TourItem;
