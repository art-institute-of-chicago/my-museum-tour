import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function Navigation() {
  const { navPages, activeNavPage, setActiveNavPage } = useContext(AppContext);

  return (
    <nav id="aic-ct-navigation" aria-label="Custom tour navigation">
      {navPages.map((page, index) => (
        <button
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
