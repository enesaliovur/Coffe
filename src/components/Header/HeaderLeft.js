import React from "react";
import "./Header.css";
import { SearchBar } from "./UI/SearchBar";

export const HeaderLeft = () => {
  return (
    <div className="header__left">
      <img
        src="data:image/png;base64,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"
        alt=""
      />
      <SearchBar />
    </div>
  );
};