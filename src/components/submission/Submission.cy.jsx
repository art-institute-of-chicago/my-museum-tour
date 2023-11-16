import React from "react";
import Submission from "./Submission";
import { AppProvider } from "../../contexts/AppContext";

describe("<Submission />", () => {
  it("Renders", () => {
    cy.mount(
      <AppProvider>
        <Submission />
      </AppProvider>,
    );
    cy.get("#aic-ct-validation-errors").children().should("have.length", 3);
  });
});
