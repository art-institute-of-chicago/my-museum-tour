import React, { useContext } from "react";
import { iiifUrl } from "../utils";
import { AppContext } from "../contexts/AppContext";
import PropTypes from "prop-types";

/**
 * SearchResultItem
 */
function SearchResultItem(props) {
  const { iiifBaseUrl } = useContext(AppContext);
  const { id, item } = props;
  return (
    <li id={`aic-ct-search__item-${id}`}>
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
    </li>
  );
}

SearchResultItem.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.shape({
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
