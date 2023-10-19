import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function Navigation() {
  const { navPages, setActiveNavPage } = useContext(AppContext);

  return (
    <div>
      <h1>Navigation</h1>
      {navPages.map((page, index) => (
        <button
          key={page.id}
          type="button"
          onClick={() => setActiveNavPage(index)}
        >
          {page.title}
        </button>
      ))}
    </div>
  );
}

export default Navigation;
