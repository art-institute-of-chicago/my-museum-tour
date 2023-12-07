import React, { useEffect } from "react";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
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

const CustomTourBuilder = (props) => {
  // Mainly used for testing, but could be used for hydrating the app
  const {
    apiSaveEndpoint,
    tourTitle,
    tourDescription,
    tourItems,
    heroImageId,
  } = props;

  const iiifBaseUrl = "https://artic.edu/iiif/2";

  const AppProviderProps = {
    apiSaveEndpoint,
    tourTitle,
    tourDescription,
    tourItems,
    heroImageId,
    iiifBaseUrl,
  };

  // Ask a user before they leave the page
  useEffect(() => {
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      e.returnValue = "";
    });
  }, []);

  return (
    <div className="custom-tours">
      <AppProvider {...AppProviderProps}>
        <Header />
        <NavPages>
          <NavPage
            id={0}
            title="Browse"
            tagline="for artworks to add to your tour"
          >
            <div className="aic-ct-intro">
              <h1 className="f-display-2">Create your own tour</h1>
              <p className="f-deck">
                Select from the list of available artworks or browse themes to
                help get you started. Choose up to 6 artworks for your tour.
              </p>
            </div>
            <SearchProvider>
              <SearchBar />
              <Themes />
              <SearchResults />
            </SearchProvider>
          </NavPage>

          <NavPage
            id={1}
            title="Personalize"
            tagline="your tour by adding notes to artworks"
          >
            <TourMetadata />
            <TourItems />
          </NavPage>

          <NavPage id={2} title="Complete" tagline="and share with friends">
            <Submission />
          </NavPage>
        </NavPages>
        <Footer />
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
  heroImageId: PropTypes.string,
};

export default CustomTourBuilder;
