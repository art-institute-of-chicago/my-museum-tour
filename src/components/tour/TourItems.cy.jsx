import React from "react";
import TourItems from "./TourItems";
import { AppProvider } from "../../contexts/AppContext";
import tourItems from "../../../cypress/fixtures/json/tourItems.json";

describe("<TourItems />", () => {
  it("Doesn't render markup without items", () => {
    cy.mount(
      <AppProvider>
        <TourItems />
      </AppProvider>,
    );
    cy.get("#aic-ct-tour__heading").should("not.exist");
    cy.get("#aic-ct-tour__results").should("not.exist");
  });

  it("Renders with items", () => {
    cy.intercept(
      "GET",
      "https://artic.edu/iiif/2/89300e26-55e8-ca20-9422-24c721192216/full/!240,240/0/default.jpg",
      {
        fixture: `../../cypress/fixtures/images/image_4.jpg`,
      },
    );
    cy.intercept(
      "GET",
      "https://artic.edu/iiif/2/3e61c05a-fb22-6703-cc41-d4334000fb7e/full/!240,240/0/default.jpg",
      {
        fixture: `../../cypress/fixtures/images/image_5.jpg`,
      },
    );
    cy.intercept(
      "GET",
      "https://artic.edu/iiif/2/c37cfb73-5985-e622-2346-90d3df8aba34/full/!240,240/0/default.jpg",
      {
        fixture: `../../cypress/fixtures/images/image_6.jpg`,
      },
    );

    cy.mount(
      <AppProvider tourItems={tourItems}>
        <TourItems />
      </AppProvider>,
    );
    cy.get("#aic-ct-tour__heading").should("exist");
    cy.get("#aic-ct-tour__results").should("exist");
    cy.get("#aic-ct-tour__results li").should("have.length", 3);
  });
});
