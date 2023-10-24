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
      .should("have.attr", "type", "search")
      .should("have.attr", "placeholder", "Search")
      .should("have.attr", "required");
  });

  it("Validates as expected", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider>
          <SearchBar />
        </SearchProvider>
      </AppProvider>,
    );

    cy.get("#aic-ct-search__button").click();
    cy.get("input:invalid").should("have.length", 1);

    cy.get("#aic-ct-search__input")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "You must enter a search term",
        );
      })
      .type("test");
    cy.get("#aic-ct-search__input").then(($input) => {
      expect($input[0].validity.valid).to.eq(true);
    });
  });
});
