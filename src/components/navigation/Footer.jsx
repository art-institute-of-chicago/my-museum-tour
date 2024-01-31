import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import classNames from "classnames";

function Footer() {
  const { navPages, activeNavPage, setActiveNavPage, isSaving } =
    useContext(AppContext);

  // Control breadcrumb button classes
  const buttonClasses = (id) => {
    return classNames("aic-ct-nav__button btn f-buttons btn--transparent", {
      "aic-ct-nav__button--active": activeNavPage === id,
      "aic-ct-nav__button--done": activeNavPage > id,
    });
  };

  return (
    <footer
      className="aic-ct-footer aic-ct-full-bleed"
      aria-label="Custom tour builder footer"
    >
      <nav
        id="aic-ct-navigation"
        className="aic-ct-nav"
        aria-label="Custom tour builder navigation"
      >
        {navPages.map((page, index) => (
          <button
            key={page.id}
            id={`aic-ct-nav-button-${page.id}`}
            aria-controls={`aic-ct-nav-page-${page.id}`}
            aria-pressed={page.id === activeNavPage}
            type="button"
            onClick={() => setActiveNavPage(index)}
            disabled={isSaving}
            className={buttonClasses(page.id)}
          >
            <span className="aic-ct-nav__button-wrapper">
              <span className="aic-ct-nav__number">{page.id + 1}</span>{" "}
              <span className="aic-ct-nav__title">{page.title}</span>{" "}
              <span className="aic-ct-nav__tagline">{page.tagline}</span>
            </span>
          </button>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
