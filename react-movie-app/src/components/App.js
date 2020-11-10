import React from "react";
import MovieList from "./MovieList";
import FavouriteList from "./FavouriteList";
import SortingTab from "./SortingTab";
import { API_URL, API_KEY } from "../utils/api";
import Pagination from "./Pagination";
import Header from "./Header/Header";

import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      willWatch: [],
      sortBy: "popularity.desc",
      page: 1,
      total_page: 5,
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
    console.log("update");
  };
  updateSort = value => {
    this.setState({
      sortBy: value,
    });
  };
  updatePage = value => {
    this.setState({
      page: value,
    });
  };
  getMovies = () => {
    const url = `${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=${this.state.sortBy}&page=${this.state.page}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          movies: data.results,
        });
      });
  };
  searchFilm = query => {
    const url = `${API_URL}/search/movie?api_key=${API_KEY}&page=${this.state.page}&query=${query}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          movies: data.results,
        });
      });
  };
  componentWillMount() {
    const savedWillWatch = JSON.parse(localStorage.getItem("movies"));
    console.log(savedWillWatch);
    if (savedWillWatch) {
      this.setState({
        willWatch: savedWillWatch,
      });
    } else {
      const emptyArr = [];
      localStorage.setItem("movies", JSON.stringify(emptyArr));
    }
  }

  componentDidMount() {
    this.getMovies();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy) {
      this.getMovies();
    }
    if (prevState.page !== this.state.page) {
      console.log("in production");
    }
  }
  render() {
    return (
      <div className='wrapper'>
        <Header searchFilm={this.searchFilm} />
        <FavouriteList
          willWatch={this.state.willWatch}
          count={this.state.willWatch.length}
          moviesWill={this.state.willWatch}
          removeFav={this.handleClickRemoveFavMovie}
        />
        <SortingTab sortBy={this.state.sortBy} updateSort={this.updateSort} />
        <MovieList
          movies={this.state.movies}
          removeFilm={this.handleClickRemoveMovie}
          addToWatch={this.handleClickAddToWatch}
          count={this.state.willWatch.length}
        />
        <Pagination
          updatePage={this.updatePage}
          page={this.state.page}
          total_page={this.state.total_page}
        />
      </div>
    );
  }
}

export default App;
