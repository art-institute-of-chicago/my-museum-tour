import React, { useContext } from "react";
import { iiifUrl } from "../utils";
import { AppContext } from "../contexts/AppContext";

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

export default SearchResultItem;
