import React from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import TourMetadata from "./components/TourMetadata";
import { SearchProvider } from "./contexts/SearchContext";
import { AppProvider } from "./contexts/AppContext";

const CustomTourBuilder = () => {
  return (
    <AppProvider>
      <TourMetadata />
      <SearchProvider>
        <SearchBar />
        <SearchResults />
      </SearchProvider>
    </AppProvider>
  );
};

export default CustomTourBuilder;
