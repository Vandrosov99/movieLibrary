import React, { Component } from "react";

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      willWatch: false,
    };
  }
  removeMovie = () => {
    const updatedFimls = this.props.movies.filter(movies => {
      return this.props.movie.id !== movies.id;
    });
    console.log(updatedFimls);
    this.props.removeFilm(updatedFimls);
  };
  addToWatch = movie => {
    if (!this.state.willWatch) {
      this.setState({
        willWatch: true,
      });
      const savedWillWatch = JSON.parse(localStorage.getItem("movies"));
      console.log(savedWillWatch);
      if (savedWillWatch) {
        savedWillWatch.push(movie);
        localStorage.setItem("movies", JSON.stringify(savedWillWatch));
        this.props.addToWatch(movie);
      } else {
        const emptyArr = [];
        localStorage.setItem("movies", JSON.stringify(emptyArr));
      }
    }
  };
  render() {
    const { movie } = this.props;
    return (
      <div>
        <div>{movie.title}</div>
        <button onClick={this.removeMovie}>Delete Movie</button>
        <button onClick={this.addToWatch.bind(this, movie)}>Will Watch</button>
      </div>
    );
  }
}
