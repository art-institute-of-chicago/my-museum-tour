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
