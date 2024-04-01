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
    // Reset the scroll position after the modal has opened
    setTimeout(() => {
      document.documentElement.classList.add(
        "s-body-locked",
        "s-body-locked--ct",
      );
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
      id={`aic-ct-search-item-${itemData.id}`}
      className={itemClasses}
    >
      {itemData.image_id && (
        <button
          className="aic-ct-result__button"
          type="button"
          onClick={handleClick}
          aria-describedby={
            isSelected ? "aic-ct-search__in-your-tour" : undefined
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
                src={itemData.thumbnail.lqip}
                alt=""
                height={itemData.thumbnail.height}
                width={itemData.thumbnail.width}
                data-iiif-id={`${iiifBaseUrl}/${itemData.image_id}`}
                data-pin-media={iiifUrl(
                  iiifBaseUrl,
                  itemData.image_id,
                  "600",
                  undefined,
                  undefined,
                  false,
                )}
                sizes="(min-width: 1640px) 336px, (min-width: 1200px) 20.31vw, (min-width: 900px) 28.13vw, (min-width: 600px) 43.75vw,  43.75vw"
                data-srcset={`${iiifUrl(
                  iiifBaseUrl,
                  itemData.image_id,
                  Math.min(itemData.thumbnail.width, 200),
                  undefined,
                  undefined,
                  false,
                )} 200w, ${iiifUrl(
                  iiifBaseUrl,
                  itemData.image_id,
                  Math.min(itemData.thumbnail.width, 400),
                  undefined,
                  undefined,
                  false,
                )} 400w, ${iiifUrl(
                  iiifBaseUrl,
                  itemData.image_id,
                  Math.min(itemData.thumbnail.width, 843),
                  undefined,
                  undefined,
                  false,
                )} 843w, ${iiifUrl(
                  iiifBaseUrl,
                  itemData.image_id,
                  Math.min(itemData.thumbnail.width, 1686),
                  undefined,
                  undefined,
                  false,
                )} 1686w`}
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
      lqip: PropTypes.string,
    }),
    artist_title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default SearchResultItem;
