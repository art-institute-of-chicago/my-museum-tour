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
 * @typedef {Object} QueryParams
 * @property {string} keywords - Search keywords
 * @property {string[]} subjectIds - Array of subject ids
 * @property {string[]} categoryIds - Array of category ids
 */

/**
 * createSearchURL
 * Takes a QueryParams object and returns a URL object
 * @param {QueryParams} queryParams - QueryParams object with keywords and/or themes
 * @returns {URL} - URL object for API query
 */
export function createSearchUrl(queryParams) {
  // Build the query string
  // I've broken this up to make it easer to reason about and manipulate
  const url = new URL("https://api.artic.edu/api/v1/artworks/search");
  url.searchParams.set("query[bool][must][][term][is_on_view]", "true");
  url.searchParams.set("query[bool][must][][exists][field]", "description");
  url.searchParams.set("query[bool][should][][exists][field]", "description");
  url.searchParams.set("query[bool][should][][exists][field]", "subject_id");
  url.searchParams.set("query[bool][should][][exists][field]", "style_id");
  url.searchParams.set("query[bool][should][][term][is_boosted]", "true");
  url.searchParams.set("query[bool][minimum_should_match]", "1");
  url.searchParams.set(
    "fields",
    "artist_title,description,id,image_id,thumbnail,title,date_display",
  );
  url.searchParams.set("limit", "10");
  if (queryParams.keywords) {
    url.searchParams.set("q", queryParams.keywords);
  }
  if (queryParams.subjectIds) {
    url.searchParams.set(
      "query[bool][must][][terms][subject_ids][]",
      queryParams.subjectIds,
    );
  }
  if (queryParams.categoryIds) {
    url.searchParams.set(
      "query[bool][must][][term][category_ids][value]",
      queryParams.categoryIds,
    );
  }
  return url;
}
