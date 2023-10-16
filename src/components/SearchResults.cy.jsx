import React from "react";
import SearchResults from "./SearchResults";
import item from "../../cypress/fixtures/json/item.json";
import { AppProvider } from "../contexts/AppContext";
import { SearchProvider } from "../contexts/SearchContext";

describe("<SearchResults />", () => {
  it("Renders initially empty", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider
          searchError={false}
          searchResultItems={null}
          searchFetching={false}
        >
          <SearchResults />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-search__results").should("not.exist");
  });

  it("Renders loading message", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider
          searchError={false}
          searchResultItems={null}
          searchFetching={true}
        >
          <SearchResults />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-search__loading").should("have.text", "Loading...");
  });

  it("Renders a result", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider
          searchError={false}
          searchResultItems={[item]}
          searchFetching={false}
        >
          <SearchResults />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-search__results").should("exist");
    cy.get("#aic-ct-search__results li").should("have.length", 1);
  });

  it("Renders error message", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider
          searchError={"Error loading results"}
          searchResultItems={null}
          searchFetching={false}
        >
          <SearchResults />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-search__error").should(
      "have.text",
      "Error loading results",
    );
  });
});
