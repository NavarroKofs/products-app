import React from "react";
import { SearchBarStyle } from "./styles.css";

const SearchBar = ({ onChange = () => {} }) => {
  return (
    <div className="searchbar-container" css={SearchBarStyle}>
      <input
        className="searchbar-input"
        type="text"
        onChange={onChange}
        name="search"
        autoComplete="off"
        placeholder="search by title"
      />
    </div>
  );
};

export default SearchBar;
