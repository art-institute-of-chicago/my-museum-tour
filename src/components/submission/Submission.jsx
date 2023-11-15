import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";

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
      const { message } = await res.json();

      setSaveResponse({
        type: "success",
        message,
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
      if (item.objectNote.length > limits.objectNote) {
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

  return (
    <>
      <h2>Submit your tour</h2>
      {validityIssues.length ? (
        <>
          <p>Fix these issue before submitting your tour:</p>
          {validityIssues.length && (
            <ul id="aic-ct-validation-errors">
              {validityIssues.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <div id="aic-ct-validation-success">
          <div tabIndex="-1" aria-live="polite">
            {isSaving && <p>Saving...</p>}

            {!isSaving && !saveResponse && (
              <>
                <p>
                  Are you sure you want to submit your tour? You won&apos;t be
                  able to make any more changes after this stage
                </p>
                <button
                  id="aic-ct-save-button"
                  type="button"
                  onClick={handleSave}
                  disabled={isSaving}
                >
                  Save my tour
                </button>
              </>
            )}

            {saveResponse &&
              ((saveResponse.type === "success" && (
                <div id="aic-ct-save-success">
                  <p>{saveResponse.message}</p>
                </div>
              )) ||
                (saveResponse.type === "error" && (
                  <div id="aic-ct-save-error">
                    <p>{saveResponse.message}</p>
                    <button
                      id="aic-ct-save-button"
                      type="button"
                      onClick={handleSave}
                      disabled={isSaving}
                    >
                      Save my tour
                    </button>
                  </div>
                )))}
          </div>
        </div>
      )}
    </>
  );
}

export default Submission;
