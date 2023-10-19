import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import PropTypes from "prop-types";

function NavPages({ children }) {
  const { activeNavPage } = useContext(AppContext);
  return (
    <div>
      <h1>NavPages</h1>
      {children[activeNavPage]}
    </div>
  );
}

NavPages.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavPages;
