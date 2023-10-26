import React from "react";
import CustomTourBuilder from "./CustomTourBuilder";
import { AppProvider } from "./contexts/AppContext";
import { SearchProvider } from "./contexts/SearchContext";

describe("<CustomTourBuilder />", () => {
  it("Renders", () => {
    cy.mount(<CustomTourBuilder />);
    cy.get("#aic-ct-search").should("exist");
    cy.get("#aic-ct-metadata__title").should("exist");
    cy.get("#aic-ct-metadata__description").should("exist");
  });

  it("Can add a title and description for the tour", () => {
    cy.mount(<CustomTourBuilder />);
    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-metadata__title").type("A tour title");
    cy.get("#aic-ct-metadata__description").type("A tour description");
    cy.get("label[for='aic-ct-metadata__title']").should(
      "have.text",
      "Tour Title (243 characters remaining)",
    );
    cy.get("label[for='aic-ct-metadata__description']").should(
      "have.text",
      "Tour Description (237 characters remaining)",
    );
  });

  it("Display an error message if there was a problem with the request", () => {
    cy.intercept("GET", "https://api.artic.edu/api/v1/artworks/search*", {
      statusCode: 500,
    }).as("500");

    cy.mount(<CustomTourBuilder />);
    cy.get("#aic-ct-search__input").type("test");
    cy.get("#aic-ct-search__button").click();
    cy.get("#aic-ct-search__error").should(
      "have.text",
      "Error fetching results",
    );
  });

  it("Can perform a search and show results", () => {
    let imageInterceptCount = 0;
    cy.intercept(
      "GET",
      "https://artic.edu/iiif/2/*/full/!240,240/0/default.jpg",
      (req) => {
        imageInterceptCount += 1;
        req.reply({
          fixture: `../../cypress/fixtures/images/image_${imageInterceptCount}.jpg`,
        });
      },
    ).as("images");

    // Use intercept to ping the search api and use the search.json fixture
    // but wait while we check the loading message
    cy.intercept("GET", "https://api.artic.edu/api/v1/artworks/search*", {
      fixture: "json/search.json",
      delayMs: 80,
    }).as("search");

    cy.mount(<CustomTourBuilder />);
    cy.get("#aic-ct-search__input").type("test");
    cy.get("#aic-ct-search__button").click();
    cy.get("#aic-ct-search__loading").should("have.text", "Loading...");
    cy.get("#aic-ct-search__results").should("exist");
    cy.get("#aic-ct-search__results li").should("have.length", 10);
  });

  it("Can add and remove artworks from the tour", () => {
    let imageInterceptCount = 0;
    cy.intercept(
      "GET",
      "https://artic.edu/iiif/2/*/full/!240,240/0/default.jpg",
      (req) => {
        imageInterceptCount += 1;
        req.reply({
          fixture: `../../cypress/fixtures/images/image_${imageInterceptCount}.jpg`,
        });
      },
    ).as("images");

    // Use intercept to ping the search api and use the search.json fixture
    // but wait while we check the loading message
    cy.intercept("GET", "https://api.artic.edu/api/v1/artworks/search*", {
      fixture: "json/search.json",
    }).as("search");

    cy.mount(<CustomTourBuilder />);

    // Adding and removing from search page
    cy.get("#aic-ct-nav-button-0").click();
    cy.get("#aic-ct-search__input").type("test");
    cy.get("#aic-ct-search__button").click();
    cy.get("#aic-ct-search__item-59426 button").click();
    cy.get("#aic-ct-search__item-243872 button").click();
    cy.get("#aic-ct-search__item-75644 button").click();
    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-tour__item-59426").should("be.visible");
    cy.get("#aic-ct-tour__item-243872").should("be.visible");
    cy.get("#aic-ct-tour__item-75644").should("be.visible");
    cy.get("#aic-ct-nav-button-0").click();
    cy.get("#aic-ct-search__item-59426 button").click();
    cy.get("#aic-ct-search__item-243872 button").click();
    cy.get("#aic-ct-search__item-75644 button").click();
    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-tour__item-59426").should("not.exist");
    cy.get("#aic-ct-tour__item-243872").should("not.exist");
    cy.get("#aic-ct-tour__item-75644").should("not.exist");

    // Adding on search page and removing on tour page
    cy.get("#aic-ct-nav-button-0").click();
    cy.get("#aic-ct-search__item-59426 button").click();
    cy.get("#aic-ct-search__item-243872 button").click();
    cy.get("#aic-ct-search__item-75644 button").click();
    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-tour__item-59426").should("be.visible");
    cy.get("#aic-ct-tour__item-243872").should("be.visible");
    cy.get("#aic-ct-tour__item-75644").should("be.visible");
    cy.get("#aic-ct-tour__item-59426 button").click();
    cy.get("#aic-ct-tour__item-59426").should("not.exist");
    cy.get("#aic-ct-tour__item-243872 button").should("have.focus").click();
    cy.get("#aic-ct-tour__item-243872").should("not.exist");
    cy.get("#aic-ct-tour__item-75644 button").should("have.focus").click();
    cy.get("#aic-ct-tour__item-75644").should("not.exist");
    cy.get("#aic-ct-nav-button-0").should("have.focus");
  });

  it("Wipes notes when an item is removed and added again", () => {
    let imageInterceptCount = 0;
    cy.intercept(
      "GET",
      "https://artic.edu/iiif/2/*/full/!240,240/0/default.jpg",
      (req) => {
        imageInterceptCount += 1;
        req.reply({
          fixture: `../../cypress/fixtures/images/image_${imageInterceptCount}.jpg`,
        });
      },
    ).as("images");

    // Use intercept to ping the search api and use the search.json fixture
    // but wait while we check the loading message
    cy.intercept("GET", "https://api.artic.edu/api/v1/artworks/search*", {
      fixture: "json/search.json",
    }).as("search");

    cy.mount(<CustomTourBuilder />);
    cy.get("#aic-ct-nav-button-0").click();
    cy.get("#aic-ct-search__input").type("test");
    cy.get("#aic-ct-search__button").click();
    cy.get("#aic-ct-search__item-59426 button").click();
    cy.get("#aic-ct-search__item-243872 button").click();
    cy.get("#aic-ct-search__item-75644 button").click();
    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-note-59426").should("be.empty").type("Test note");
    cy.get("#aic-ct-note-243872").should("be.empty").type("Test note");
    cy.get("#aic-ct-note-75644").should("be.empty").type("Test note");
    cy.get("#aic-ct-tour__item-59426 button").click();
    cy.get("#aic-ct-tour__item-243872 button").click();
    cy.get("#aic-ct-tour__item-75644 button").click();
    cy.get("#aic-ct-nav-button-0").click();
    cy.get("#aic-ct-search__item-59426 button").click();
    cy.get("#aic-ct-search__item-243872 button").click();
    cy.get("#aic-ct-search__item-75644 button").click();
    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-note-59426").should("be.empty");
    cy.get("#aic-ct-note-243872").should("be.empty");
    cy.get("#aic-ct-note-75644").should("be.empty");
  });
});
