import React from "react";
import CustomTourBuilder from "./CustomTourBuilder";

describe("<CustomTourBuilder />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CustomTourBuilder initMessage="Hello World!" />);
    cy.get("h1").should("have.text", "Hello World!");
    cy.get("input").should("have.value", "Hello World!");
    cy.get("input").type(" Goodbye World!");
    cy.get("h1").should("have.text", "Hello World! Goodbye World!");
  });
});
