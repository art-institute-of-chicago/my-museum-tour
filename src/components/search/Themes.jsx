import React from "react";
import ThemeToggle from "./ThemeToggle";

/**
 * Themes
 */
function Themes() {
  const themes = [
    {
      label: "Landscapes",
      subjectId: "TM-8657",
      thumbnailId: "2d484387-2509-5e8e-2c43-22f9981972eb",
    },
    {
      label: "Fashion",
      subjectId: "TM-8663",
      thumbnailId: "b272df73-a965-ac37-4172-be4e99483637",
    },
    {
      label: "Mythology",
      subjectId: "TM-8766",
      thumbnailId: "ea8c5d62-6ce8-88e8-feb1-e0053cf534c5",
    },
    {
      label: "Animals",
      subjectId: "TM-12218",
      thumbnailId: "9ae64560-a416-ec19-851a-c76c5ca3c64f",
    },
    {
      label: "Chicago artists",
      categoryId: "PC-154",
      thumbnailId: "f7f9615d-2c2b-6b23-47b2-cd6cdc846504",
    },
    {
      label: "Essentials",
      categoryId: "PC-831",
      thumbnailId: "25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e",
    },
  ];

  return (
    <div>
      {themes.map((theme) => (
        <ThemeToggle
          key={theme.label}
          label={theme.label}
          subjectId={theme.subjectId}
          thumbnailId={theme.thumbnailId}
        />
      ))}
    </div>
  );
}

export default Themes;
