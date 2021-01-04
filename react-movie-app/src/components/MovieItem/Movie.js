import React, { Component } from "react";
import "./Movie.css";
import defaultImg from "../../img/MovieItem/no_image_available.png";
import { Link } from "react-router-dom";
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
    const wwValue = this.state.willWatch;

    if (wwValue) {
      this.setState(
        {
          willWatch: false,
        },
        () => {
          const savedWillWatch = JSON.parse(localStorage.getItem("movies"));
          const res = savedWillWatch.filter(el => {
            return el.id !== movie.id;
          });
          this.props.removeFav(res);
          localStorage.setItem("movies", JSON.stringify(res));
        }
      );
    } else {
      this.setState(
        {
          willWatch: true,
        },
        () => {
          const savedWillWatch = JSON.parse(localStorage.getItem("movies"));
          const res = savedWillWatch.find(el => {
            return el.id === movie.id;
          });
          if (!res) {
            savedWillWatch.push(movie);
            localStorage.setItem("movies", JSON.stringify(savedWillWatch));
            this.props.addToWatch(movie);
          }
        }
      );
    }
  };

  componentDidMount() {
    this.checkFavouriteMovie();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.moviesWill !== this.props.moviesWill) {
      this.checkFavouriteMovie();
    }
  }
  checkFavouriteMovie() {
    this.setState({
      willWatch: false,
    });
    const localStorageMovies = JSON.parse(localStorage.getItem("movies"));
    localStorageMovies.forEach(item => {
      if (item.id === this.props.movie.id) {
        this.setState({
          willWatch: true,
        });
      }
    });
  }

  render() {
    const { movie } = this.props;
    const posterPath = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`;
    const backgroundPath = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.background_path}`;
    const imgSrc = movie.poster_path
      ? posterPath
      : movie.background_path
      ? backgroundPath
      : defaultImg;
    const statusWatch = this.state.willWatch ? "Unwatch" : "Will Watch";
    const routeTo = `/movies/${movie.id}`;

    return (
      <div className='movie__item card'>
        <div className='movie__item_text'>
          <Link to={routeTo}>{movie.title}</Link>
        </div>
        <div className='moovie__img_container'>
          <img className='movie__img' src={imgSrc} alt='' />
        </div>
        <button className='btnDelete' onClick={this.removeMovie}>
          Delete Movie
        </button>
        <button
          className='btnToggle'
          onClick={this.addToWatch.bind(this, movie)}>
          {statusWatch}
        </button>
      </div>
    );
  }
}
