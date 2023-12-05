import React from "react";
import SearchResultItem from "./SearchResultItem";
import item from "../../../cypress/fixtures/json/item.json";
import { AppProvider } from "../../contexts/AppContext";
import { SearchProvider } from "../../contexts/SearchContext";

describe("<SearchResultItem />", () => {
  it("Renders", () => {
    cy.mount(
      <AppProvider>
        <SearchProvider>
          <SearchResultItem key={item.id} itemData={item} />
        </SearchProvider>
      </AppProvider>,
    );
    cy.get("#aic-ct-search__item-1 img")
      .should(
        "have.attr",
        "src",
        "data:image/gif;base64,R0lGODlhBwAFAPUAAI1+Vot+XJiIY5mLZ5eKa5eMaZuMaJ6PbpiQcaCTc6KScqKTc6GUdaSVd6OXe62kjLCnjK+mkLCmkLKplrawnr2znbyzobq0or+2ob22oru0p7y1pLy1pb21pby2qcTAtMbBt8fDu8rGuQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAHAAUAAAYhwE/EsulMQhSBorEgaC6HBILh8GQAg4IhwBFBKhLMAxQEADs=",
      )
      .should("have.attr", "alt", "");
  });
});
