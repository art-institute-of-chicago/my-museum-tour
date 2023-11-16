import React from "react";
import Header from "./Header";
import { AppProvider } from "../../contexts/AppContext";

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
});
