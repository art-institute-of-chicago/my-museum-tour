import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import useCappedInput from "../../hooks/useCappedInput";

/**
 * TourMetadata
 * Title and description of the tour
 */

function TourMetadata() {
  const {
    tourTitle,
    setTourTitle,
    creatorEmail,
    setCreatorEmail,
    creatorName,
    setCreatorName,
    recipientName,
    setRecipientName,
    marketingOptIn,
    setMarketingOptIn,
    tourDescription,
    setTourDescription,
    limits,
  } = useContext(AppContext);
  // You may wish to make this smaller for debugger
  const cappedTitle = useCappedInput(tourTitle, limits.title);
  const cappedCreatorName = useCappedInput(creatorName, limits.creatorName);
  const cappedRecipientName = useCappedInput(
    recipientName,
    limits.recipientName,
  );
  const cappedDescription = useCappedInput(tourDescription, limits.description);

  // Update values in context when capped input changes
  useEffect(() => {
    setTourTitle(cappedTitle.value);
  }, [cappedTitle, setTourTitle]);

  useEffect(() => {
    setCreatorName(cappedCreatorName.value);
  }, [cappedCreatorName, setCreatorName]);

  useEffect(() => {
    setRecipientName(cappedRecipientName.value);
  }, [cappedRecipientName, setRecipientName]);

  useEffect(() => {
    setTourDescription(cappedDescription.value);
  }, [cappedDescription, setTourDescription]);

  return (
    <>
      <div>
        <label htmlFor="aic-ct-metadata__title">
          Tour Title{" "}
          <span ref={cappedTitle.countRef} aria-live="polite">
            ({cappedTitle.charsRemaining}
            <span className="sr-only"> characters remaining</span>)
          </span>
        </label>
        <br />
        <input
          type="text"
          onChange={cappedTitle.onChange}
          value={cappedTitle.value}
          id="aic-ct-metadata__title"
          maxLength={cappedTitle.maxLength}
          aria-required="true"
          required
        />
      </div>

      <div>
        <label htmlFor="aic-ct-metadata__creator-name">
          Your name <em>(optional)</em>{" "}
          <span ref={cappedCreatorName.countRef} aria-live="polite">
            ({cappedCreatorName.charsRemaining}
            <span className="sr-only"> characters remaining</span>)
          </span>
        </label>
        <br />
        <input
          type="text"
          value={cappedCreatorName.value}
          onChange={cappedCreatorName.onChange}
          id="aic-ct-metadata__creator-name"
          maxLength={cappedCreatorName.maxLength}
        />
      </div>

      <div>
        <label htmlFor="aic-ct-metadata__creator-email">Your email</label>
        <br />
        <input
          type="email"
          value={creatorEmail.value}
          onChange={(e) => {
            setCreatorEmail(e.target.value);
          }}
          id="aic-ct-metadata__creator-email"
          aria-required="true"
          required
        />
      </div>

      <div>
        <label htmlFor="aic-ct-metadata__recipient-name">
          Who is this tour for? <em>(optional)</em>{" "}
          <span ref={cappedRecipientName.countRef} aria-live="polite">
            ({cappedRecipientName.charsRemaining}
            <span className="sr-only"> characters remaining</span>)
          </span>
        </label>
        <br />
        <input
          type="text"
          value={cappedRecipientName.value}
          onChange={cappedRecipientName.onChange}
          id="aic-ct-metadata__recipient-name"
          maxLength={cappedRecipientName.maxLength}
        />
      </div>

      <div>
        <label htmlFor="aic-ct-metadata__description">
          Tour Description <em>(optional)</em>{" "}
          <span ref={cappedDescription.countRef} aria-live="polite">
            ({cappedDescription.charsRemaining}
            <span className="sr-only"> characters remaining</span>)
          </span>
        </label>
        <br />
        <textarea
          id="aic-ct-metadata__description"
          onChange={cappedDescription.onChange}
          rows="5"
          value={cappedDescription.value}
          maxLength={cappedDescription.maxLength}
        />
      </div>

      <div>
        <input
          type="checkbox"
          id="aic-ct-metadata__opt-in"
          checked={marketingOptIn}
          onChange={(e) => {
            setMarketingOptIn(e.target.checked);
          }}
        />
        <label htmlFor="aic-ct-metadata__opt-in">
          I would like to recieve marketing emails from AIC
        </label>
      </div>
    </>
  );
}

export default TourMetadata;
