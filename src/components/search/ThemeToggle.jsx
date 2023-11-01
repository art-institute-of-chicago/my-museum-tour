import React, { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { createSearchUrl } from "../../utils";
import useFetch from "../../hooks/useFetch";
import PropTypes from "prop-types";

/**
 * ThemeToggle
 */
function ThemeToggle(props) {
  const { id, label, subjectIds, thumbnailId, categoryIds } = props;
  const {
    setSearchResultItems,
    setSearchFetching,
    setSearchError,
    setSearchQuery,
  } = useContext(SearchContext);
  const { fetchData } = useFetch({
    dataSubSelector: "data",
    dataSetter: setSearchResultItems,
    fetchingSetter: setSearchFetching,
    errorSetter: setSearchError,
  });

  const handleClick = () => {
    fetchData(createSearchUrl({ subjectIds, categoryIds }));
    // Empty the search field
    setSearchQuery("");
  };

  return (
    <button id={`aic-ct-theme-toggle-${id}`} onClick={handleClick}>
      {label}
    </button>
  );
}

ThemeToggle.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  subjectIds: PropTypes.arrayOf(PropTypes.string),
  categoryIds: PropTypes.arrayOf(PropTypes.string),
  thumbnailId: PropTypes.string.isRequired,
};

export default ThemeToggle;
