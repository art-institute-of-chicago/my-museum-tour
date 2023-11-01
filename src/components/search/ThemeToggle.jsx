import React from "react";
import { createSearchUrl } from "../../utils";
import useFetch from "../../hooks/useFetch";
import PropTypes from "prop-types";

/**
 * ThemeToggle
 */
function ThemeToggle(props) {
  const { label, subjectIds, thumbnailId, categoryIds } = props;
  const { data, fetching, error, fetchData } = useFetch();

  const handleClick = () => {
    // fetchData(createSearchUrl({ subjectIds, categoryIds }));
    console.log(createSearchUrl({ subjectIds, categoryIds }).toString());
  };

  return <button onClick={handleClick}>{label}</button>;
}

ThemeToggle.propTypes = {
  label: PropTypes.string.isRequired,
  subjectIds: PropTypes.arrayOf(PropTypes.string),
  categoryIds: PropTypes.arrayOf(PropTypes.string),
  thumbnailId: PropTypes.string.isRequired,
};

export default ThemeToggle;
