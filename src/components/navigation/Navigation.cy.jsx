import React from "react";
import Navigation from "./Navigation";
import { AppProvider } from "../../contexts/AppContext";

describe("<Navigation />", () => {
  it("Renders", () => {
    cy.mount(
      <AppProvider>
        <Navigation />
      </AppProvider>,
    );
    cy.get("#aic-ct-navigation")
      .should("exist")
      .should("have.attr", "aria-label", "Custom tour navigation");
  });

  it("Has buttons that can be clicked", () => {
    cy.mount(
      <AppProvider
        navPages={[
          { id: 0, title: "Search" },
          { id: 1, title: "Your tour" },
        ]}
      >
        <Navigation />
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
