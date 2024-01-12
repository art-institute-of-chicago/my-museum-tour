import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import classNames from "classnames";
import { iiifUrl } from "../../utils";

function Slots() {
  const { tourItems, limits, iiifBaseUrl } = useContext(AppContext);

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
          <button type="button" disabled={!tourItems[index]}>
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
                aria-label="Customize your tour"
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
