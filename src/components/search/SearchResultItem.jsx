import React, { useContext } from "react";
import { iiifUrl } from "../../utils";
import { SearchContext } from "../../contexts/SearchContext";
import { AppContext } from "../../contexts/AppContext";
import PropTypes from "prop-types";

/**
 * SearchResultItem
 */
function SearchResultItem(props) {
  const { setSearchPreviewId, searchPreviewRef } = useContext(SearchContext);
  const { iiifBaseUrl, setScrollY } = useContext(AppContext);
  const { itemData } = props;

  const handleClick = () => {
    const _scrollY = document.documentElement.scrollTop;
    setSearchPreviewId(itemData.id);
    // Counteract the scroll lock on the body resetting the scroll position
    setScrollY(_scrollY);
    searchPreviewRef.current.showModal();
    document.documentElement.classList.add("s-body-locked");
    // Reset the scroll position after the modal has opened
    setTimeout(() => {
      document.body.scrollTop = _scrollY;
    }, 0);
  };

  return (
    <li id={`aic-ct-search__item-${itemData.id}`} className="aic-ct-result">
      {itemData.image_id && (
        <button
          className="btn btn--transparent f-buttons btn--ct-search__image aic-ct-result__button"
          type="button"
          onClick={handleClick}
        >
          <img
            src={iiifUrl(iiifBaseUrl, itemData.image_id, "240", "240")}
            alt={itemData.thumbnail.alt_text}
          />
        </button>
      )}
      {itemData.title && <h2>{itemData.title}</h2>}
      {itemData.artist_title && <p>{itemData.artist_title}</p>}
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
