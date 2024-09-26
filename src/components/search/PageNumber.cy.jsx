import React from "react";
import SearchResults from "./SearchResults";
import Pagination from "./Pagination";
import item from "../../../cypress/fixtures/json/item.json";
import { AppProvider } from "../../contexts/AppContext";
import { SearchProvider } from "../../contexts/SearchContext";

const pagination = { current_page: 1, total_pages: 2 };

describe("<PageNumber />", () => {
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
    cy.get(".m-paginator__page").should("have.length", pagination.total_pages);
  });

  it("Highlights the current page", () => {
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
    cy.get(".s-active .m-paginator__page").should(
      "have.text",
      pagination.current_page,
    );
  });

  it("Updates the page when another page is clicked", () => {
    const goToPage = cy.stub().as("goToPage");
    cy.mount(
      <AppProvider>
        <SearchProvider
          searchError={null}
          searchFetching={false}
          searchResultItems={[item]}
          pagination={pagination}
        >
          <Pagination goToPage={goToPage} />
        </SearchProvider>
      </AppProvider>,
    );
    const pageOne = cy.get(".m-paginator__page").first();
    const pageTwo = cy.get(".m-paginator__page").last();
    pageOne.click();
    cy.get("@goToPage").should("not.be.called");
    pageTwo
      .click()
      .invoke("text")
      .then((page_number) => {
        cy.get("@goToPage").should("be.calledOnceWith", parseInt(page_number));
      });
  });
});
