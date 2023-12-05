import React from "react";
import CustomTourBuilder from "./CustomTourBuilder";
import searchJson from "../cypress/fixtures/json/search.json";

function interceptImages(size) {
  let imageInterceptCount = 0;
  return cy.intercept(
    "GET",
    `https://artic.edu/iiif/2/*/full/${size}/0/default.jpg`,
    (req) => {
      // Create a ceiling
      // Sometimes we might hit more than 10 images in a test
      imageInterceptCount < 10
        ? (imageInterceptCount += 1)
        : (imageInterceptCount = 10);
      req.reply({
        fixture: `../../cypress/fixtures/images/image_${imageInterceptCount}.jpg`,
      });
    },
  );
}

// Use intercept to ping the search api and use the search.json fixture
// but wait while we check the loading message
function interceptSearch() {
  return cy.intercept("GET", "https://api.artic.edu/api/v1/artworks/search*", {
    fixture: "json/search.json",
    delayMs: 80,
  });
}

describe("<CustomTourBuilder />", () => {
  it("Renders", () => {
    cy.mount(<CustomTourBuilder />);
    cy.get("#aic-ct-search").should("exist");
    cy.get("#aic-ct-metadata__title").should("exist");
    cy.get("#aic-ct-metadata__description").should("exist");
  });

  it("Can add each metadata field for the tour", () => {
    cy.mount(<CustomTourBuilder />);
    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-metadata__title").type("A tour title", { delay: 0 });
    cy.get("#aic-ct-metadata__description").type("A tour description", {
      delay: 0,
    });
    cy.get("#aic-ct-metadata__creator-name").type("Jon", { delay: 0 });
    cy.get("#aic-ct-metadata__creator-email").type("jonw@coghack.com", {
      delay: 0,
    });
    cy.get("#aic-ct-metadata__recipient-name").type("Luke", { delay: 0 });
    cy.get("#aic-ct-metadata__opt-in").click().should("be.checked");
    cy.get("label[for='aic-ct-metadata__title']").should(
      "contain.text",
      "(243 characters remaining)",
    );
    cy.get("label[for='aic-ct-metadata__description']").should(
      "contain.text",
      "(237 characters remaining)",
    );
  });

  it("Display an error message if there was a problem with the search request", () => {
    cy.intercept("GET", "https://api.artic.edu/api/v1/artworks/search*", {
      statusCode: 500,
    }).as("500");

    cy.mount(<CustomTourBuilder />);
    cy.get("#aic-ct-search__input").type("test");
    cy.get("#aic-ct-search__button").click();
    cy.get("#aic-ct-search-results__error").should(
      "have.text",
      "Error fetching results",
    );
  });

  it("Can perform a keyword search and show results", () => {
    interceptImages("*").as("images");
    interceptSearch().as("search");

    cy.mount(<CustomTourBuilder />);
    cy.get("#aic-ct-search__input").type("test");
    cy.get("#aic-ct-search__button").click();
    cy.get("#aic-ct-search-results__loading").should("have.text", "Loading...");
    cy.get("#aic-ct-search-results__items").should("exist");
    cy.get("#aic-ct-search-results__items li").should("have.length", 10);
    cy.get("#aic-ct-search-result-count").should("have.text", "10");
  });

  it("Can perform a search on a theme and show results", () => {
    interceptImages("*").as("images");
    interceptSearch.as("search");

    cy.mount(<CustomTourBuilder />);
    cy.get("#aic-ct-theme-toggle-0").click();
    cy.get("#aic-ct-search-results__loading").should("have.text", "Loading...");
    cy.get("#aic-ct-search-results__items").should("exist");
    cy.get("#aic-ct-search-results__items li").should("have.length", 10);
    cy.get("#aic-ct-search-result-count").should("have.text", "10");
    cy.get("#aic-ct-theme-toggle-0").click();
    cy.get("#aic-ct-search-results__items").should("not.exist");
  });

  it("Can add and remove up to 6 artworks to the tour", () => {
    interceptImages("*").as("images");
    interceptSearch().as("search");

    cy.mount(<CustomTourBuilder />);

    // Adding and removing from search page
    cy.get("#aic-ct-nav-button-0").click();
    cy.get("#aic-ct-search__input").type("test");
    cy.get("#aic-ct-search__button").click();
    cy.get("#aic-ct-search__item-59426 button").click();
    cy.get("#aic-ct-preview__action-button-59426").click();
    cy.get("#aic-ct-search__item-243872 button").click();
    cy.get("#aic-ct-preview__action-button-243872").click();
    cy.get("#aic-ct-search__item-75644 button").click();
    cy.get("#aic-ct-preview__action-button-75644").click();
    cy.get("#aic-ct-item-count").should("have.text", "3");
    cy.get("#aic-ct-header__button").should("have.text", "Preview").click();
    cy.get("#aic-ct-tour__item-59426").should("exist");
    cy.get("#aic-ct-tour__item-243872").should("exist");
    cy.get("#aic-ct-tour__item-75644").should("exist");
    cy.get("#aic-ct-nav-button-0").click();
    cy.get("#aic-ct-search__item-59426 button").click();
    cy.get("#aic-ct-preview__action-button-59426").click();
    cy.get("#aic-ct-search__item-243872 button").click();
    cy.get("#aic-ct-preview__action-button-243872").click();
    cy.get("#aic-ct-search__item-75644 button").click();
    cy.get("#aic-ct-preview__action-button-75644").click();
    cy.get("#aic-ct-item-count").should("have.text", "0");
    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-tour__item-59426").should("not.exist");
    cy.get("#aic-ct-tour__item-243872").should("not.exist");
    cy.get("#aic-ct-tour__item-75644").should("not.exist");

    // Adding on search page and removing on tour page
    cy.get("#aic-ct-nav-button-0").click();
    cy.get("#aic-ct-search__item-59426 button").click();
    cy.get("#aic-ct-preview__action-button-59426").click();
    cy.get("#aic-ct-search__item-243872 button").click();
    cy.get("#aic-ct-preview__action-button-243872").click();
    cy.get("#aic-ct-search__item-75644 button").click();
    cy.get("#aic-ct-preview__action-button-75644").click();
    cy.get("#aic-ct-item-count").should("have.text", "3");
    cy.get("#aic-ct-header__button").should("have.text", "Preview").click();
    cy.get("#aic-ct-tour__item-59426").should("exist");
    cy.get("#aic-ct-tour__item-243872").should("exist");
    cy.get("#aic-ct-tour__item-75644").should("exist");
    cy.get("#aic-ct-tour__item-59426 button").click();
    cy.get("#aic-ct-tour__item-59426").should("not.exist");
    cy.get("#aic-ct-tour__item-243872 button").should("have.focus").click();
    cy.get("#aic-ct-tour__item-243872").should("not.exist");
    cy.get("#aic-ct-tour__item-75644 button").should("have.focus").click();
    cy.get("#aic-ct-tour__item-75644").should("not.exist");
    cy.get("#aic-ct-nav-button-0").should("have.focus");

    // Should not allow more than 6 items
    cy.get("#aic-ct-nav-button-0").click();
    cy.get("#aic-ct-search-results__items li:nth-child(1) button").click();
    cy.get("#aic-ct-preview__action-button-59426").click();
    cy.get("#aic-ct-search-results__items li:nth-child(2) button").click();
    cy.get("#aic-ct-preview__action-button-208078").click();
    cy.get("#aic-ct-search-results__items li:nth-child(3) button").click();
    cy.get("#aic-ct-preview__action-button-185905").click();
    cy.get("#aic-ct-search-results__items li:nth-child(4) button").click();
    cy.get("#aic-ct-preview__action-button-243872").click();
    cy.get("#aic-ct-search-results__items li:nth-child(5) button").click();
    cy.get("#aic-ct-preview__action-button-229877").click();
    cy.get("#aic-ct-search-results__items li:nth-child(6) button").click();
    cy.get("#aic-ct-preview__action-button-151370").click();
    cy.get("#aic-ct-search-results__items li:nth-child(7) button").click();
    cy.get("#aic-ct-preview__action-button-75644").should("not.exist");
    cy.get("#aic-ct-preview__close").click();
    cy.get("#aic-ct-item-count").should("have.text", "6");

    cy.get("#aic-ct-search-results__items li:nth-child(8) button").click();
    cy.get("#aic-ct-preview__action-button-181811").should("not.exist");
    cy.get("#aic-ct-preview__close").click();

    cy.get("#aic-ct-search-results__items li:nth-child(9) button").click();
    cy.get("#aic-ct-preview__action-button-188527").should("not.exist");
    cy.get("#aic-ct-preview__close").click();

    cy.get("#aic-ct-search-results__items li:nth-child(10) button").click();
    cy.get("#aic-ct-preview__action-button-104930").should("not.exist");
    cy.get("#aic-ct-preview__close").click();

    cy.get("#aic-ct-search-results__items li:nth-child(1) button").click();
    cy.get("#aic-ct-preview__action-button-59426").click();

    cy.get("#aic-ct-search-results__items li:nth-child(7) button").click();
    cy.get("#aic-ct-preview__action-button-75644").should("exist");
    cy.get("#aic-ct-preview__close").click();

    cy.get("#aic-ct-search-results__items li:nth-child(8) button").click();
    cy.get("#aic-ct-preview__action-button-181811").should("exist");
    cy.get("#aic-ct-preview__close").click();

    cy.get("#aic-ct-search-results__items li:nth-child(9) button").click();
    cy.get("#aic-ct-preview__action-button-188527").should("exist");
    cy.get("#aic-ct-preview__close").click();

    cy.get("#aic-ct-search-results__items li:nth-child(10) button").click();
    cy.get("#aic-ct-preview__action-button-104930").should("exist");
    cy.get("#aic-ct-preview__close").click();
  });

  it("Wipes notes when an item is removed and added again", () => {
    interceptImages("*").as("images");
    interceptSearch().as("search");

    cy.mount(<CustomTourBuilder />);
    cy.get("#aic-ct-nav-button-0").click();
    cy.get("#aic-ct-search__input").type("test");
    cy.get("#aic-ct-search__button").click();
    cy.get("#aic-ct-search__item-59426 button").click();
    cy.get("#aic-ct-preview__action-button-59426").click();
    cy.get("#aic-ct-search__item-243872 button").click();
    cy.get("#aic-ct-preview__action-button-243872").click();
    cy.get("#aic-ct-search__item-75644 button").click();
    cy.get("#aic-ct-preview__action-button-75644").click();
    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-note-59426").should("be.empty").type("Test note");
    cy.get("#aic-ct-note-243872").should("be.empty").type("Test note");
    cy.get("#aic-ct-note-75644").should("be.empty").type("Test note");
    cy.get("#aic-ct-tour__item-59426 button").click();
    cy.get("#aic-ct-tour__item-243872 button").click();
    cy.get("#aic-ct-tour__item-75644 button").click();
    cy.get("#aic-ct-nav-button-0").click();
    cy.get("#aic-ct-search__item-59426 button").click();
    cy.get("#aic-ct-preview__action-button-59426").click();
    cy.get("#aic-ct-search__item-243872 button").click();
    cy.get("#aic-ct-preview__action-button-243872").click();
    cy.get("#aic-ct-search__item-75644 button").click();
    cy.get("#aic-ct-preview__action-button-75644").click();
    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-note-59426").should("be.empty");
    cy.get("#aic-ct-note-243872").should("be.empty");
    cy.get("#aic-ct-note-75644").should("be.empty");
  });

  it("Displays validation errors on the submission screen", () => {
    cy.mount(<CustomTourBuilder />);
    cy.get("#aic-ct-nav-button-2").click();
    cy.get("#aic-ct-validation-errors").children().should("have.length", 3);
  });

  it("Protects against edge cases where limits are (forcefully) exceeded", () => {
    interceptImages("*").as("images");

    const tooLongString =
      "Nullam aliquet fringilla dolor, vitae malesuada massa rutrum eget. Quisque sed nibh augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque tristique finibus sapien, condimentum condimentum magna biam.";
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
      .contains("Tour title must not exceed the character limit")
      .parent()
      .contains("Tour description must not exceed the character limit")
      .parent()
      .contains("Tours must not contain more than 6 artworks");
  });

  it("Shows a submit button if all requirements are met", () => {
    interceptImages("*").as("images");
    interceptSearch().as("search");

    cy.mount(<CustomTourBuilder />);
    cy.get("#aic-ct-nav-button-2").click();
    cy.get("#aic-ct-validation-errors").children().should("have.length", 3);
    cy.get("#aic-ct-nav-button-0").click();
    cy.get("#aic-ct-search__input").type("test");
    cy.get("#aic-ct-search__button").click();
    cy.get("#aic-ct-search__item-59426 button").click();
    cy.get("#aic-ct-preview__action-button-59426").click();
    cy.get("#aic-ct-nav-button-2").click();
    cy.get("#aic-ct-validation-errors").children().should("have.length", 2);
    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-metadata__title").type("A tour title");
    cy.get("#aic-ct-nav-button-2").click();
    cy.get("#aic-ct-validation-errors").children().should("have.length", 1);
    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-metadata__creator-email").type("jonw@coghack.com");
    cy.get("#aic-ct-nav-button-2").click();
    cy.get("#aic-ct-validation-success").should("exist");
  });

  it("Correctly handles an error while saving", () => {
    interceptImages("*").as("images");
    interceptSearch().as("search");

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
    cy.get("#aic-ct-preview__action-button-59426").click();

    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-metadata__title").type("Test title");
    cy.get("#aic-ct-metadata__creator-email").type("jonw@coghack.com");
    cy.get("#aic-ct-metadata__description").type("Test description");
    cy.get("#aic-ct-note-59426").type("Test note");
    cy.get("#aic-ct-nav-button-2").click();
    cy.get("#aic-ct-save-button").click();
    cy.get("#aic-ct-save-error").should("exist");
  });

  it("Can save and show a success message", () => {
    interceptImages("*").as("images");
    interceptSearch().as("search");
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
    cy.get("#aic-ct-preview__action-button-59426").click();
    cy.get("#aic-ct-nav-button-1").click();
    cy.get("#aic-ct-metadata__title").type("Test title");
    cy.get("#aic-ct-metadata__creator-name").type("Jon");
    cy.get("#aic-ct-metadata__creator-email").type("jonw@coghack.com");
    cy.get("#aic-ct-metadata__recipient-name").type("Luke");
    cy.get("#aic-ct-metadata__description").type("Test description");
    cy.get("#aic-ct-metadata__opt-in").click();
    cy.get("#aic-ct-note-59426").type("Test note");
    cy.get("#aic-ct-nav-button-2").click();
    cy.get("#aic-ct-save-button").click();
    // Test the request body goes out as we expect
    cy.wait("@save")
      .its("request.body")
      .should("deep.equal", {
        creatorEmail: "jonw@coghack.com",
        marketingOptIn: true,
        tourJson: {
          creatorName: "Jon",
          description: "Test description",
          recipientName: "Luke",
          title: "Test title",
          artworks: [{ ...searchJson.data[0], objectNote: "Test note" }],
        },
      });

    cy.get("#aic-ct-save-success").should("exist");
  });
});
