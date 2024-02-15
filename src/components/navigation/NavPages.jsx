import React, { useEffect, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import PropTypes from "prop-types";

function NavPages({ children }) {
  const { activeNavPage, navPages, setNavPages } = useContext(AppContext);

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

  useEffect(() => {
    // Navigating while scrolled down should reset the scroll position
    document.querySelector("#my-museum-tour-builder")?.scrollIntoView();
  }, [activeNavPage]);

  return (
    <div id="aic-ct-nav-pages">
      <div className="sr-only" aria-live="polite">
        Step {navPages[activeNavPage]?.id + 1} {navPages[activeNavPage]?.title}{" "}
        {navPages[activeNavPage]?.tagline}
      </div>
      {children}
    </div>
  );
}

NavPages.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavPages;
