import React, { useContext } from "react";
import PropTypes from "prop-types";
import { SearchContext } from "../../contexts/SearchContext";
import PageNumber from "./PageNumber";
import { range } from "./../../utils";

/**
 * Much of the code and several of the comments below have been adapted from the
 * Illuminate/Pagination library in the Laravel framework.
 */
function Pagination({ goToPage }) {
  const onEachSide = 3;
  const perPage = 60;

  const { pagination } = useContext(SearchContext);

  const handleNextClick = () => {
    if (hasMorePages()) {
      goToPage(pagination.current_page + 1);
    }
  };

  const handlePreviousClick = () => {
    if (!onFirstPage()) {
      goToPage(pagination.current_page - 1);
    }
  };

  const hasPages = () => {
    return pagination?.total_pages > 1;
  };

  const hasMorePages = () => {
    return pagination.total_pages > pagination.current_page;
  };

  const onFirstPage = () => {
    return pagination.current_page <= 1;
  };

  const smallSlider = () => {
    return {
      first: range(1, pagination.total_pages),
      slider: null,
      last: null,
    };
  };

  const slider = () => {
    let window = onEachSide + 4; // Is this 4 related to the 8 above?
    if (!hasPages()) {
      return { first: null, slider: null, last: null };
    }
    // If the current page is very close to the beginning of the page range, we will
    // just render the beginning of the page range, followed by the last 2 of the
    // links in this list, since we will not have room to create a full slider.
    if (pagination.current_page <= window) {
      return sliderTooCloseToBeginning(window);
    }
    // If the current page is close to the ending of the page range we will just get
    // this first couple pages, followed by a larger window of these ending pages
    // since we're too close to the end of the list to create a full on slider.
    else if (pagination.current_page > pagination.total_pages - window) {
      return sliderTooCloseToEnding(window);
    }
    // If we have enough room on both sides of the current page to build a slider we
    // will surround it with both the beginning and ending caps, with this window
    // of pages in the middle providing a Google style sliding paginator setup.
    return fullSlider();
  };

  const sliderTooCloseToBeginning = (window) => {
    let too_close_to_beginning = window + onEachSide;
    return {
      first: range(1, too_close_to_beginning),
      slider: null,
      last: getLast(),
    };
  };

  const sliderTooCloseToEnding = (window) => {
    let too_close_to_ending = window + (onEachSide - 1);
    return {
      first: getFirst(),
      slider: null,
      last: range(
        pagination.total_pages - too_close_to_ending,
        pagination.total_pages,
      ),
    };
  };

  const fullSlider = () => {
    return {
      first: getFirst(),
      slider: getAdjacent(),
      last: getLast(),
    };
  };

  /**
   * Get the page range for the current page window.
   *
   * @return {number[]}
   */
  const getAdjacent = () => {
    return range(
      pagination.current_page - onEachSide,
      pagination.current_page + onEachSide,
    );
  };

  /**
   * Get the range of first pages of the slider
   *
   * @return {number[]}
   */
  const getFirst = () => {
    return range(1, 2);
  };

  /**
   * Get the range of last pages of the slider
   *
   * @return {number[]}
   */
  const getLast = () => {
    return range(pagination.total_pages - 1, pagination.total_pages);
  };

  // I'm not sure what the 8 is meant to represent
  let window =
    pagination?.total_pages < onEachSide * 2 + 8 ? smallSlider() : slider();
  let elements = [
    window.first,
    Array.isArray(window.slider) ? ["..."] : null,
    window.slider,
    Array.isArray(window.last) ? ["..."] : null,
    window.last,
  ].filter((element) => element); // Filter out nulls

  return (
    <>
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
          <ul className="m-paginator__pages">
            {elements.map((element) =>
              element.map((page, index) => (
                <React.Fragment key={index}>
                  {typeof page === "number" && page * perPage <= 10_000 && (
                    <PageNumber
                      page={page}
                      is_current_page={page === pagination.current_page}
                      goToPage={goToPage}
                    />
                  )}
                  {typeof page === "string" && ( // Ellipses
                    <li>
                      <span className="f-buttons">&hellip;</span>
                    </li>
                  )}
                </React.Fragment>
              )),
            )}
          </ul>
          <p className="m-paginator__current-page">
            Page {pagination.current_page}
          </p>
        </nav>
      )}
    </>
  );
}

Pagination.propTypes = {
  goToPage: PropTypes.func,
};

export default Pagination;
