import React from "react";
import ThemeToggle from "./ThemeToggle";

/**
 * Themes
 */
function Themes() {
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
      thumbnailId: "83375479-f7a9-bac3-44a8-e705ab6e423c",
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
        theme_ids: ["PC-832"],
      },
    },
    {
      label: "Chicago Artists",
      thumbnailId: "62f2ca7a-8c22-bb7e-9e3d-7453652a3350",
      searchParams: {
        theme_ids: ["PC-154"],
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
      thumbnailId: "f7f9615d-2c2b-6b23-47b2-cd6cdc846504",
      searchParams: {
        theme_ids: ["PC-825"],
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
        />
      ))}
    </ul>
  );
}

export default Themes;
