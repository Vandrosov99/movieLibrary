import React, { Component } from "react";
import FavouriteMovie from "./FavouriteMovie";
export default class FavouriteList extends Component {
  render() {
    return (
      <div>
        <h1>Will Watch : {this.props.count}</h1>
        <div>START</div>
        <ul>
          {this.props.willWatch.map((item, index) => {
            return (
              <FavouriteMovie
                key={index}
                movie={item}
                willWatch={this.props.willWatch}
                removeFromFav={this.props.removeFav}
              />
            );
          })}
        </ul>
        <div>END</div>
      </div>
    );
  }
}
