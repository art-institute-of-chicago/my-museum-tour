import React from "react";
import Footer from "./Footer";
import { AppProvider } from "../../contexts/AppContext";

describe("<Footer />", () => {
  it("Renders", () => {
    cy.mount(
      <AppProvider>
        <Footer />
      </AppProvider>,
    );
    cy.get("#aic-ct-navigation")
      .should("exist")
      .should("have.attr", "aria-label", "Custom tour builder navigation");
  });

  it("Has buttons that can be clicked", () => {
    cy.mount(
      <AppProvider
        navPages={[
          {
            id: 0,
            title: "Browse",
            tagline: "for artworks to add to your tour",
          },
          {
            id: 1,
            title: "Personalize",
            tagline: "your tour by adding notes to artworks",
          },
          { id: 2, title: "Complete", tagline: "and share with friends" },
        ]}
      >
        <Footer />
      </AppProvider>,
    );
    cy.get("#aic-ct-nav-button-0").should("have.attr", "aria-pressed", "true");
    cy.get("#aic-ct-nav-button-1").should("have.attr", "aria-pressed", "false");
    cy.get("#aic-ct-nav-button-1")
      .click()
      .should("have.attr", "aria-pressed", "true");
    cy.get("#aic-ct-nav-button-0")
      .should("have.attr", "aria-pressed", "false")
      .click()
      .should("have.attr", "aria-pressed", "true");
  });
});
