import React from "react";
import CustomTourBuilder from "./CustomTourBuilder";
import { AppProvider } from "./contexts/AppContext";
import { SearchProvider } from "./contexts/SearchContext";

describe("<CustomTourBuilder />", () => {
  it("Renders", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider>
          <CustomTourBuilder />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-search").should("exist");
    cy.get("#aic-ct-metadata__title").should("exist");
    cy.get("#aic-ct-metadata__description").should("exist");
  });

  it("Can add a title and description for the tour", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider>
          <CustomTourBuilder />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-metadata__title").type("A tour title");
    cy.get("#aic-ct-metadata__description").type("A tour description");
    cy.get("label[for='aic-ct-metadata__title']").should(
      "have.text",
      "Tour Title (243 characters remaining)",
    );
    cy.get("label[for='aic-ct-metadata__description']").should(
      "have.text",
      "Tour Description (237 characters remaining)",
    );
  });

  it("Display an error message if there was a problem with the request", () => {
    cy.intercept("GET", "https://api.artic.edu/api/v1/artworks/search*", {
      statusCode: 500,
    }).as("500");

    cy.mount(
      <AppProvider>
        <SearchProvider>
          <CustomTourBuilder />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-search__input").type("test");
    cy.get("#aic-ct-search__button").click();
    cy.get("#aic-ct-search__error").should(
      "have.text",
      "Error fetching results",
    );
  });

  it("Can perform a search and show results", () => {
    // Use intercept to ping the search api and use the search.json fixture
    // but wait while we check the loading message
    cy.intercept("GET", "https://api.artic.edu/api/v1/artworks/search*", {
      fixture: "json/search.json",
      delayMs: 80,
    });

    cy.mount(
      <AppProvider>
        <SearchProvider>
          <CustomTourBuilder />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-search__input").type("test");
    cy.get("#aic-ct-search__button").click();
    cy.get("#aic-ct-search__loading").should("have.text", "Loading...");
    cy.get("#aic-ct-search__results").should("exist");
    cy.get("#aic-ct-search__results li").should("have.length", 10);
  });
});
