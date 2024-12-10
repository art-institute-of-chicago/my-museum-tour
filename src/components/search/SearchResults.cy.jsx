import React from "react";
import SearchResults from "./SearchResults";
import item from "../../../cypress/fixtures/json/item.json";
import { AppProvider } from "../../contexts/AppContext";
import { SearchProvider } from "../../contexts/SearchContext";

describe("<SearchResults />", () => {
  it("Renders initially empty", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider
          searchError={false}
          searchResultItems={null}
          searchFetching={false}
          pagination={null}
        >
          <SearchResults
            hideObjectsFromTours={[]}
            hideGalleriesFromTours={[]}
          />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get(".aic-ct-search-results").should("not.exist");
  });

  it("Renders error message", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider
          searchError={"Error loading results"}
          searchResultItems={null}
          searchFetching={false}
          pagination={null}
        >
          <SearchResults
            hideObjectsFromTours={[]}
            hideGalleriesFromTours={[]}
          />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-search-results__error").should(
      "have.text",
      "Error loading results",
    );
  });

  it("Renders loading message", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider
          searchError={false}
          searchResultItems={null}
          searchFetching={true}
          pagination={null}
        >
          <SearchResults
            hideObjectsFromTours={[]}
            hideGalleriesFromTours={[]}
          />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-search-results__loading").should("have.text", "Loading...");
  });

  it("Renders no results message", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider
          searchError={false}
          searchResultItems={[]}
          searchFetching={false}
          pagination={{ current_page: 1, total_pages: 1 }}
        >
          <SearchResults
            hideObjectsFromTours={[]}
            hideGalleriesFromTours={[]}
          />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-search-results__no-results").should("exist");
  });

  it("Renders a result", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider
          searchError={false}
          searchResultItems={[item]}
          searchFetching={false}
          pagination={{ current_page: 1, total_pages: 1 }}
        >
          <SearchResults
            hideObjectsFromTours={[]}
            hideGalleriesFromTours={[]}
          />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-search-results__items").should("exist");
    cy.get("#aic-ct-search-results__items li").should("have.length", 1);
  });
});
