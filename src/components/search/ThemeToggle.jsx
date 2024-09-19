import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { SearchContext } from "../../contexts/SearchContext";
import { createSearchUrl, iiifUrl } from "../../utils";
import useFetch from "../../hooks/useFetch";
import classNames from "classnames";
import PropTypes from "prop-types";
import { triggerCustomEvent } from "@area17/a17-helpers";

/**
 * ThemeToggle
 */
function ThemeToggle(props) {
  const { id, label, thumbnailId, searchParams, hideFromTours } = props;
  const { iiifBaseUrl } = useContext(AppContext);
  const {
    setSearchResultItems,
    setSearchFetching,
    setSearchError,
    setSearchQuery,
    activeTheme,
    setActiveTheme,
  } = useContext(SearchContext);
  const { fetchData } = useFetch({
    dataSubSelector: "data",
    dataSetter: setSearchResultItems,
    fetchingSetter: setSearchFetching,
    errorSetter: setSearchError,
  });

  const handleClick = () => {
    if (activeTheme === label) {
      // Deselect the theme
      setActiveTheme(null);
      // Apply results for empty keyword search
      fetchData(createSearchUrl({ keywords: "", page: 1 }, hideFromTours));
    } else {
      triggerCustomEvent(document, "gtm:push", {
        event: "mmt_quickfilter",
        mmt_filterTitle: label,
      });
      fetchData(createSearchUrl(searchParams, hideFromTours));
      // Clicking while active removes the theme
      setActiveTheme(label);
      // Empty the search field
      setSearchQuery("");
    }
  };

  const buttonClasses = classNames(
    "aic-ct-theme-toggle tag tag--senary tag--w-image",
    {
      "f-tag": activeTheme !== label,
      "f-tag-2": activeTheme === label,
      "aic-ct-theme-toggle--active": activeTheme === label,
    },
  );

  return (
    <>
      {(activeTheme === null || activeTheme === label) && (
        <li>
          <button
            className={buttonClasses}
            id={`aic-ct-theme-toggle-${id}`}
            onClick={handleClick}
            aria-pressed={activeTheme === label ? "true" : "false"}
          >
            <span className="aic-ct-theme-toggle__wrapper">
              <img
                src={iiifUrl(iiifBaseUrl, thumbnailId, "40", "40", "square")}
                alt=""
              />
              {label}
              {activeTheme === label && (
                <svg aria-hidden="true" className="icon--close">
                  <use xlinkHref="#icon--close"></use>
                </svg>
              )}
            </span>
          </button>
        </li>
      )}
    </>
  );
}

ThemeToggle.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  thumbnailId: PropTypes.string.isRequired,
  searchParams: PropTypes.object.isRequired,
  hideFromTours: PropTypes.array,
};

export default ThemeToggle;
