import React from "react";
import Navigation from "./components/Navigation";
import NavPages from "./components/NavPages";
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
          <>
            <SearchBar />
            <SearchResults />
          </>

          <>
            <TourMetadata />
            <TourItems />
          </>
        </NavPages>
      </SearchProvider>
    </AppProvider>
  );
};

export default CustomTourBuilder;
