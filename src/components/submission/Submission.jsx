import React, { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";

/**
 * Submission
 */
function Submission() {
  const {
    tourTitle,
    tourItems,
    tourDescription,
    validityIssues,
    setValidityIssues,
    limits,
  } = useContext(AppContext);

  // Update validityIssues when tourTitle and tourItems change
  useEffect(() => {
    const newValidityIssues = [];
    if (!tourTitle.length) {
      newValidityIssues.push("A title is required");
    }
    if (tourItems.length < limits.items.min) {
      newValidityIssues.push("At least one item is required");
    }

    // These errors will only happen if the user has manipulated the DOM/State
    tourItems.forEach((item) => {
      if (item.note.length > limits.note) {
        newValidityIssues.push("Notes must not exceed the character limit");
      }
    });

    if (tourTitle.length > limits.title) {
      newValidityIssues.push("Tour title must not exceed the character limit");
    }

    if (tourDescription.length > limits.description) {
      newValidityIssues.push(
        "Tour description must not exceed the character limit",
      );
    }

    if (tourItems.length > limits.items.max) {
      newValidityIssues.push("Tours must not contain more than 6 items");
    }

    setValidityIssues(newValidityIssues);
  }, [tourTitle, tourDescription, tourItems, setValidityIssues, limits]);

  return (
    <>
      <h2>Submit your tour</h2>
      {validityIssues.length ? (
        <>
          <p>Fix these issue before submitting your tour:</p>
          {validityIssues.length && (
            <ul>
              {validityIssues.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <p>
          Are you sure you want to submit your tour? You won't be able to make
          any more changes after this stage
        </p>
      )}
    </>
  );
}

export default Submission;
