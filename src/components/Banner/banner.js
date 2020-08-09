import React, { useState, useEffect } from "react";
import "./banner.style.css";
import axios from "../axios";

const base_url = "https://image.tmdb.org/t/p/original";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // if [], run once when row loads ,and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl); //get the movies from api
      let movies = request.data.results;
      let movie = movies[Math.floor(Math.random() * movies.length) - 1];
      setMovie(movie);
      return movie;
    }
    fetchData();
  }, [Banner]);

  function truncate(s, n) {
    console.log(s, n);

    // if (s.length > n) {
    //   return "yes";
    // } else {
    //   return "no";
    // }
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            'https://image.tmdb.org/t/p/original/${movie.backdrop_path}'
            )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1>{movie.title || movie.name || movie.original_name}</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h2 className="banner-description">{movie.overview}</h2>
      </div>
      <div className="fade"></div>
    </header>
  );
}

export default Banner;
