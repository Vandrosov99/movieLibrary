import React from "react";
import { moviesData } from "../const/movieData";
import MovieList from "./MovieList";
import FavouriteList from "./FavouriteList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData,
      willWatch: [],
      test: "1",
    };
  }
  handleClickRemoveMovie = updatedFilms => {
    this.setState({ movies: updatedFilms });
  };
  handleClickAddToWatch = movie => {
    const updateWillWatch = [...this.state.willWatch];
    updateWillWatch.push(movie);
    this.setState({ willWatch: updateWillWatch });
  };
  handleClickRemoveFavMovie = updateFavMovie => {
    this.setState({
      willWatch: updateFavMovie,
    });
  };
  componentWillMount() {
    console.log("will mount");
    const savedWillWatch = JSON.parse(localStorage.getItem("movies"));
    if (savedWillWatch) {
      this.setState({
        willWatch: savedWillWatch,
      });
    } else {
      const emptyArr = [];
      localStorage.setItem("movies", JSON.stringify(emptyArr));
    }
  }

  render() {
    return (
      <div>
        <FavouriteList
          willWatch={this.state.willWatch}
          count={this.state.willWatch.length}
          moviesWill={this.state.willWatch}
          removeFav={this.handleClickRemoveFavMovie}
        />
        <MovieList
          movies={this.state.movies}
          removeFilm={this.handleClickRemoveMovie}
          addToWatch={this.handleClickAddToWatch}
        />
      </div>
    );
  }
}

export default App;
