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
  return `${base}/${id}/${size}/${
    fit ? "!" : ""
  }${width},${height}/0/default.jpg`;
}

/**
 * Converts camel case string to snake case
 * @param {string} str - String to convert to snake case
 * @returns
 */
export function camelToSnakeCase(str) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
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
export function createSearchUrl(queryParams, hideFromTours) {
  // Build the query string
  // I've broken this up to make it easer to reason about and manipulate
  const url = new URL("https://api.artic.edu/api/v1/artworks/search");
  url.searchParams.set(
    "query[bool][must_not][][term][gallery_id][value]",
    "2147475902",
  );
  url.searchParams.set(
    "query[bool][should][0][bool][must][][exists][field]",
    "short_description",
  );
  url.searchParams.set(
    "query[bool][should][0][bool][must][][term][is_on_view][value]",
    "true",
  );
  url.searchParams.set(
    "query[bool][should][1][bool][must][][term][is_on_view]",
    "true",
  );
  url.searchParams.set(
    "query[bool][should][1][bool][must][][exists][field]",
    "description",
  );
  url.searchParams.set(
    "query[bool][should][1][bool][should][][exists][field]",
    "description",
  );
  url.searchParams.set(
    "query[bool][should][1][bool][should][][exists][field]",
    "subject_id",
  );
  url.searchParams.set(
    "query[bool][should][1][bool][should][][exists][field]",
    "style_id",
  );
  url.searchParams.set(
    "query[bool][should][1][bool][should][][term][is_boosted]",
    "true",
  );
  url.searchParams.set("query[bool][minimum_should_match]", "1");
  url.searchParams.set(
    "fields",
    "artist_title,short_description,description,id,image_id,thumbnail,title,date_display,gallery_title,gallery_id",
  );
  url.searchParams.set("limit", "60");
  url.searchParams.set("page", queryParams.page ?? 1);
  if (typeof queryParams.keywords !== "undefined") {
    url.searchParams.set("q", queryParams.keywords);
  }

  if (hideFromTours) {
    for (const val of Object.values(hideFromTours)) {
      url.searchParams.set(
        `query[bool][must_not][][term][id][value]=${val}`,
        val,
      );
    }
  }

  // Uniform treatment for subject, category, and style ids
  // This works for now, but we may need to tune this later
  for (const [key, value] of Object.entries(queryParams)) {
    if (key.includes("_ids")) {
      url.searchParams.set(`query[bool][must][][terms][${key}][]`, value);
    } else if (key.includes("_titles")) {
      url.searchParams.set(
        `query[bool][must][][terms][${key}.keyword][]`,
        value,
      );
    }
  }

  return url;
}

/**
 * Creates an array of numbers within the specified range
 * @param {number} start - The first number of the range
 * @param {number} end - The last numbef of the range
 * @returns {number[]}
 */
export function range(start, end) {
  return Array.from(Array(end), (_, index) => index + start);
}

/**
 * Wrapper for window.location.assign
 * Useful for stubbing during tests
 */
export const Location = {
  assign: (url) => window.location.assign(url),
};
