import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import classNames from "classnames";
import { iiifUrl } from "../../utils";

function Slots() {
  const {
    tourItems,
    limits,
    iiifBaseUrl,
    setActiveNavPage,
    activeNavPage,
    headerPrevButtonRef,
  } = useContext(AppContext);

  const handleClick = () => {
    // Jump to customize page
    headerPrevButtonRef?.current?.focus();
    setActiveNavPage(1);
  };

  return (
    <ul className="aic-ct-header__slots">
      {Array.from({ length: limits.items.max }).map((_, index) => (
        <li
          className={classNames("aic-ct-header__slot", {
            "aic-ct-header__slot--active": tourItems[index],
            "aic-ct-header__slot--inactive": !tourItems[index],
          })}
          key={index}
        >
          <button
            type="button"
            disabled={!tourItems[index] || activeNavPage === 1}
            onClick={handleClick}
          >
            {tourItems[index] ? (
              <img
                src={iiifUrl(
                  iiifBaseUrl,
                  tourItems[index].image_id,
                  "40",
                  "40",
                  "square",
                )}
                width="40"
                height="40"
                alt=""
                className="aic-ct-header__slot"
                aria-label={`Artwork ${index}, edit on customize page`}
              />
            ) : (
              <span>{index}</span>
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Slots;