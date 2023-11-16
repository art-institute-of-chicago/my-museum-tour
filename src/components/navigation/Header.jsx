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
      className="aic-ct-header"
      aria-label="Custom tour builder"
    >
      <div className="aic-ct__item-info" aria-live="polite">
        <span id="aic-ct-item-count" className="aic-ct__item-count">
          {items}
        </span>{" "}
        artworks added <em>(of max 6)</em>
      </div>
      <button
        id="aic-ct-header__button"
        className="aic-ct-header__button"
        type="button"
        onClick={handleClick}
      >
        {activeNavPage === 0 && "Preview"}
        {activeNavPage > 0 && "Finish"}
      </button>
    </header>
  );
}

export default Header;
