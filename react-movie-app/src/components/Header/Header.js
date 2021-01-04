import React from "react";
import "./Header.css";
import SearchForm from "../Header/SearchForm/SearchForm";
import logo from "../../img/Header/logo2.svg";
import "../../styles/Common.css";
import { Link } from "react-router-dom";

export default class FavouriteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }
  homeClick = () => {
    if (this.state.isClicked) {
      this.setState({
        isClicked: false,
      });
    }
  };

  favClick = () => {
    if (!this.state.isClicked) {
      this.setState({
        isClicked: true,
      });
    }
  };

  render() {
    const { searchFilm } = this.props;

    const savedActiveClassName = this.state.isClicked
      ? "favFilmsBtn bg-yellow"
      : "favFilmsBtn";

    return (
      <div className='header'>
        <div className='container'>
          <div className='header_container'>
            <div className='logo'>
              <Link to='/' onClick={this.homeClick}>
                <img src={logo} alt='logo' />
              </Link>
            </div>
            <div className={savedActiveClassName}>
              <Link onClick={this.favClick} to='/movies'>
                Saved Films
              </Link>
            </div>
            <SearchForm searchFilm={searchFilm} />
          </div>
        </div>
      </div>
    );
  }
}
