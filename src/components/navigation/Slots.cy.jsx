import React from "react";
import Slots from "./Slots";
import { AppProvider } from "../../contexts/AppContext";
import item from "../../../cypress/fixtures/json/item.json";

describe("<Slots />", () => {
  it("Renders placeholders", () => {
    cy.mount(
      <AppProvider>
        <Slots />
      </AppProvider>,
    );
    cy.get("#aic-ct-header__slots").should("exist");
    cy.get("button[disabled]").should("have.length", 6);
  });
  it("Renders buttons", () => {
    cy.mount(
      <AppProvider tourItems={Array.from({ length: 6 }).map(() => item)}>
        <Slots />
      </AppProvider>,
    );
    cy.get("#aic-ct-header__slots").should("exist");
    cy.get("button").should("have.length", 6);
    cy.get("button[disabled]").should("have.length", 0);
  });
});
