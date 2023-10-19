import React from "react";
import PropTypes from "prop-types";

function NavPage({ children }) {
  return <div id="">{children}</div>;
}

NavPage.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default NavPage;
