import React from "react";
import SearchForm from "../SearchForm";

const Header = props => {
  const { searchFilm } = props;
  return (
    <div>
      <SearchForm searchFilm={searchFilm} />
    </div>
  );
};

export default Header;
