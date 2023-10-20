import React, { useContext, useState, useEffect } from "react";
import { iiifUrl } from "../utils";
import { AppContext } from "../contexts/AppContext";
import PropTypes from "prop-types";

/**
 * SearchResultItem
 */
function SearchResultItem(props) {
  const { iiifBaseUrl, tourItems, tourItemsDispatch } = useContext(AppContext);
  const { itemData } = props;
  const [inTour, setInTour] = useState(false);

  const handleClick = () => {
    // Remove the item if it existed before
    tourItemsDispatch({
      type: inTour ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: inTour ? itemData.id : itemData,
    });
  };

  // Whenever the tourItems map changes, update the inTour state for this item
  useEffect(() => {
    // loop tourItems array to see if this item is in the tour
    setInTour(tourItems.find((item) => item.id === itemData.id));
  }, [tourItems, itemData.id]);

  return (
    <li id={`aic-ct-search__item-${itemData.id}`}>
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

      {/*
        This may need more extensive checking for accessibility
        It's been modelled on the Button Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/button/
      */}
      <button
        type="button"
        onClick={handleClick}
        aria-pressed={inTour ? "true" : "false"}
        aria-label="Add to tour"
      >
        {inTour ? "Remove from tour" : "Add to tour"}
      </button>
    </li>
  );
}

SearchResultItem.propTypes = {
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
};

export default SearchResultItem;
