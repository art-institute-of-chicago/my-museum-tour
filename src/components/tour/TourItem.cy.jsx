import React from "react";
import TourItem from "./TourItem";
import { AppProvider } from "../../contexts/AppContext";
import item from "../../../cypress/fixtures/json/item.json";

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
        <TourItem
          key={item.id}
          itemData={item}
          itemIndex={0}
          setRemoveButtons={() => {}}
          setShouldAssignFocus={() => {}}
        />
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

  it("Updates the character count", () => {
    cy.mount(
      <AppProvider>
        <TourItem
          key={item.id}
          itemData={item}
          itemIndex={0}
          setRemoveButtons={() => {}}
          setShouldAssignFocus={() => {}}
        />
      </AppProvider>,
    );
    cy.get("label[for=aic-ct-note-1]").should(
      "have.text",
      "Personal note (255 characters remaining)",
    );
    cy.get("#aic-ct-note-1").should("exist").type("Lorem ipsum dolor sit amet");
    cy.get("label[for=aic-ct-note-1]").should(
      "have.text",
      "Personal note (229 characters remaining)",
    );
  });

  it("Doesn't allow more than the character limit", () => {
    const noteText =
      "Nullam aliquet fringilla dolor, vitae malesuada massa rutrum eget. Quisque sed nibh augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque tristique finibus sapien, condimentum condimentum magna biam.";

    cy.mount(
      <AppProvider>
        <TourItem
          key={item.id}
          itemData={item}
          itemIndex={0}
          setRemoveButtons={() => {}}
          setShouldAssignFocus={() => {}}
        />
      </AppProvider>,
    );
    // This is 257 characters including spaces and punctuation
    cy.get("#aic-ct-note-1").type(noteText, { delay: 0 });

    // 255 - 257 = -2 (0)
    cy.get('label[for="aic-ct-note-1"]').should(
      "have.text",
      "Personal note (0 characters remaining)",
    );
    cy.get("#aic-ct-note-1").should("have.value", noteText.slice(0, 255));
  });
});
