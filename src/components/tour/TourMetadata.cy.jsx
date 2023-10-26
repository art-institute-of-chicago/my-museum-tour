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
    cy.get("#aic-ct-metadata__description").should("exist");
    cy.get('label[for="aic-ct-metadata__title"]').should(
      "have.text",
      "Tour Title (255 characters remaining)",
    );
    cy.get('label[for="aic-ct-metadata__description"]').should(
      "have.text",
      "Tour Description (255 characters remaining)",
    );
  });

  it("Can add short text to each field", () => {
    const titleText = "Maecenas vulputate, ligula id tincidunt.";
    const descriptionText = "Morbi pretium rhoncus libero massa nunc.";

    cy.mount(
      <AppProvider>
        <TourMetadata />
      </AppProvider>,
    );
    // This is 40 characters including spaces and punctuation
    cy.get("#aic-ct-metadata__title").type(titleText);
    // This is 40 characters including spaces and punctuation
    cy.get("#aic-ct-metadata__description").type(descriptionText);
    // 255 - 40 = 215
    cy.get('label[for="aic-ct-metadata__title"]').should(
      "have.text",
      "Tour Title (215 characters remaining)",
    );
    // 255 - 40 = 215
    cy.get('label[for="aic-ct-metadata__description"]').should(
      "have.text",
      "Tour Description (215 characters remaining)",
    );
    cy.get("#aic-ct-metadata__title").should(
      "have.value",
      titleText.slice(0, 40),
    );
    cy.get("#aic-ct-metadata__description").should(
      "have.value",
      descriptionText.slice(0, 40),
    );
  });

  it("Can add the maxLength text to each field", () => {
    const titleText =
      "Suspendisse posuere facilisis dignissim. Quisque feugiat dolor justo. Quisque nec interdum libero. Vivamus sapien sem, varius id facilisis lobortis, lobortis id leo. Morbi venenatis molestie ultricies. Sed efficitur accumsan risus, quis euismod metus dui.";
    const descriptionText =
      "Etiam consequat ornare tellus in aliquam. Etiam nibh tortor, commodo aliquet vulputate in, tristique a purus. Maecenas lacinia, turpis id pharetra rutrum, lacus dui malesuada felis, vitae finibus nibh leo vel urna. Maecenas rutrum tincidunt nulla, nec id.";

    cy.mount(
      <AppProvider>
        <TourMetadata />
      </AppProvider>,
    );
    // This is 255 characters including spaces and punctuation
    cy.get("#aic-ct-metadata__title").type(titleText, { delay: 0 });
    // This is 255 characters including spaces and punctuation
    cy.get("#aic-ct-metadata__description").type(descriptionText, { delay: 0 });
    // 255 - 255 = 0
    cy.get('label[for="aic-ct-metadata__title"]').should(
      "have.text",
      "Tour Title (0 characters remaining)",
    );
    // 255 - 255 = 0
    cy.get('label[for="aic-ct-metadata__description"]').should(
      "have.text",
      "Tour Description (0 characters remaining)",
    );

    cy.get("#aic-ct-metadata__title").should("have.value", titleText);
    cy.get("#aic-ct-metadata__description").should(
      "have.value",
      descriptionText,
    );
  });

  it("Will stop allowing input after the maxLength", () => {
    const titleText =
      "Nullam aliquet fringilla dolor, vitae malesuada massa rutrum eget. Quisque sed nibh augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque tristique finibus sapien, condimentum condimentum magna biam.";
    const descriptionText =
      "Sed blandit, sem sed facilisis molestie, odio sapien aliquam eros, in maximus velit lectus a diam. Nulla vehicula metus sit amet est auctor dignissim. Curabitur quam urna, interdum vitae posuere vitae, mollis eleifend urna. Maecenas imperdiet sed nisl a ut.";

    cy.mount(
      <AppProvider>
        <TourMetadata />
      </AppProvider>,
    );
    // This is 257 characters including spaces and punctuation
    cy.get("#aic-ct-metadata__title").type(titleText, { delay: 0 });
    // This is 257 characters including spaces and punctuation
    cy.get("#aic-ct-metadata__description").type(descriptionText, { delay: 0 });
    // 255 - 257 = -2 (0)
    cy.get('label[for="aic-ct-metadata__title"]').should(
      "have.text",
      "Tour Title (0 characters remaining)",
    );
    // 255 - 257 = -2 (0)
    cy.get('label[for="aic-ct-metadata__description"]').should(
      "have.text",
      "Tour Description (0 characters remaining)",
    );

    cy.get("#aic-ct-metadata__title").should(
      "have.value",
      titleText.slice(0, 255),
    );
    cy.get("#aic-ct-metadata__description").should(
      "have.value",
      descriptionText.slice(0, 255),
    );
  });
});