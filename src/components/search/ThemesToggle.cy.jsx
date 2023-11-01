import React from "react";
import ThemeToggle from "./ThemeToggle";
import { AppProvider } from "../../contexts/AppContext";
import { SearchProvider } from "../../contexts/SearchContext";

describe("<Themes />", () => {
  it("Renders", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider>
          <ThemeToggle id="0" label="Test theme" categoryIds={["TM-8657"]} />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-theme-toggle-0").should("exist");
  });
});
