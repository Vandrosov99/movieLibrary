import React from "react";
import MovieList from "../MovieList/MovieList";
import FavouriteList from "../FavouriteList/FavouriteList";
import { API_URL, API_KEY } from "../../utils/api";
import "./App.css";
import Header from "../Header/Header";
import CounterWatch from "../CounterWatch/CounterWatch";
import Footer from "../Footer/Footer";
import { Route, Switch } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import NotMovieList from "../NotListItemMovie/Movie";
import SortingTab from "../Sort/SortingTab";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      willWatch: [],
      sortBy: "popularity.desc",
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

  changeSort = sort => {
    this.setState({
      sortBy: sort,
    });
  };

  getMoviesFromApi = () => {
    const url = `${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=${this.state.sortBy}`;
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
    const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
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
  componentDidMount() {
    this.getMoviesFromApi();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.movies == this.state.movies) {
      this.getMoviesFromApi();
    }
  }

  render() {
    return (
      <div className='appContainer'>
        <Header searchFilm={this.searchFilm}></Header>
        <Switch>
          <Route exact path='/'>
            <CounterWatch count={this.state.willWatch.length} />
            <SortingTab changeSort={this.changeSort} />
            <MovieList
              moviesWill={this.state.willWatch}
              movies={this.state.movies}
              removeFilm={this.handleClickRemoveMovie}
              addToWatch={this.handleClickAddToWatch}
              removeFav={this.handleClickRemoveFavMovie}
            />
          </Route>
          <Route exact path='/movies'>
            <FavouriteList
              willWatch={this.state.willWatch}
              moviesWill={this.state.willWatch}
              removeFav={this.handleClickRemoveFavMovie}
            />
          </Route>
          <Route path='/movies/:number'>
            <NotMovieList movies={this.state.movies} />
          </Route>
          <Route component={NotFound}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
