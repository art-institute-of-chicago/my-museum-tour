import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { SearchContext } from "../../contexts/SearchContext";
import PageNumber from "./PageNumber";
import { range } from "./../../utils";

function Pagination({ goToPage }) {

  const { pagination } = useContext(SearchContext);

  const pages = useMemo(() => {
    return range(1, pagination.total_pages ?? 1);
  }, [pagination]);

  const handleNextClick = () => {
    if (pagination.current_page < pagination.total_pages) {
      goToPage(pagination.current_page + 1);
    }
  };

  const handlePreviousClick = () => {
    if (pagination.current_page > 1) {
      goToPage(pagination.current_page - 1);
    }
  };

  return (
      {hasPages() && (
        <nav className="m-paginator">
          <ul className="m-paginator__prev-next">
            <li>
              <a className="f-buttons" onClick={handleNextClick}>
                Next
              </a>
            </li>
            <li>
              <a className="f-buttons" onClick={handlePreviousClick}>
                Previous
              </a>
            </li>
          </ul>
  );
}

Pagination.propTypes = {
  goToPage: PropTypes.func,
};

export default Pagination;
