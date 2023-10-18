import React from "react";
import TourItem from "./TourItem";
import { AppProvider } from "../contexts/AppContext";
import item from "../../cypress/fixtures/json/item.json";

describe("<TourItem />", () => {
  it("Renders", () => {
    cy.intercept(
      "GET",
      "https://artic.edu/iiif/2/test_image_id/full/!240,240/0/default.jpg",
      {
        fixture: `../../cypress/fixtures/images/image_${
          Math.floor(Math.random() * 10) + 1
        }.jpg`,
      },
    );
    cy.mount(
      <AppProvider>
        <TourItem key={item.id} itemData={item} />
      </AppProvider>,
    );
    cy.get("#aic-ct-tour__item-1").should("exist");
    cy.get("#aic-ct-tour__item-1 h2").should("have.text", "Test title");
    cy.get("#aic-ct-tour__item-1 img")
      .should(
        "have.attr",
        "src",
        "https://artic.edu/iiif/2/test_image_id/full/!240,240/0/default.jpg",
      )
      .should("have.attr", "alt", "Test image alt text");
  });
});
