import React, { Component } from "react";
import "./FavouriteMovie.css";
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
      <tr>
        <td>{movie.id}</td>
        <td>{movie.original_language}</td>
        <td>{movie.title}</td>
        <td className='deleteTd'>
          {/* <button >Delete from fav</button> */}
          <div
            onClick={this.handleRemoveFromFav}
            className='card__delete'></div>
        </td>
      </tr>
    );
  }
}
