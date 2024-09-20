import React from "react";
import PropTypes from "prop-types";

function PageNumber({ page, is_current_page }) {
  return (
    <li className={is_current_page ? "s-active" : ""}><a href="">{page}</a></li>
  );
}

PageNumber.propTypes = {
  page: PropTypes.number,
  is_current_page: PropTypes.bool,
};

export default PageNumber;
