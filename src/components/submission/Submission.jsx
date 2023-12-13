import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Location } from "../../utils";

/**
 * Submission
 */
function Submission() {
  const {
    apiSaveEndpoint,
    tourTitle,
    creatorName,
    creatorEmail,
    recipientName,
    marketingOptIn,
    validCreatorEmail,
    tourItems,
    tourDescription,
    validityIssues,
    setValidityIssues,
    limits,
    isSaving,
    setIsSaving,
    setActiveNavPage,
    unloadHandler,
  } = useContext(AppContext);
  const [saveResponse, setSaveResponse] = useState(null);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Post to the API
      const res = await fetch(`${apiSaveEndpoint}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          creatorEmail,
          marketingOptIn,
          tourJson: {
            title: tourTitle,
            creatorName,
            recipientName,
            description: tourDescription,
            // "artworks" is essentially everything from the GET response with added "objectNote"
            // The API expects these fields named in this way
            artworks: tourItems,
          },
        }),
      });
      // Circumstances where the response might be "not ok":
      // - Some kind of network error (e.g. no internet connection)
      // - Some kind of backend error (e.g. HTTP 500)
      // - User has manipulated the DOM/State (HTTP 422)
      // - Some of the items had missing data (shouldn't be possible) (HTTP 422)
      if (!res.ok) {
        throw new Error(
          "There was a problem saving your tour, please try again. If the problem persists, please contact us and let us know.",
        );
      }
      const { message, custom_tour } = await res.json();

      setSaveResponse({
        type: "success",
        message,
        id: custom_tour.id,
      });
    } catch (error) {
      setSaveResponse({
        type: "error",
        message: error.message,
      });
    }
    setIsSaving(false);
  };

  // Update validityIssues when tourTitle and tourItems change
  useEffect(() => {
    const newValidityIssues = [];
    if (!tourTitle.length) {
      newValidityIssues.push("A title is required");
    }

    if (tourTitle.length > limits.title) {
      newValidityIssues.push("Tour title must not exceed the character limit");
    }

    if (!validCreatorEmail) {
      newValidityIssues.push("A valid email address is required");
    }

    if (tourDescription.length > limits.description) {
      newValidityIssues.push(
        "Tour description must not exceed the character limit",
      );
    }

    if (tourItems.length < limits.items.min) {
      newValidityIssues.push("At least one item is required");
    }

    if (tourItems.length > limits.items.max) {
      newValidityIssues.push("Tours must not contain more than 6 artworks");
    }

    // These errors will only happen if the user has manipulated the DOM/State
    // Group note errors together rather than showing an error for each objectNote
    tourItems.some((item) => {
      if (item.objectNote?.length > limits.objectNote) {
        newValidityIssues.push("Notes must not exceed the character limit");
        return true; // effectively "break;"
      }
      return false;
    });

    setValidityIssues(newValidityIssues);
  }, [
    tourTitle,
    tourDescription,
    tourItems,
    setValidityIssues,
    limits,
    validCreatorEmail,
  ]);

  useEffect(() => {
    // When the user sucessfully saves their tour perform a redirect
    if (saveResponse?.id) {
      window.removeEventListener("beforeunload", unloadHandler);
      // Need to use wrapper function for our tests
      Location.assign(`/custom-tours/${saveResponse.id}`);
    }
  }, [saveResponse, unloadHandler]);

  return (
    <div className="aic-ct-validation">
      {validityIssues.length ? (
        <div
          id="aic-ct-validation__error"
          className="aic-ct-validation__error aic-ct-validation__content"
        >
          <h1 className="f-headline">Finish your tour?</h1>
          <p className="f-body">Fix these issue before finishing your tour:</p>
          <div
            id="aic-ct-validation__errors"
            className="aic-ct-validation__errors aic-ct-validation__content o-blocks"
          >
            <ul>
              {validityIssues.map((issue, index) => (
                <li className="f-body" key={index}>
                  {issue}
                </li>
              ))}
            </ul>
          </div>
          <div className="aic-ct-validation__actions">
            <button
              className="btn btn--secondary f-buttons"
              type="button"
              onClick={() => {
                if (!tourItems.length) {
                  // Go back to step one is no items added
                  setActiveNavPage(0);
                } else {
                  // Otherwise go to step two
                  setActiveNavPage(1);
                }
              }}
            >
              Go back
            </button>
          </div>
        </div>
      ) : (
        <div
          id="aic-ct-validation__saving"
          className="aic-ct-validation__content aic-ct-validation__saving"
          tabIndex="-1"
          aria-live="polite"
        >
          {isSaving && (
            <div className="aic-ct-loader f-body">
              <p>Saving...</p>
              <div className="loader"></div>
            </div>
          )}

          {!isSaving && !saveResponse && (
            <div
              id="aic-ct-validation__save"
              className="aic-ct-validation__save aic-ct-validation__content"
            >
              <h1 className="f-headline">
                Are you sure you want to submit your tour?
              </h1>
              <p className="f-body">
                You won&apos;t be able to edit it once this has been done.
                <br />
                Your tour will be automatically emailed to you when finished.
              </p>
              <div className="aic-ct-validation__actions">
                <button
                  id="aic-ct-save-button"
                  className="btn btn--primary f-buttons"
                  type="button"
                  onClick={handleSave}
                  disabled={isSaving}
                >
                  Yes, Save my tour
                </button>
                <button
                  className="btn btn--secondary f-buttons"
                  type="button"
                  onClick={() => {
                    setActiveNavPage(1);
                  }}
                >
                  No, go back and edit
                </button>
              </div>
            </div>
          )}

          {saveResponse &&
            ((saveResponse.type === "success" && (
              <div
                id="aic-ct-validation__success"
                className="aic-ct-validation__content"
              >
                <h1 className="f-headline">
                  Saved successfully!
                  <br /> Redirecting to your tour
                </h1>
              </div>
            )) ||
              (saveResponse.type === "error" && (
                <div
                  id="aic-ct-save-error"
                  className="aic-ct-validation__content"
                >
                  <h1 className="f-headline">Looks like there was a problem</h1>
                  <p className="f-body">{saveResponse.message}</p>
                  <div className="aic-ct-validation__actions">
                    <button
                      id="aic-ct-save-button"
                      className="btn btn--primary f-buttons"
                      type="button"
                      onClick={handleSave}
                      disabled={isSaving}
                    >
                      Try again
                    </button>
                  </div>
                </div>
              )))}
        </div>
      )}
    </div>
  );
}

export default Submission;
