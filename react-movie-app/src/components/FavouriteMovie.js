import React, { Component } from "react";

export default class FavouriteMovie extends Component {
  handleRemoveFromFav = () => {
    const updateWillWatch = this.props.willWatch.filter(item => {
      return this.props.movie.id !== item.id;
    });
    this.props.removeFromFav(updateWillWatch);
    localStorage.setItem("movies", JSON.stringify(updateWillWatch));
  };
  render() {
    const { movie } = this.props;
    return (
      <div>
        <p>{movie.title}</p>
        <button onClick={this.handleRemoveFromFav}>Delete from fav</button>
      </div>
    );
  }
}
