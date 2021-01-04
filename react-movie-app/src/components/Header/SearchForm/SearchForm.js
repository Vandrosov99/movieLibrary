import React, { Component } from "react";
import "./SearchForm.css";

export default class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }
  handleChangeInput = e => {
    const value = e.target.value;
    this.setState({
      query: value,
    });
  };
  handleSubmitForm = e => {
    const searchFilm = this.state.query;
    if (searchFilm) this.props.searchFilm(this.state.query);
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmitForm} className='submit__form'>
        <label>
          <span className='submit__text'> Find Out</span>

          <input
            className='submit__input'
            onChange={this.handleChangeInput}
            type='text'
            value={this.state.query}
          />
        </label>
        <input class='submit__btn' type='submit' value='SEARCH' />
      </form>
    );
  }
}
