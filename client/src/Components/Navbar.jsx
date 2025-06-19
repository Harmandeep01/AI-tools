import React from "react";
import "./Navbar.css";

const Navbar = ({ setTogglePages, searchTerm, setSearchTerm }) => {
  return (
    <div className="nav">
      <ul>
        <li>
          <button
            onClick={() => {
              setTogglePages("Home");
              setSearchTerm("");
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button onClick={() => setTogglePages("Favorites")}>Favorites</button>
        </li>
      </ul>

      <input
        id="search-bar"
        type="search"
        placeholder="Search your AI tool"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Navbar;
