import React, { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { createSearchUrl } from "../../utils";
import useFetch from "../../hooks/useFetch";
import PropTypes from "prop-types";

/**
 * ThemeToggle
 */
function ThemeToggle(props) {
  const { id, label, subjectIds, categoryIds } = props;
  const {
    setSearchResultItems,
    setSearchFetching,
    setSearchError,
    setSearchQuery,
    activeTheme,
    setActiveTheme,
  } = useContext(SearchContext);
  const { fetchData, resetState } = useFetch({
    dataSubSelector: "data",
    dataSetter: setSearchResultItems,
    fetchingSetter: setSearchFetching,
    errorSetter: setSearchError,
  });

  const handleClick = () => {
    if (activeTheme === label) {
      // Deselect the theme
      setActiveTheme(null);
      // Should remove results
      resetState();
    } else {
      fetchData(createSearchUrl({ subjectIds, categoryIds }));
      // Clicking while active removes the theme
      setActiveTheme(label);
      // Empty the search field
      setSearchQuery("");
    }
  };

  return (
    <>
      {(activeTheme === null || activeTheme === label) && (
        <button
          id={`aic-ct-theme-toggle-${id}`}
          onClick={handleClick}
          aria-pressed={activeTheme === label ? "true" : "false"}
        >
          {label}
        </button>
      )}
    </>
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
