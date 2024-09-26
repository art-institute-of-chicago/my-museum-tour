import React from "react";
import PropTypes from "prop-types";

function PageNumber({ page, is_current_page, goToPage }) {
  const handleClick = () => {
    if (!is_current_page) {
      goToPage(page);
    }
  };

  return (
    <li className={is_current_page ? "s-active" : ""}>
      <a className="m-paginator__page f-buttons" onClick={handleClick}>
        {page}
      </a>
    </li>
  );
}

PageNumber.propTypes = {
  page: PropTypes.number,
  is_current_page: PropTypes.bool,
  goToPage: PropTypes.func,
};

export default PageNumber;
