import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultImg from "../../img/MovieItem/no_image_available.png";
import "./Movie.css";
export default function Movie(props) {
  const params = useParams();

  const [movie, setMovie] = useState(null);

  const checkMovie = () => {
    const movieItem = props.movies.find(
      movie => movie.id == Number(params.number)
    );
    setMovie(movieItem);
  };

  useEffect(() => {
    checkMovie();
  });

  if (movie) {
    const posterPath = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`;
    const backgroundPath = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.background_path}`;
    const imgSrc = movie.poster_path
      ? posterPath
      : movie.background_path
      ? backgroundPath
      : defaultImg;
    return (
      <div className='parentNotMovie'>
        <div className='title'>Name of The Film :{movie.title}</div>
        <div className='img'>
          <img className='movie__img' src={imgSrc} alt='' />
        </div>
        <div className='desc'>
          Description :{movie.overview} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nihil est ullam commodi accusamus iusto vitae
          delectus dolores voluptates quis maxime.
        </div>
        <div className='avgVote'>Average vote :{movie.vote_average}</div>
        <div className='adult'>{movie.adult ? "up to view" : "18+"}</div>
        <div className='originalLanguage'>
          Original language :{movie.original_language}
        </div>
      </div>
    );
  } else {
    return <div>di nah</div>;
  }
}
