import React, { Component } from "react";
import Movie from "./Movie";

class MovieList extends Component {
  render() {
    const { movies, removeFilm, addToWatch, count } = this.props;
    console.log("MOVIELIST");
    return (
      <div>
        {movies.map(movie => {
          return (
            <Movie
              movie={movie}
              key={movie.id}
              removeFilm={removeFilm}
              movies={movies}
              addToWatch={addToWatch}
              count={count}
            />
          );
        })}
      </div>
    );
  }
}

export default MovieList;
