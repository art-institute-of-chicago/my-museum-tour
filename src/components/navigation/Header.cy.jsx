import React from "react";
import Header from "./Header";
import { AppProvider } from "../../contexts/AppContext";
import { Location } from "../../utils";

describe("<Header />", () => {
  it("Renders", () => {
    cy.mount(
      <AppProvider>
        <Header />
      </AppProvider>,
    );
    cy.get("#aic-ct-header")
      .should("exist")
      .should("have.attr", "aria-label", "Custom tour builder");
  });

  it("Updates the navigation button text correctly", () => {
    cy.mount(
      <AppProvider>
        <Header />
      </AppProvider>,
    );
    cy.get("#aic-ct-header__back-button").should("have.text", "Back");
    cy.get("#aic-ct-header__next-button").should("have.text", "Next");
    cy.get("#aic-ct-header__next-button").click();
    cy.get("#aic-ct-header__back-button").should("have.text", "Back");
    cy.get("#aic-ct-header__next-button").should("have.text", "Finish");
    cy.get("#aic-ct-header__next-button").click();
    cy.get("#aic-ct-header__back-button").should("have.text", "Back");
    cy.get("#aic-ct-header__next-button").should("have.text", "Finish");
    cy.get("#aic-ct-header__back-button").click();
    cy.get("#aic-ct-header__back-button").should("have.text", "Back");
    cy.get("#aic-ct-header__next-button").should("have.text", "Finish");
    cy.get("#aic-ct-header__back-button").click();
    cy.get("#aic-ct-header__back-button").should("have.text", "Back");
    cy.get("#aic-ct-header__next-button").should("have.text", "Next");
  });
  it("Can exit the builder", () => {
    cy.mount(
      <AppProvider>
        <Header />
      </AppProvider>,
    );
    cy.stub(Location, "assign").as("assign");

    cy.get("#aic-ct-header__back-button").click();
    cy.get("@assign").should("have.been.calledWith", "/my-museum-tours");
  });
});
