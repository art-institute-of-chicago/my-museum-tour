import { useState, useRef } from "react";

/**
 * @typedef {object} CappedInput
 *
 * @property {string} value - The current value of the input field
 * @property {function} onChange - The function to handle changes to the input field
 * @property {React.Ref} countRef - The ref to be assigned to the element that will display the character count
 * @property {number} charsRemaining - The number of characters remaining
 */

/**
 * useCappedInput
 * Custom hook for handling input fields with a maximum character limit
 * @param {string} initialValue - The initial value of the input field
 * @param {number} maxLength - The maximum number of characters allowed
 * @returns {CappedInput}
 */

function useCappedInput(initialValue, maxLength) {
  const [value, setValue] = useState(initialValue || "");
  const countRef = useRef(null);

  const handleChange = (e) => {
    const { value: newValue } = e.target;

    // Let AT know things are in progress to limit excessive announcements while typing
    countRef.current.ariaBusy = true;
    setValue(newValue);
    // Let AT know things are done
    countRef.current.ariaBusy = false;
  };

  return {
    value,
    onChange: handleChange,
    countRef,
    charsRemaining: maxLength - value.length,
    maxLength,
  };
}

export default useCappedInput;
