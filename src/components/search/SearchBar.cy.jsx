import React from "react";
import SearchBar from "./SearchBar";
import { AppProvider } from "../../contexts/AppContext";
import { SearchProvider } from "../../contexts/SearchContext";

describe("<SearchBar />", () => {
  it("Renders", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider>
          <SearchBar />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-search").should("have.attr", "role", "search");
    cy.get("#aic-ct-search__button").should("have.attr", "type", "submit");

    cy.get("#aic-ct-search__input")
      .should("have.attr", "type", "text")
      .should(
        "have.attr",
        "placeholder",
        "Search by keyword, artist, or title",
      );
  });

  it("Requests the correct URL when performing a keyword search", () => {
    cy.intercept("GET", "https://api.artic.edu/api/v1/artworks/search*", {
      fixture: "json/search.json",
      delayMs: 80,
    }).as("search");

    cy.mount(
      <AppProvider>
        <SearchProvider>
          <SearchBar />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-search__input").type("test");
    cy.get("#aic-ct-search__button").click();
    cy.get("@search").its("request.url").should("include", "q=test");
  });
});
