import React from "react";
import Navigation from "./components/navigation/Navigation";
import NavPages from "./components/navigation/NavPages";
import NavPage from "./components/navigation/NavPage";
import SearchBar from "./components/search/SearchBar";
import Themes from "./components/search/Themes";
import SearchResults from "./components/search/SearchResults";
import TourItems from "./components/tour/TourItems";
import TourMetadata from "./components/tour/TourMetadata";
import Submission from "./components/submission/Submission";
import { SearchProvider } from "./contexts/SearchContext";
import { AppProvider } from "./contexts/AppContext";
import PropTypes from "prop-types";
import Header from "./components/navigation/Header";

const CustomTourBuilder = (props) => {
  // Mainly used for testing, but could be used for hydrating the app
  const { apiSaveEndpoint, tourTitle, tourDescription, tourItems } = props;
  const AppProviderProps = {
    apiSaveEndpoint,
    tourTitle,
    tourDescription,
    tourItems,
  };

  return (
    <div className="custom-tours">
      <AppProvider {...AppProviderProps}>
        <Header />
        <Navigation />
        <NavPages>
          <NavPage id={0} title="Search">
            <SearchProvider>
              <SearchBar />
              <Themes />
              <SearchResults />
            </SearchProvider>
          </NavPage>

          <NavPage id={1} title="Your tour">
            <TourMetadata />
            <TourItems />
          </NavPage>

          <NavPage id={2} title="Save your tour">
            <Submission />
          </NavPage>
        </NavPages>
      </AppProvider>
    </div>
  );
};

CustomTourBuilder.propTypes = {
  apiSaveEndpoint: PropTypes.string,
  tourTitle: PropTypes.string,
  tourDescription: PropTypes.string,
  tourItems: PropTypes.array,
  searchPreviewId: PropTypes.number,
};

export default CustomTourBuilder;
