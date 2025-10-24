import React from "react";
import ThemeToggle from "./ThemeToggle";
import PropTypes from "prop-types";

/**
 * Themes
 */
function Themes(props) {
  const { hideObjectsFromTours, hideGalleriesFromTours } = props;

  // TODO: There's interest in having this in some way configurable
  // Best way to achieve this is TBD
  const themes = [
    {
      label: "Impressionism",
      thumbnailId: "a38e2828-ec6f-ece1-a30f-70243449197b",
      searchParams: {
        style_ids: ["TM-7543"],
      },
    },
    {
      label: "Essentials",
      thumbnailId: "b272df73-a965-ac37-4172-be4e99483637",
      searchParams: {
        category_ids: ["PC-831"],
      },
    },
    {
      label: "Portraits",
      thumbnailId: "3eaab3a3-2b47-9fdd-121c-050f6b8d9ccb",
      searchParams: {
        subject_ids: ["TM-8658"],
      },
    },
    {
      label: "Modernism",
      thumbnailId: "3ee54063-9d78-ee86-0103-b477d988a93f",
      searchParams: {
        style_ids: ["TM-5981"],
      },
    },
    {
      label: "Animals",
      thumbnailId: "e54a695c-16df-cf45-9dd4-b517e8c32cc3",
      searchParams: {
        subject_ids: ["TM-12218"],
      },
    },
    {
      label: "Drinking and Dining",
      thumbnailId: "a2f4085a-6715-212a-c5fa-aa88a4692df0",
      searchParams: {
        theme_titles: ["Drinking and Dining"],
      },
    },
    {
      label: "Chicago Artists",
      thumbnailId: "cd6c543d-a649-8f25-d224-6d22e7f86dcd",
      searchParams: {
        theme_titles: ["Chicago Artists"],
      },
    },
    {
      label: "Ancient",
      thumbnailId: "677cb9ce-8e4c-119a-711e-9b5a98c834d9",
      searchParams: {
        style_ids: ["TM-8542"],
      },
    },
    {
      label: "Women Artists",
      thumbnailId: "33d04b6a-3ebe-f577-444c-969cb208ad8d",
      searchParams: {
        theme_titles: ["Women artists"],
      },
    },
  ];

  return (
    <ul id="aic-ct-themes" className="aic-ct-themes">
      {themes.map((theme, index) => (
        <ThemeToggle
          key={theme.label}
          id={index}
          label={theme.label}
          thumbnailId={theme.thumbnailId}
          searchParams={theme.searchParams}
          hideObjectsFromTours={hideObjectsFromTours}
          hideGalleriesFromTours={hideGalleriesFromTours}
        />
      ))}
    </ul>
  );
}

Themes.propTypes = {
  hideObjectsFromTours: PropTypes.array,
  hideGalleriesFromTours: PropTypes.array,
};

export default Themes;
