import React, { useContext, useEffect, useRef } from "react";
import { iiifUrl } from "../../utils";
import { SearchContext } from "../../contexts/SearchContext";
import { AppContext } from "../../contexts/AppContext";
import classNames from "classnames";
import PropTypes from "prop-types";

/**
 * SearchResultItem
 */
function SearchResultItem(props) {
  const { setSearchPreviewId, searchPreviewRef } = useContext(SearchContext);
  const { iiifBaseUrl, setScrollY, tourItems } = useContext(AppContext);
  const { itemData } = props;
  const isSelected = tourItems.some((item) => item.id === itemData.id);

  const itemRef = useRef(null);
  const prevClassNamesRef = useRef();

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

  const itemClasses = classNames(
    "aic-ct-result o-pinboard__item m-listing m-listing--variable-height",
    {
      "aic-ct-result--selected": isSelected,
    },
  );

  useEffect(() => {
    // Check if "s-positioned" was present in the previous class names
    // If so, add it to the current class names
    if (prevClassNamesRef?.current?.includes("s-positioned")) {
      itemRef.current.classList.add("s-positioned");
    }

    // Save the current class names as the previous class names for the next render
    prevClassNamesRef.current = itemRef.current.className;
  });

  return (
    <li
      ref={itemRef}
      id={`aic-ct-search__item-${itemData.id}`}
      className={itemClasses}
    >
      {itemData.image_id && (
        <button
          className="aic-ct-result__button"
          type="button"
          onClick={handleClick}
          aria-description={
            isSelected ? "This object is in your tour" : undefined
          }
        >
          <span className="m-listing__link">
            <span className="m-listing__img m-listing__img--no-bg">
              {isSelected && (
                <span className="aic-ct-selected-marker">
                  <svg aria-hidden="true" className="icon--check">
                    <use xlinkHref="#icon--check" />
                  </svg>
                </span>
              )}
              <img
                src={iiifUrl(iiifBaseUrl, itemData.image_id, "240", "240")}
                alt=""
                height={itemData.thumbnail.height}
                width={itemData.thumbnail.width}
              />
            </span>
            <span
              id={`aic-ct-result__meta-${itemData.id}`}
              className="m-listing__meta"
            >
              {itemData.title && (
                <span className="title f-list-7">{itemData.title}</span>
              )}
              {itemData.artist_title && (
                <>
                  <br />
                  <span className="subtitle f-tertiary">
                    {itemData.artist_title}
                  </span>
                </>
              )}
            </span>
          </span>
        </button>
      )}
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
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    artist_title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default SearchResultItem;
