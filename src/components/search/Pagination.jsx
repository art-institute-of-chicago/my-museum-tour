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
    <nav className="m-paginator">
      <ul className="m-paginator__prev-next">
        <li>
          <a onClick={handleNextClick}>Next</a>
        </li>
        <li>
          <a onClick={handlePreviousClick}>Previous</a>
        </li>
      </ul>
      <ul className="m-paginator__pages">
        {pages.map((page) => (
          <PageNumber
            key={page}
            page={page}
            is_current_page={page === pagination?.current_page}
            goToPage={goToPage}
          />
        ))}
      </ul>
      <p className="m-paginator__current-page">
        Page {pagination.current_page}
      </p>
    </nav>
  );
}

Pagination.propTypes = {
  goToPage: PropTypes.func,
};

export default Pagination;
