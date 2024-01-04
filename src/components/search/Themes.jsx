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
        styleIds: ["TM-7543"],
      },
    },
    {
      label: "Essentials",
      thumbnailId: "b272df73-a965-ac37-4172-be4e99483637",
      searchParams: {
        themeTitle: "Essentials",
      },
    },
    {
      label: "Portraits",
      thumbnailId: "83375479-f7a9-bac3-44a8-e705ab6e423c",
      searchParams: {
        subjectIds: ["TM-8658"],
      },
    },
    {
      label: "Modernism",
      thumbnailId: "3ee54063-9d78-ee86-0103-b477d988a93f",
      searchParams: {
        styleIds: ["TM-5981"],
      },
    },
    {
      label: "Animals",
      thumbnailId: "e54a695c-16df-cf45-9dd4-b517e8c32cc3",
      searchParams: {
        subjectIds: ["TM-12218"],
      },
    },
  ];

  return (
    <>
      <header className="aic-ct-section-header">
        <h2 className="f-module-title-2">Browse by theme</h2>
      </header>
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
    </>
  );
}

export default Themes;
