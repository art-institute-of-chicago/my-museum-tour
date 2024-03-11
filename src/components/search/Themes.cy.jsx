import React from "react";
import Themes from "./Themes";
import { AppProvider } from "../../contexts/AppContext";
import { SearchProvider } from "../../contexts/SearchContext";

describe("<ThemeToggle />", () => {
  it("Renders", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider>
          <Themes />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-themes").should("exist");
    cy.get("#aic-ct-themes button").should("have.length", 9);
  });
});
