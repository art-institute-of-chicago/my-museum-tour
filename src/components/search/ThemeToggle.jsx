import React from "react";
import PropTypes from "prop-types";

/**
 * ThemeToggle
 */
function ThemeToggle(props) {
  const { label, subjectId, thumbnailId, categoryId } = props;
  return <button>{label}</button>;
}

ThemeToggle.propTypes = {
  label: PropTypes.string.isRequired,
  subjectId: PropTypes.string,
  categoryId: PropTypes.string,
  thumbnailId: PropTypes.string.isRequired,
};

export default ThemeToggle;
