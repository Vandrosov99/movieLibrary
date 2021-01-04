import React, { Component } from "react";
import "./SortingTab.css";

export default class SortingTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked1: true,
      isClicked12: false,
    };
  }
  onClick1 = value => {
    this.setState({
      isClicked1: !this.state.isClicked1,
    });
    this.setState({
      isClicked2: !this.state.isClicked2,
    });
    this.handlerChangeSort(value);
  };

  onClick2 = value => {
    this.setState({
      isClicked2: !this.state.isClicked2,
    });
    this.setState({
      isClicked1: !this.state.isClicked1,
    });
    this.handlerChangeSort(value);
  };

  handlerChangeSort = value => {
    this.props.changeSort(value);
  };

  render() {
    const getClassName1 = this.state.isClicked1
      ? "cardSort active"
      : "cardSort";
    const getClassName2 = this.state.isClicked2
      ? "cardSort active"
      : "cardSort";

    return (
      <div className='parentSort'>
        <div
          className={getClassName1}
          onClick={this.onClick1.bind(this, "popularity.desc")}>
          Default sort
        </div>
        <div
          className={getClassName2}
          onClick={this.onClick2.bind(this, "popularity.asc")}>
          Another sort
        </div>
      </div>
    );
  }
}
