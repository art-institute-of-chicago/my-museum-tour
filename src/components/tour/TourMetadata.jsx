import React, { useContext } from "react";
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

  const cappedTitle = useCappedInput({
    initialValue: tourTitle,
    maxLength: limits.title,
    valueSetter: setTourTitle,
  });
  const cappedCreatorName = useCappedInput({
    initialValue: creatorName,
    maxLength: limits.creatorName,
    valueSetter: setCreatorName,
  });
  const cappedRecipientName = useCappedInput({
    initialValue: recipientName,
    maxLength: limits.recipientName,
    valueSetter: setRecipientName,
  });
  const cappedDescription = useCappedInput({
    initialValue: tourDescription,
    maxLength: limits.description,
    valueSetter: setTourDescription,
  });

  return (
    <>
      <div>
        <label htmlFor="aic-ct-metadata__title">
          Tour Title {cappedTitle.counterEl}
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
          Your name <em>(optional)</em> {cappedCreatorName.counterEl}
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
          {cappedRecipientName.counterEl}
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
          Tour Description <em>(optional)</em> {cappedDescription.counterEl}
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
