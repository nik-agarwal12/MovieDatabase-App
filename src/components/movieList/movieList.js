import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const getData = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=05d40c147b059cb5a8142e5121c0d990&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => setMovieList(data.results));
    };
    getData();
  }, [type]);

  return (
    <div className="container-fluid">
      <h2 className="list__title">{(type ? type : "TOP MOVIES").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
