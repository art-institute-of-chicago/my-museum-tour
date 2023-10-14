import React from "react";
import { iiifUrl } from "../utils";

function SearchResultItem(props) {
  const { id, item, iiifBaseUrl } = props;
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
