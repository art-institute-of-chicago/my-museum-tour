import React, { useState, useRef } from "react";
import { containsMarkup, markupErrorMessage } from "../utils";

/**
 * @typedef {object} CappedInput
 *
 * @property {string} value - The current value of the input field
 * @property {function} onChange - The function to handle changes to the input field
 * @property {React.Ref} countRef - The ref to be assigned to the element that will display the character count
 * @property {number} charsRemaining - The number of characters remaining
 * @property {number} maxLength - The maximum number of characters allowed
 * @property {boolean} hasMarkup - Whether the value contains disallowed HTML
 * @property {string} markupErrorId - The id of the markup error element (for aria-describedby)
 * @property {React.ReactElement|null} markupErrorEl - The markup error element, or null if the value is valid
 */

/**
 * @typedef {object} useCappedInputOptions
 *
 * @property {string} id - The id of the input field, used to derive the error message id
 * @property {string} initialValue - The initial value of the input field
 * @property {number} maxLength - The maximum number of characters allowed
 * @property {function} valueSetter - The function to set the value of the input field (i.e. external set state function)
 */

/**
 * useCappedInput
 * Custom hook for handling input fields with a maximum character limit
 * @param {useCappedInputOptions} options
 * @returns {CappedInput}
 */

function useCappedInput(options = {}) {
  const { id, initialValue, maxLength, valueSetter } = options;
  const [value, setValue] = useState(initialValue || "");
  const countRef = useRef(null);
  const charsRemaining = maxLength - value.length;
  const hasMarkup = containsMarkup(value);
  const markupErrorId = `${id}-invalid-markup`;

  const handleChange = (e) => {
    const { value: newValue } = e.target;

    // Let AT know things are in progress to limit excessive announcements while typing
    countRef.current.ariaBusy = true;
    // Set the internal state
    setValue(newValue);
    // Set the external state if a setter was provided
    if (valueSetter) {
      valueSetter(newValue);
    }
    // Let AT know things are done
    countRef.current.ariaBusy = false;
  };

  return {
    value,
    onChange: handleChange,
    countRef,
    charsRemaining,
    maxLength,
    counterEl: (
      <output ref={countRef}>
        ({charsRemaining}
        <span className="sr-only"> characters remaining</span>)
      </output>
    ),
    hasMarkup,
    markupErrorId,
    markupErrorEl: hasMarkup ? (
      <span id={markupErrorId} className="error-msg f-secondary">
        {markupErrorMessage}
      </span>
    ) : null,
  };
}

export default useCappedInput;
