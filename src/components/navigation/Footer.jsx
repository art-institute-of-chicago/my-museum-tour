import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import classNames from "classnames";

function Footer() {
  const {
    navPages,
    activeNavPage,
    setActiveNavPage,
    navSearchButtonRef,
    isSaving,
  } = useContext(AppContext);

  // Control breadcrumb button classes
  const buttonClasses = (id) => {
    return classNames("aic-ct-nav__button", {
      "aic-ct-nav__button--active": activeNavPage === id,
      "aic-ct-nav__button--done": activeNavPage > id,
    });
  };

  return (
    <footer aria-label="Custom tour builder footer">
      <nav id="aic-ct-navigation" aria-label="Custom tour builder navigation">
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
            disabled={isSaving}
            className={buttonClasses(page.id)}
          >
            <span className="aic-ct-nav__button-wrapper"></span>
            <span className="aic-ct-nav__number">{page.id + 1}</span>{" "}
            <span className="aic-ct-nav__title">{page.title}</span>{" "}
            <span className="aic-ct-nav__tagline">{page.tagline}</span>
          </button>
        ))}
      </nav>
      <a
        href="/custom-tours"
        className="btn btn--transparent btn--w-icon f-buttons aic-ct-nav__exit"
        type="button"
      >
        <svg className="icon--close--24" aria-hidden="true">
          <use xlinkHref="#icon--close--24"></use>
        </svg>
        Exit custom tour
      </a>
    </footer>
  );
}

export default Footer;
