import React, { Component } from "react";

export default class SortingTab extends Component {
  handlerChangeSort = value => {
    this.props.updateSort(value);
  };
  getClassName = value => {
    return this.props.sortBy === value ? "active" : "";
  };
  render() {
    const { updateSort, sortBy } = this.props;
    console.log("RENDER SORTING", sortBy);

    return (
      <div>
        <div
          className={this.getClassName("popularity.desc")}
          onClick={this.handlerChangeSort.bind(this, "popularity.desc")}>
          Default sort
        </div>
        <div
          className={this.getClassName("popularity.asc")}
          onClick={this.handlerChangeSort.bind(this, "popularity.asc")}>
          Another sort
        </div>
      </div>
    );
  }
}
