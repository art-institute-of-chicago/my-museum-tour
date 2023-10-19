import React from "react";
import PropTypes from "prop-types";

function NavPage(props) {
  const { id, children } = props;
  return (
    <div
      tabIndex="0"
      id={`aic-ct-nav-page-${id}`}
      aria-labelledby={`aic-ct-nav-button-${id}`}
    >
      {children}
    </div>
  );
}

NavPage.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default NavPage;
