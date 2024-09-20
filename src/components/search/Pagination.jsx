import React, { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import PageNumber from "./PageNumber";

function Pagination() {
  const { pagination } = useContext(SearchContext);
  const pages = Array.from(
    Array(pagination?.total_pages ?? 1),
    (_, index) => index + 1,
  );
  console.log(pages);

  return (
    <nav className="m-paginator">
      <ul className="m-paginator__prev-next">
        <li>Next</li>
        <li>Previous</li>
      </ul>
      <ul className="m-paginator__pages">
        {pages.map((page) => (
          <PageNumber
            key={page}
            page={page}
            is_current_page={page === pagination?.current_page}
          />
        ))}
      </ul>
      <p className="m-paginator__current-page">
        Page {pagination.current_page}
      </p>
    </nav>
  );
}

export default Pagination;
