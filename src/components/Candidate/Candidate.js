import React from "react";
import "./Candidate.css";

function Candidate() {
  return (
    <div className="candidate-container">
      <div className="sort-dropdown">
        <label htmlFor="sort">Sort </label>
        <select id="sort" defaultValue="">
          <option value="" disabled hidden>
            Select
          </option>
          <option value="arun">Arun</option>
          <option value="john">John</option>
          <option value="mary">Mary</option>
        </select>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search for candidate" />
      </div>
    </div>
  );
}

export default Candidate;
