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
    e.preventDefault();

    const searchFilm = this.state.query;
    if (searchFilm) {
      this.props.searchFilm(searchFilm);
    }
    this.state.query = "";
  };
  render() {
    return (
      <form className='search-form' onSubmit={this.handleSubmitForm}>
        <label>
          Ім'я:
          <input
            onChange={this.handleChangeInput}
            type='text'
            value={this.state.query}
          />
        </label>
        <input type='submit' value='Надіслати' />
      </form>
    );
  }
}