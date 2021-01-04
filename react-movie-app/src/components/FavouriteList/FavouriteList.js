import React, { Component } from "react";
import FavouriteMovie from "../FavouriteMovie/FavouriteMovie";
import "./FavouriteList.css";
export default class FavouriteList extends Component {
  EmptyList = () => {
    return (
      <div className='tableContainerEmpty'>
        <h1>Пока тут Фильмов еще нету</h1>
        <p>Добавьте их на главной странице, что бы отобразить здесь!</p>
      </div>
    );
  };

  render() {
    if (this.props.moviesWill.length <= 0) {
      const empty = this.EmptyList();
      return empty;
    }
    return (
      <div className='tableContainer'>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Language</th>
              <th>Title</th>
              <th>X</th>
            </tr>
          </thead>
          <tbody>
            {this.props.moviesWill.map((item, index) => {
              return (
                <FavouriteMovie
                  key={index}
                  movie={item}
                  willWatch={this.props.willWatch}
                  removeFromFav={this.props.removeFav}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
