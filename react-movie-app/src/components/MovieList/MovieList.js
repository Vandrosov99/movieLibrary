import React, { Component } from "react";
import Movie from "../MovieItem/Movie";
import "./MovieList.css";
import "../../styles/Common.css";

class MovieList extends Component {
  render() {
    const {
      movies,
      removeFilm,
      addToWatch,
      removeFav,
      moviesWill,
    } = this.props;
    return (
      <div className='container'>
        <div className='movieList__container'>
          {movies.map(movie => {
            return (
              <Movie
                moviesWill={moviesWill}
                movie={movie}
                key={movie.id}
                removeFilm={removeFilm}
                movies={movies}
                addToWatch={addToWatch}
                removeFav={removeFav}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default MovieList;
