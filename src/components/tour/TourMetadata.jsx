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
    setValidCreatorEmail,
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
    <fieldset className="m-fieldset">
      <ol className="m-fieldset__fieldset">
        <li className="m-fieldset__field o-blocks">
          <label htmlFor="aic-ct-metadata__title" className="label f-secondary">
            Tour Title *
          </label>
          <span className="input">
            <span className="input__io-container">
              <input
                className="f-secondary"
                type="text"
                onChange={cappedTitle.onChange}
                value={cappedTitle.value}
                id="aic-ct-metadata__title"
                maxLength={cappedTitle.maxLength}
                aria-required="true"
                required
              />
              {cappedTitle.counterEl}
            </span>
          </span>
        </li>
        <li className="m-fieldset__field o-blocks">
          <label
            htmlFor="aic-ct-metadata__creator-name"
            className="label f-secondary"
          >
            Your name&nbsp;<em>(optional)</em>
          </label>
          <span className="input">
            <span className="input__io-container">
              <input
                className="f-secondary"
                type="text"
                value={cappedCreatorName.value}
                onChange={cappedCreatorName.onChange}
                id="aic-ct-metadata__creator-name"
                maxLength={cappedCreatorName.maxLength}
              />
              {cappedCreatorName.counterEl}
            </span>
          </span>
        </li>
        <li className="m-fieldset__field o-blocks">
          <label
            htmlFor="aic-ct-metadata__creator-email"
            className="label f-secondary"
          >
            Your email *
          </label>
          <span className="input">
            <input
              className="f-secondary"
              type="email"
              value={creatorEmail.value}
              onChange={(e) => {
                setCreatorEmail(e.target.value);
                setValidCreatorEmail(e.target.validity.valid);
              }}
              id="aic-ct-metadata__creator-email"
              aria-required="true"
              required
            />
          </span>
        </li>
        <li className="m-fieldset__field o-blocks">
          <label
            htmlFor="aic-ct-metadata__recipient-name"
            className="label f-secondary"
          >
            Who is this tour for?&nbsp;<em>(optional)</em>
          </label>
          <span className="input">
            <span className="input__io-container">
              <input
                className="f-secondary"
                type="text"
                value={cappedRecipientName.value}
                onChange={cappedRecipientName.onChange}
                id="aic-ct-metadata__recipient-name"
                maxLength={cappedRecipientName.maxLength}
              />
              {cappedRecipientName.counterEl}
            </span>
          </span>
        </li>
        <li className="m-fieldset__field o-blocks">
          <label
            htmlFor="aic-ct-metadata__description"
            className="label f-secondary"
          >
            Tour Description&nbsp;<em>(optional)</em>
          </label>
          <span className="textarea">
            <span className="input__io-container">
              <textarea
                className="f-secondary"
                id="aic-ct-metadata__description"
                onChange={cappedDescription.onChange}
                rows="5"
                value={cappedDescription.value}
                maxLength={cappedDescription.maxLength}
              />
              {cappedDescription.counterEl}
            </span>
          </span>
        </li>
        <li className="m-fieldset__field o-blocks">
          <span className="checkbox f-secondary">
            <input
              type="checkbox"
              id="aic-ct-metadata__opt-in"
              value={marketingOptIn}
              name="aic-ct-metadata__opt-in"
              checked={marketingOptIn}
              onChange={(e) => {
                setMarketingOptIn(e.target.checked);
              }}
            />
            <span className="f-secondary">
              <label htmlFor="aic-ct-metadata__opt-in" className="label">
                I would like to recieve marketing emails from AIC
              </label>
            </span>
          </span>
        </li>
      </ol>
    </fieldset>
  );
}

export default TourMetadata;
