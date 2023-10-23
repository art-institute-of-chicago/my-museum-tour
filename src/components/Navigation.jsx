import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function Navigation() {
  const { navPages, activeNavPage, setActiveNavPage, navSearchButtonRef } =
    useContext(AppContext);

  return (
    <nav id="aic-ct-navigation" aria-label="Custom tour navigation">
      {navPages.map((page, index) => (
        <button
          // Use id instead of title as it's probably more resilient
          // But we're targeting the search button for the ref
          ref={page.id === 0 ? navSearchButtonRef : null}
          key={page.id}
          id={`aic-ct-nav-button-${page.id}`}
          aria-controls={`aic-ct-nav-page-${page.id}`}
          aria-pressed={page.id === activeNavPage}
          type="button"
          onClick={() => setActiveNavPage(index)}
        >
          {page.title}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;
