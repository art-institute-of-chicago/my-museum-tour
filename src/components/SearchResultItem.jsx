import React, { useContext, useState, useEffect } from "react";
import { iiifUrl } from "../utils";
import { AppContext } from "../contexts/AppContext";
import PropTypes from "prop-types";

/**
 * SearchResultItem
 */
function SearchResultItem(props) {
  const { iiifBaseUrl, tourItems, tourItemsDispatch } = useContext(AppContext);
  const { item } = props;
  const [inTour, setInTour] = useState(tourItems.get(item.id));

  const handleClick = () => {
    // Remove the item if it existed before
    tourItemsDispatch({
      type: inTour ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: item.id,
    });
  };

  // Whenever the tourItems map changes, update the inTour state for this item
  useEffect(() => {
    setInTour(tourItems.get(item.id));
  }, [tourItems, item.id]);

  return (
    <li id={`aic-ct-search__item-${item.id}`}>
      {item.title && <h2>{item.title}</h2>}
      {item.image_id && (
        <img
          src={iiifUrl(iiifBaseUrl, item.image_id, "240", "240")}
          alt={item.thumbnail.alt_text}
        />
      )}
      {item.artist_title && <p>{item.artist_title}</p>}
      {/* TODO: Update this to "short description"? When we have that field */}
      {item.description && (
        <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
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
  item: PropTypes.shape({
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
