import React from "react";
import CustomTourBuilder from "./CustomTourBuilder";
import searchJson from "../cypress/fixtures/json/search.json";

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

  it("Display an error message if there was a problem with the search request", () => {
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

  it("Can add and remove up to 6 artworks to the tour", () => {
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

    // Should not allow more than 6 items
    cy.get("#aic-ct-nav-button-0").click();
    cy.get("#aic-ct-search__results li:nth-child(1) button").click();
    cy.get("#aic-ct-search__results li:nth-child(2) button").click();
    cy.get("#aic-ct-search__results li:nth-child(3) button").click();
    cy.get("#aic-ct-search__results li:nth-child(4) button").click();
    cy.get("#aic-ct-search__results li:nth-child(5) button").click();
    cy.get("#aic-ct-search__results li:nth-child(6) button").click();
    cy.get("#aic-ct-search__results li:nth-child(7) button").should(
      "not.exist",
    );
    cy.get("#aic-ct-search__results li:nth-child(8) button").should(
      "not.exist",
    );
    cy.get("#aic-ct-search__results li:nth-child(9) button").should(
      "not.exist",
    );
    cy.get("#aic-ct-search__results li:nth-child(10) button").should(
      "not.exist",
    );
    cy.get("#aic-ct-search__results li:nth-child(1) button").click();
    cy.get("#aic-ct-search__results li:nth-child(7) button").should("exist");
    cy.get("#aic-ct-search__results li:nth-child(8) button").should("exist");
    cy.get("#aic-ct-search__results li:nth-child(9) button").should("exist");
    cy.get("#aic-ct-search__results li:nth-child(10) button").should("exist");
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

  it("Displays validation errors on the submission screen", () => {
    cy.mount(<CustomTourBuilder />);
    cy.get("#aic-ct-nav-button-2").click();
    cy.get("#aic-ct-validation-errors").children().should("have.length", 2);
  });

  it("Protects against edge cases where limits are (forcefully) exceeded", () => {
    const tooLongString =
      "Nullam aliquet fringilla dolor, vitae malesuada massa rutrum eget. Quisque sed nibh augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque tristique finibus sapien, condimentum condimentum magna biam.";
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
    const tooManyTourItems = searchJson.data.map((item) => ({
      ...item,
      note: tooLongString,
    }));
    cy.mount(
      <CustomTourBuilder
        tourTitle={tooLongString}
        tourDescription={tooLongString}
        tourItems={tooManyTourItems}
      />,
    );

    cy.get("#aic-ct-nav-button-2").click();
    cy.get("#aic-ct-validation-errors").children().should("have.length", 4);
    cy.get("#aic-ct-validation-errors")
      .contains("Notes must not exceed the character limit")
      .parent()
      .contains("Tour title must not exceed the character limit")
      .parent()
      .contains("Tour description must not exceed the character limit")
      .parent()
      .contains("Tours must not contain more than 6 artworks");
  });

  it("Shows a submit button if all requirements are met", () => {
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
    cy.get("#aic-ct-nav-button-2").click();
    cy.get("#aic-ct-validation-errors").children().should("have.length", 2);
    cy.get("#aic-ct-nav-button-0").click();
    cy.get("#aic-ct-search__input").type("test");
    cy.get("#aic-ct-search__button").click();
    cy.get("#aic-ct-search__item-59426 button").click();
    cy.get("#aic-ct-nav-button-2").click();
    cy.get("#aic-ct-validation-errors").children().should("have.length", 1);
    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-metadata__title").type("A tour title");
    cy.get("#aic-ct-nav-button-2").click();
    cy.get("#aic-ct-validation-errors").should("not.exist");
    cy.get("#aic-ct-validation-success").should("exist");
  });

  it("Correctly handles an error while saving", () => {
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

    cy.intercept("POST", "/api/v1/custom-tours", {
      fixture: "json/saveMissingTitle.json",
      statusCode: 422,
      delayMs: 80,
    }).as("save");

    cy.mount(<CustomTourBuilder />);
    cy.get("#aic-ct-nav-button-0").click();
    cy.get("#aic-ct-search__input").type("test");
    cy.get("#aic-ct-search__button").click();
    cy.get("#aic-ct-search__item-59426 button").click();
    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-metadata__title").type("Test title");
    cy.get("#aic-ct-metadata__description").type("Test description");
    cy.get("#aic-ct-note-59426").type("Test note");
    cy.get("#aic-ct-nav-button-2").click();
    cy.get("#aic-ct-save-button").click();
    cy.get("#aic-ct-save-error").should("exist");
  });

  it("Can save and show a success message", () => {
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

    cy.intercept("POST", "/api/v1/custom-tours", {
      fixture: "json/saveSuccess.json",
      statusCode: 201,
      delayMs: 80,
    }).as("save");

    cy.mount(<CustomTourBuilder />);
    cy.get("#aic-ct-nav-button-0").click();
    cy.get("#aic-ct-search__input").type("test");
    cy.get("#aic-ct-search__button").click();
    cy.get("#aic-ct-search__item-59426 button").click();
    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-metadata__title").type("Test title");
    cy.get("#aic-ct-metadata__description").type("Test description");
    cy.get("#aic-ct-note-59426").type("Test note");
    cy.get("#aic-ct-nav-button-2").click();
    cy.get("#aic-ct-save-button").click();
    cy.get("#aic-ct-save-success").should("exist");
  });
});
