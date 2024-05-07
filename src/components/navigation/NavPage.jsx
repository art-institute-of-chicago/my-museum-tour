import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../contexts/AppContext";

function NavPage(props) {
  const { id, children } = props;
  const { activeNavPage } = useContext(AppContext);
  return (
    <div
      tabIndex="0"
      id={`aic-ct-nav-page-${id}`}
      aria-labelledby={`aic-ct-nav-button-${id}`}
      aria-hidden={activeNavPage !== id}
      style={activeNavPage !== id ? { display: "none" } : {}}
    >
      {children}
    </div>
  );
}

NavPage.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.object,
  ]).isRequired,
};

export default NavPage;
