import React from "react";
import Navigation from "./components/navigation/Navigation";
import NavPages from "./components/navigation/NavPages";
import NavPage from "./components/navigation/NavPage";
import SearchBar from "./components/search/SearchBar";
import SearchResults from "./components/search/SearchResults";
import TourItems from "./components/tour/TourItems";
import TourMetadata from "./components/tour/TourMetadata";
import { SearchProvider } from "./contexts/SearchContext";
import { AppProvider } from "./contexts/AppContext";

const CustomTourBuilder = () => {
  return (
    <AppProvider>
      <Navigation />
      <NavPages>
        <NavPage id={0} title="Search">
          <SearchProvider>
            <SearchBar />
            <SearchResults />
          </SearchProvider>
        </NavPage>

        <NavPage id={1} title="Your tour">
          <TourMetadata />
          <TourItems />
        </NavPage>
      </NavPages>
    </AppProvider>
  );
};

export default CustomTourBuilder;
