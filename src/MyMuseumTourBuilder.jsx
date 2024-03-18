import React from "react";
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
import { iiifUrl } from "./utils";

const MyMuseumTourBuilder = (props) => {
  // Mainly used for testing, but could be used for hydrating the app
  const {
    apiSaveEndpoint,
    hideFromTours,
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

  const SearchProps = {
    hideFromTours,
  };

  return (
    <div id="my-museum-tour-builder" className="my-museum-tour">
      <AppProvider {...AppProviderProps}>
        <Header />
        <NavPages>
          <NavPage
            id={0}
            title="Browse"
            tagline="for artworks to add to your tour"
          >
            <div className="aic-ct-intro aic-ct-intro--keyline aic-ct__core">
              <h1 className="f-display-2">Create your own tour</h1>
              <p className="f-deck">
                Choose up to 6 artworks for your tour by searching for a
                particular work or artist, browsing themes, or selecting from
                the list of artworks below.
              </p>
            </div>
            <SearchProvider>
              <div className="aic-ct__core">
                <SearchBar {...SearchProps} />
                <Themes {...SearchProps} />
                <SearchResults />
              </div>
            </SearchProvider>
          </NavPage>

          <NavPage
            id={1}
            title="Personalize"
            tagline="your tour by adding a title and notes"
          >
            {heroImageId && (
              <div className="aic-ct-hero aic-ct-full-bleed">
                <img
                  src={iiifUrl(iiifBaseUrl, heroImageId, 20, 20, "full")}
                  srcSet={`${iiifUrl(
                    iiifBaseUrl,
                    heroImageId,
                    480,
                    480,
                    "full",
                  )} 320w, ${iiifUrl(
                    iiifBaseUrl,
                    heroImageId,
                    640,
                    640,
                    "full",
                  )} 480w, ${iiifUrl(
                    iiifBaseUrl,
                    heroImageId,
                    960,
                    960,
                    "full",
                  )} 640w, ${iiifUrl(
                    iiifBaseUrl,
                    heroImageId,
                    1280,
                    1280,
                    "full",
                  )} 960w, ${iiifUrl(
                    iiifBaseUrl,
                    heroImageId,
                    1920,
                    1920,
                    "full",
                  )} 1280w`}
                  alt=""
                />
              </div>
            )}
            <div className="aic-ct-intro aic-ct__core">
              <h1 className="f-display-2">Personalize your tour</h1>
            </div>
            <div className="aic-ct__core">
              <TourMetadata />
            </div>
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

MyMuseumTourBuilder.propTypes = {
  apiSaveEndpoint: PropTypes.string,
  hideFromTours: PropTypes.array,
  tourTitle: PropTypes.string,
  tourDescription: PropTypes.string,
  tourItems: PropTypes.array,
  searchPreviewId: PropTypes.number,
  heroImageId: PropTypes.string,
};

export default MyMuseumTourBuilder;
