import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

function Header() {
  const { activeNavPage, setActiveNavPage, tourItems } = useContext(AppContext);
  const items = tourItems.length;

  const handleClick = () => {
    if (activeNavPage === 0) {
      setActiveNavPage(1);
    } else {
      setActiveNavPage(2);
    }
  };

  return (
    <header
      id="aic-ct-header"
      className="aic-ct-header f-body"
      aria-label="Custom tour builder"
    >
      <div className="aic-ct-item-info" aria-live="polite">
        <span id="aic-ct-item-count" className="aic-ct-item-count f-body">
          {items}
        </span>{" "}
        <span>
          artworks added <em>(of max 6)</em>
        </span>
      </div>
      <button
        id="aic-ct-header__button"
        className="aic-ct-header__button btn btn--transparent btn--w-icon f-buttons"
        type="button"
        onClick={handleClick}
      >
        {activeNavPage === 0 && "Preview"}
        {activeNavPage > 0 && "Finish"}
        <svg className="icon--arrow" aria-hidden="true">
          <use xlinkHref="#icon--arrow"></use>
        </svg>
      </button>
    </header>
  );
}

export default Header;
