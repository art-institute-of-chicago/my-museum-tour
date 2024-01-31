import React from "react";
import SearchPreview from "./SearchPreview";
import { AppProvider } from "../../contexts/AppContext";
import { SearchProvider } from "../../contexts/SearchContext";
import item from "../../../cypress/fixtures/json/item.json";

describe("<SearchPreview />", () => {
  it("Renders", () => {
    cy.intercept(
      "GET",
      "https://artic.edu/iiif/2/*/full/*/0/default.jpg",
      (req) => {
        req.reply({
          fixture: `../../cypress/fixtures/images/image_1.jpg`,
        });
      },
    ).as("images");
    cy.mount(
      <AppProvider>
        <SearchProvider searchResultItems={[item]} searchPreviewId={item.id}>
          <SearchPreview />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-preview__content").should("exist");
  });
  it("Can add and remove itself from a tour", () => {
    cy.intercept(
      "GET",
      "https://artic.edu/iiif/2/*/full/*/0/default.jpg",
      (req) => {
        req.reply({
          fixture: `../../cypress/fixtures/images/image_1.jpg`,
        });
      },
    ).as("images");
    cy.mount(
      <AppProvider>
        <SearchProvider searchResultItems={[item]} searchPreviewId={item.id}>
          <SearchPreview />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-preview__action-button-1")
      .should("have.text", "Add to your tour")
      .click()
      .should("have.text", "Remove from your tour");
  });
});
