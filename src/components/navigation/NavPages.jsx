import React, { useEffect, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import PropTypes from "prop-types";
import { triggerCustomEvent } from "@area17/a17-helpers";

function NavPages({ children }) {
  const { activeNavPage, navPages, setNavPages, navPageEvents } =
    useContext(AppContext);

  useEffect(() => {
    triggerCustomEvent(document, "gtm:push", {
      event: navPageEvents[activeNavPage],
      count: 1,
    });
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
  }, [children, setNavPages, activeNavPage, navPageEvents]);

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
