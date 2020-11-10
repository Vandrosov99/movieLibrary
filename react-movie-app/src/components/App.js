import React from "react";
// import { moviesData } from "../const/movieData";
import MovieList from "./MovieList";
import FavouriteList from "./FavouriteList";
import SortingTab from "./SortingTab";
import { API_URL, API_KEY } from "../utils/api";
import Pagination from "./Pagination";
import Header from "./Header/Header";
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
    if (savedWillWatch) {
      this.setState({
        willWatch: savedWillWatch,
      });
    } else {
      const emptyArr = [];
      localStorage.setItem("movies", JSON.stringify(emptyArr));
    }
  }
  componentWillMount() {
    console.log("will mount");
  }
  componentDidMount() {
    this.getMovies();
    console.log("did mount");
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy) {
      this.getMovies();
      console.log("did update");
    }
    if (prevState.page !== this.state.page) {
      console.log("in production");
    }
  }
  render() {
    return (
      <div>
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
