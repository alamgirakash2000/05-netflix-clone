import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./row.style.css";
import MovieCompo from "../MovieCompo/MovieCompo";

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if [], run once when row loads ,and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl); //get the movies from api
      setMovies(request.data.results);
      return request.data.results;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="movie-posters">
        {movies.map((movie) => (
          <MovieCompo key={movie.id} isLarge={isLarge} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Row;
