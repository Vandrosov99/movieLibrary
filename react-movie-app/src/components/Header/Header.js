import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Logo from "../Logo/Logo";
import "./Header.css";
const Header = props => {
  const { searchFilm } = props;
  return (
    <div className='header-container'>
      <Logo />
      <SearchForm searchFilm={searchFilm} />
    </div>
  );
};

export default Header;
