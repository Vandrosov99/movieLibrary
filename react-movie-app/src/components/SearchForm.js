import React, { Component } from "react";

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
      <form onSubmit={this.handleSubmitForm}>
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
