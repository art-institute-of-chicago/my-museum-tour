import React, { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import PageNumber from "./PageNumber";

  const { pagination } = useContext(SearchContext);

  const pages = useMemo(() => {
    return range(1, pagination.total_pages ?? 1);
  }, [pagination]);


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
