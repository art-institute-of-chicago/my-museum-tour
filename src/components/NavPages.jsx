import React, { useEffect, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import PropTypes from "prop-types";

function NavPages({ children }) {
  const { activeNavPage, setNavPages } = useContext(AppContext);

  useEffect(() => {
    setNavPages(
      children.map((child, index) => {
        return {
          id: index,
          title: child.props.title,
        };
      }),
    );
  }, [children, setNavPages]);

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
