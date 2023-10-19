import React from "react";
import Navigation from "./components/Navigation";
import NavPages from "./components/NavPages";
import NavPage from "./components/NavPage";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import TourMetadata from "./components/TourMetadata";
import TourItems from "./components/TourItems";
import { SearchProvider } from "./contexts/SearchContext";
import { AppProvider } from "./contexts/AppContext";

const CustomTourBuilder = () => {
  return (
    <AppProvider>
      <Navigation />
      <SearchProvider>
        <NavPages>
          <NavPage id={0} title="Search">
            <SearchBar />
            <SearchResults />
          </NavPage>

          <NavPage id={1} title="Your tour">
            <TourMetadata />
            <TourItems />
          </NavPage>
        </NavPages>
      </SearchProvider>
    </AppProvider>
  );
};

export default CustomTourBuilder;
