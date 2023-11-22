import React, { useEffect, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import PropTypes from "prop-types";

function NavPages({ children }) {
  const { setNavPages } = useContext(AppContext);

  useEffect(() => {
    setNavPages(
      children
        ? children.map((child, index) => {
            return {
              id: index,
              title: child.props.title,
              tagline: child.props.tagline,
            };
          })
        : [],
    );
  }, [children, setNavPages]);

  return <div id="aic-ct-nav-pages">{children}</div>;
}

NavPages.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavPages;
