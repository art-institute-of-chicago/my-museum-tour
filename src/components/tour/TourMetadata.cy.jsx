import React from "react";
import TourMetadata from "./TourMetadata";
import { AppProvider } from "../../contexts/AppContext";

describe("<TourMetadata />", () => {
  it("Renders", () => {
    cy.mount(
      <AppProvider>
        <TourMetadata />
      </AppProvider>,
    );
    cy.get("#aic-ct-metadata__title").should("exist");
    cy.get("#aic-ct-metadata__title + output").should(
      "contain.text",
      "(100 characters remaining)",
    );
    cy.get("#aic-ct-metadata__description").should("exist");
    cy.get("#aic-ct-metadata__description + output").should(
      "contain.text",
      "(255 characters remaining)",
    );

    // Check invalid messages are shown
    cy.get("#aic-ct-metadata__invalid-title").should("exist");
    cy.get("#aic-ct-metadata__invalid-email").should("exist");
  });

  it("Can update each field", () => {
    const titleText = "Maecenas vulputate, ligula id tincidunt.";
    const descriptionText = "Morbi pretium rhoncus libero massa nunc.";

    cy.mount(
      <AppProvider>
        <TourMetadata />
      </AppProvider>,
    );
    // This is 40 characters including spaces and punctuation
    cy.get("#aic-ct-metadata__title").type(titleText, { delay: 0 });
    cy.get("#aic-ct-metadata__invalid-title").should("not.exist");

    cy.get("#aic-ct-metadata__creator-name").type("Jon", { delay: 0 });
    cy.get("#aic-ct-metadata__creator-email").type("jonw@coghack.com");
    cy.get("#aic-ct-metadata__invalid-email").should("not.exist");

    cy.get("#aic-ct-metadata__recipient-name").type("Luke");

    // This is 40 characters including spaces and punctuation
    cy.get("#aic-ct-metadata__description").type(descriptionText, { delay: 0 });
    // 100 - 40 = 60
    cy.get("#aic-ct-metadata__title + output").should(
      "contain.text",
      "(60 characters remaining)",
    );
    // 255 - 40 = 215
    cy.get("#aic-ct-metadata__description + output").should(
      "contain.text",
      "(215 characters remaining)",
    );
    cy.get("#aic-ct-metadata__title").should(
      "have.value",
      titleText.slice(0, 40),
    );
    cy.get("#aic-ct-metadata__description").should(
      "have.value",
      descriptionText.slice(0, 40),
    );

    cy.get("#aic-ct-metadata__opt-in").check().should("be.checked");
  });

  it("Can add the maxLength text to an input field", () => {
    const titleText =
      "Suspendisse posuere facilisis dignissim. Quisque feugiat dolor justo. Quisque nec interdum liberose.";

    cy.mount(
      <AppProvider>
        <TourMetadata />
      </AppProvider>,
    );
    // This is 100 characters including spaces and punctuation
    cy.get("#aic-ct-metadata__title").type(titleText, { delay: 0 });

    cy.get("#aic-ct-metadata__title + output").should(
      "contain.text",
      "(0 characters remaining)",
    );
    cy.get("#aic-ct-metadata__title").should("have.value", titleText);
  });

  it("Will stop allowing input after the maxLength", () => {
    const titleText =
      "Nullam aliquet fringilla dolor, vitae malesuada massa rutrum eget. Quisque sed nibh augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque tristique finibus sapien, condimentum condimentum magna biam.";

    cy.mount(
      <AppProvider>
        <TourMetadata />
      </AppProvider>,
    );
    // This is 257 characters including spaces and punctuation
    cy.get("#aic-ct-metadata__title").type(titleText, { delay: 0 });
    // 100 - 257 = -157 (0)
    cy.get("#aic-ct-metadata__title + output").should(
      "contain.text",
      "(0 characters remaining)",
    );
    cy.get("#aic-ct-metadata__title").should(
      "have.value",
      titleText.slice(0, 100),
    );
  });
});
