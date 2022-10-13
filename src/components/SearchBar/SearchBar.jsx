import React, { useState } from "react";
import { SearchBarStyle } from "./styles.css";

const SearchBar = ({ onChange = () => {} }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div
      className={`searchbar-container ${isFocus ? "focus" : ""}`}
      css={SearchBarStyle}
    >
      <input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
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
