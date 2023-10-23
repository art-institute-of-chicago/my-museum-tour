import React from "react";
import NavPage from "./NavPage";
import { AppProvider } from "../contexts/AppContext";

describe("<NavPage />", () => {
  it("Renders", () => {
    cy.mount(
      <AppProvider>
        <NavPage id={0} title="Search">
          <div>
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur excepteur sint occaecat cupidatat non proident sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </div>
        </NavPage>
      </AppProvider>,
    );
    cy.get("#aic-ct-nav-page-0")
      .should("exist")
      .should("have.attr", "aria-hidden", "false")
      .should("have.attr", "tabindex", "0")
      .should("have.attr", "aria-labelledby", "aic-ct-nav-button-0");
  });
});
