import React from "react";
import SearchResults from "./SearchResults";
import item from "../../../cypress/fixtures/json/item.json";
import { AppProvider } from "../../contexts/AppContext";
import { SearchProvider } from "../../contexts/SearchContext";

const pagination = { current_page: 1, total_pages: 2 };

describe("<Pagination />", () => {
  it("Renders", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider
          searchError={null}
          searchFetching={false}
          searchResultItems={[item]}
          pagination={pagination}
        >
          <SearchResults />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get(".m-paginator").should("exist");
  });

  it("Does not render with less than 2 pages", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider
          searchError={null}
          searchFetching={false}
          searchResultItems={[item]}
          pagination={{ current_page: 1, total_pages: 1 }}
        >
          <SearchResults />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get(".m-paginator").should("not.exist");
  });

  it("Displays Previous and Next buttons", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider
          searchError={null}
          searchFetching={false}
          searchResultItems={[item]}
          pagination={pagination}
        >
          <SearchResults />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get(".m-paginator__prev-next").should("exist");
    cy.get(".m-paginator__prev-next li").should("have.length", 2);
    cy.get(".m-paginator__prev").should("have.text", "Previous");
    cy.get(".m-paginator__next").should("have.text", "Next");
  });

  it("Displays page buttons", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider
          searchError={null}
          searchFetching={false}
          searchResultItems={[item]}
          pagination={pagination}
        >
          <SearchResults />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get(".m-paginator__pages li").should(
      "have.length",
      pagination.total_pages,
    );
  });
});
