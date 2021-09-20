import React, { useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../Header.css";
import { Button } from "@material-ui/core";
import { CoffeContext } from "../../context/CoffeContext";
export const SearchBar = () => {
  const { setSearchTerm } = useContext(CoffeContext);
  const handleSearchInputChanges = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="header__search">
      <SearchIcon />
      <input
        placeholder="Search Coffe"
        type="text"
        onChange={handleSearchInputChanges}
      />
      <Button disabled>Ara</Button>
    </div>
  );
};
