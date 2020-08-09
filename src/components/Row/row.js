import React, { useState, useEffect } from "react";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./row.style.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    // if [], run once when row loads ,and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl); //get the movies from api
      setMovies(request.data.results);
      return request.data.results;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "360",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search); //to get the search id
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="movie-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`movie-poster ${isLarge && "large-image"}`}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
