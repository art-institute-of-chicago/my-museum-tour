import React from "react";
import ThemeToggle from "./ThemeToggle";
import { AppProvider } from "../../contexts/AppContext";
import { SearchProvider } from "../../contexts/SearchContext";

describe("<Themes />", () => {
  it("Renders", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider>
          <ThemeToggle id="0" label="Test theme" subjectIds={["TM-8657"]} />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-theme-toggle-0").should("exist");
  });

  it("Requests the correct URL with subjectIds", () => {
    cy.intercept("GET", "https://api.artic.edu/api/v1/artworks/search*", {
      fixture: "json/search.json",
      delayMs: 80,
    }).as("search");

    cy.mount(
      <AppProvider>
        <SearchProvider>
          <ThemeToggle
            id="0"
            label="Test theme"
            searchParams={{ subject_ids: ["TM-8657"] }}
          />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-theme-toggle-0").click();
    cy.get("@search")
      .its("request.url")
      .should(
        "include",
        "query%5Bbool%5D%5Bmust%5D%5B%5D%5Bterms%5D%5Bsubject_ids%5D%5B%5D=TM-8657",
      );
  });

  it("Requests the correct URL with categoryIds", () => {
    cy.intercept("GET", "https://api.artic.edu/api/v1/artworks/search*", {
      fixture: "json/search.json",
      delayMs: 80,
    }).as("search");

    cy.mount(
      <AppProvider>
        <SearchProvider>
          <ThemeToggle
            id="0"
            label="Test theme"
            searchParams={{ category_ids: ["PC-154"] }}
          />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-theme-toggle-0").click();
    cy.get("@search")
      .its("request.url")
      .should(
        "include",
        "&query%5Bbool%5D%5Bmust%5D%5B%5D%5Bterms%5D%5Bcategory_ids%5D%5B%5D=PC-154",
      );
  });
});
