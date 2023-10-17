import React from "react";
import TourItems from "./TourItems";
import { AppProvider } from "../contexts/AppContext";
import tourItems from "../../cypress/fixtures/json/tourItems.json";

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
      "https://artic.edu/iiif/2/*/full/!240,240/0/default.jpg",
      (req) => {
        req.reply({
          fixture: `../../cypress/fixtures/images/image_${
            Math.floor(Math.random() * 10) + 1
          }.jpg`,
        });
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
