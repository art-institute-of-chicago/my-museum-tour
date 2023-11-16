import React, { useState, useRef } from "react";

/**
 * @typedef {object} CappedInput
 *
 * @property {string} value - The current value of the input field
 * @property {function} onChange - The function to handle changes to the input field
 * @property {React.Ref} countRef - The ref to be assigned to the element that will display the character count
 * @property {number} charsRemaining - The number of characters remaining
 * @property {number} maxLength - The maximum number of characters allowed
 */

/**
 * @typedef {object} useCappedInputOptions
 *
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
  const { initialValue, maxLength, valueSetter } = options;
  const [value, setValue] = useState(initialValue || "");
  const countRef = useRef(null);
  const charsRemaining = maxLength - value.length;

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
      <span ref={countRef} aria-live="polite">
        ({charsRemaining}
        <span className="sr-only"> characters remaining</span>)
      </span>
    ),
  };
}

export default useCappedInput;
