import React, { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

/**
 * SearchPreview
 */
function SearchPreview() {
  const { searchPreviewId } = useContext(SearchContext);
  return (
    <div id="aic-ct-search-preview__content">
      Search preview {searchPreviewId} will go here
    </div>
  );
}

export default SearchPreview;
