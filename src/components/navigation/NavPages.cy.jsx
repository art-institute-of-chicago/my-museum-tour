import React from "react";
import NavPages from "./NavPages";
import { AppProvider } from "../../contexts/AppContext";

describe("<NavPages />", () => {
  it("Renders", () => {
    cy.mount(
      <AppProvider>
        <NavPages />
      </AppProvider>,
    );
    cy.get("#aic-ct-nav-pages").should("exist");
  });
});
