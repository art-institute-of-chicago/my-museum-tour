import React, { useContext } from "react";
import { iiifUrl } from "../utils";
import { AppContext } from "../contexts/AppContext";
import PropTypes from "prop-types";

/**
 * TourItem
 */
function TourItem(props) {
  const { itemData } = props;
  const { iiifBaseUrl, tourItemsDispatch } = useContext(AppContext);

  const handleClick = (id) => {
    // Remove the item from the tour
    tourItemsDispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

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
};

export default TourItem;
