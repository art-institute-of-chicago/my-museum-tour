import React from "react";
import SearchBar from "./SearchBar";

describe("<SearchBar />", () => {
  it("Renders", () => {
    cy.mount(
      <SearchBar
        searchQuery={""}
        setSearchQuery={() => {}}
        setSearchResultItems={() => {}}
        setSearchError={() => {}}
        setSearchFetching={() => {}}
        setIiifBaseUrl={() => {}}
      />,
    );
    cy.get("#aic-ct-search").should("have.attr", "role", "search");
    cy.get("#aic-ct-search__input")
      .should("have.attr", "type", "search")
      .should("have.attr", "placeholder", "Search")
      .should("have.attr", "required");
    cy.get("#aic-ct-search__button").should("have.attr", "type", "submit");
  });
});
