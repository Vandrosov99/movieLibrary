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
    this.props.removeFilm(updatedFimls);
  };
  addToWatch = movie => {
    if (!this.state.willWatch) {
      this.setState({
        willWatch: true,
      });
      const savedWillWatch = JSON.parse(localStorage.getItem("movies"));
      if (savedWillWatch) {
        savedWillWatch.push(movie);
        localStorage.setItem("movies", JSON.stringify(savedWillWatch));
        this.props.addToWatch(movie);
      }
    }
  };
  componentDidMount() {
    this.checkFavouriteMovie();
  }
  componentWillUpdate(prevProps, prevState) {
    if (prevProps.count != this.props.count) {
      this.checkFavouriteMovie();
    }
  }
  checkFavouriteMovie() {
    const localStorageMovies = JSON.parse(localStorage.getItem("movies"));
    let flag = 0;
    localStorageMovies.forEach(item => {
      if (item.id === this.props.movie.id) {
        this.setState({
          willWatch: true,
        });
        flag = 1;
      }
    });
    if (flag == 1) return;
    this.setState({
      willWatch: false,
    });
  }
  render() {
    const { movie, count } = this.props;
    return (
      <div>
        <div>{movie.title}</div>
        <button onClick={this.removeMovie}>Delete Movie</button>
        <button onClick={this.addToWatch.bind(this, movie)}>
          {this.state.willWatch ? "Dont Watch" : "Will Watch"}
        </button>
      </div>
    );
  }
}
