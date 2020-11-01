import React, { Component } from "react";

export default class Pagination extends Component {
  handleChangePage = page => {
    if (page) {
      this.props.updatePage(page);
    }
  };
  getActivePagination = value => {};
  render() {
    const { page, updatePage, total_page } = this.props;
    const pageNumbers = [];
    for (let i = 1; i <= total_page; i++) {
      pageNumbers.push(i);
    }
    return (
      <div>
        {pageNumbers.map((number, index) => {
          return (
            <a key={index} onClick={() => this.handleChangePage(number)}>
              {number}
            </a>
          );
        })}
      </div>
    );
  }
}
