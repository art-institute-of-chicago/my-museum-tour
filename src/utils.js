/**
 * iiifUrl
 * Takes various parameters and returns a IIIF image url as a string
 *
 * @param {string} base - Base url for IIIF image server
 * @param {string} id - IIIF image id
 * @param {string|number} width - Width of image
 * @param {string|number} height - Height of image
 * @param {string} size - Size of image
 * @param {boolean} fit - Use ! for fit
 * @returns {string}
 */
export function iiifUrl(
  base,
  id,
  width = "",
  height = "",
  size = "full",
  fit = true,
) {
  return `${base}/${id}/${size}/${fit && "!"}${width},${height}/0/default.jpg`;
}

/**
 * Characters Remaining
 * Takes a string and a maximum length and returns the number of characters remaining
 *
 * @param {string} string - the string to be checked
 * @param {number} maxLength - the maximum length of the string
 * @returns {number} - the number of characters remaining
 */
export function charactersRemaining(string, maxLength) {
  return maxLength - string.length;
}
