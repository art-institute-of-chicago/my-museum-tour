import React, { useContext } from "react";
import { iiifUrl } from "../utils";
import { AppContext } from "../contexts/AppContext";

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
      {/* TODO: Is this "short description"? I feel like it isn't */}
      {/* Predicated on the notion we trust the markup in the API... */}
      {item.description && (
        <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
      )}
    </li>
  );
}

export default SearchResultItem;
