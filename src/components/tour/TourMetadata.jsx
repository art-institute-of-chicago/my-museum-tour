import React, { useContext, useRef } from "react";
import { AppContext } from "../../contexts/AppContext";
import useCappedInput from "../../hooks/useCappedInput";
import { triggerCustomEvent } from "@area17/a17-helpers";

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
    validCreatorEmail,
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

  let hasCreatorName = useRef(false);
  let hasRecipientName = useRef(false);

  const handleCreatorName = (name) => {
    if (hasCreatorName.current == (name === "")) {
      hasCreatorName.current = !hasCreatorName.current;
      triggerCustomEvent(document, "gtm:push", {
        event: "mmt_personalization",
        fieldPopulated: hasCreatorName.current,
      });
    }
    setCreatorName(name);
  };

  const handleRecipientName = (name) => {
    if (hasRecipientName.current == (name === "")) {
      hasRecipientName.current = !hasRecipientName.current;
      triggerCustomEvent(document, "gtm:push", {
        event: "mmt_tribute",
        fieldPopulated: hasRecipientName.current,
      });
    }
    setRecipientName(name);
  };

  const handleMarketingOptIn = (isOptedIn) => {
    triggerCustomEvent(document, "gtm:push", {
      event: "mmt_email_optin",
      optInStatus: isOptedIn,
    });
    setMarketingOptIn(isOptedIn);
  };

  const cappedTitle = useCappedInput({
    initialValue: tourTitle,
    maxLength: limits.title,
    valueSetter: setTourTitle,
  });
  const cappedCreatorName = useCappedInput({
    initialValue: creatorName,
    maxLength: limits.creatorName,
    valueSetter: handleCreatorName,
  });
  const cappedRecipientName = useCappedInput({
    initialValue: recipientName,
    maxLength: limits.recipientName,
    valueSetter: handleRecipientName,
  });
  const cappedDescription = useCappedInput({
    initialValue: tourDescription,
    maxLength: limits.description,
    valueSetter: setTourDescription,
  });

  return (
    <fieldset className="m-fieldset aic-ct-fieldset">
      <ol className="m-fieldset__fieldset">
        <li className="m-fieldset__field o-blocks">
          <label htmlFor="aic-ct-metadata__title" className="label f-secondary">
            Tour Title <span aria-hidden="true">&nbsp;*</span>
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
                aria-invalid={cappedTitle.value ? "false" : "true"}
                aria-describedby={
                  !cappedTitle.value ? "aic-ct-metadata__invalid-title" : null
                }
                required
              />
              {cappedTitle.counterEl}
            </span>
            {!cappedTitle.value && (
              <span
                id="aic-ct-metadata__invalid-title"
                className="error-msg f-secondary"
              >
                Please enter a title for your tour
              </span>
            )}
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
            Your email <span aria-hidden="true">&nbsp;*</span>
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
              aria-invalid={creatorEmail.value ? "false" : "true"}
              aria-describedby={
                !creatorEmail.isValid ? "aic-ct-metadata__invalid-email" : null
              }
              required
            />
            {!validCreatorEmail && (
              <span
                id="aic-ct-metadata__invalid-email"
                className="error-msg f-secondary"
              >
                Please enter a valid email address
              </span>
            )}
          </span>
        </li>
        <li className="m-fieldset__field o-blocks">
          <label
            htmlFor="aic-ct-metadata__recipient-name"
            className="label f-secondary"
          >
            If you are making this tour for someone else, add their name
            below&nbsp;<em>(optional)</em>
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
                handleMarketingOptIn(e.target.checked);
              }}
            />
            <span className="f-body">
              <label htmlFor="aic-ct-metadata__opt-in" className="label">
                Keep me in the loop. Please send me emails about exhibitions and
                events at the Art Institute of Chicago.
              </label>
            </span>
          </span>
          <a
            href="/terms#privacy-policy"
            target="_blank"
            className="external-link f-link"
          >
            Read our privacy policy
            <svg aria-hidden="true" className="icon--new-window">
              <use xlinkHref="#icon--new-window" />
            </svg>
          </a>
        </li>
      </ol>
    </fieldset>
  );
}

export default TourMetadata;
