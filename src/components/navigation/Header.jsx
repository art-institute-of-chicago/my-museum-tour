import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import classNames from "classnames";
import { Location } from "../../utils";
import Slots from "./Slots";

function Header() {
  const { activeNavPage, setActiveNavPage, tourItems, headerNextButtonRef } =
    useContext(AppContext);
  const items = tourItems.length;

  const backButtonClasses = classNames(
    "aic-ct-header__button aic-ct-header__button--back btn btn--transparent btn--w-icon f-buttons",
    {
      "aic-ct-header__button--exit": activeNavPage === 0,
    },
  );

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
          artworks <em>(of max 6)</em>
        </span>
        <Slots />
      </div>
      <button
        ref={headerNextButtonRef}
        id="aic-ct-header__back-button"
        className={backButtonClasses}
        type="button"
        onClick={() => {
          if (activeNavPage === 0) {
            Location.assign("/custom-tours");
          } else if (activeNavPage === 1) {
            setActiveNavPage(0);
          } else {
            setActiveNavPage(1);
          }
        }}
      >
        <svg className="icon--arrow" aria-hidden="true">
          <use xlinkHref="#icon--arrow"></use>
        </svg>
        Back
      </button>
      <button
        ref={headerNextButtonRef}
        id="aic-ct-header__next-button"
        className="aic-ct-header__button aic-ct-header__button--next btn btn--transparent btn--w-icon f-buttons"
        type="button"
        onClick={() => {
          if (activeNavPage === 0) {
            setActiveNavPage(1);
          } else {
            setActiveNavPage(2);
          }
        }}
      >
        {activeNavPage === 0 && "Next"}
        {activeNavPage > 0 && "Finish"}
        <svg className="icon--arrow" aria-hidden="true">
          <use xlinkHref="#icon--arrow"></use>
        </svg>
      </button>
    </header>
  );
}

export default Header;
