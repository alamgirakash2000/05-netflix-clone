import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useStateValue } from "./Context API/StateProvider";
import { useHistory } from "react-router-dom";

function Details() {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [{ movieDetails }, dispatch] = useStateValue();
  const [movie, setMovie] = useState(movieDetails);
  const history = useHistory();

  useEffect(() => {
    if (!movie) {
      history.push("/");
      return;
    }
    console.log(movie);
    const getMovie = async () => {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        await movieTrailer(
          movie?.title || movie?.name || movie?.original_name || ""
        )
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search); //to get the search id
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error) => console.log(error));
      }
    };
    getMovie();
  }, []);

  const opts = {
    height: "480",
    width: "80%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div className="container">
      <div className="details my-4">
        <h1 className="details__name">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <p>Realse Date : {movie.release_date}</p>
        <p>
          Type : <strong>{movie.media_type}</strong>{" "}
        </p>
        <p>
          Rating :{" "}
          <strong>
            {movie.vote_average}/10 ({movie.vote_count})
          </strong>
        </p>

        <div className="my-5">
          {trailerUrl ? (
            <Youtube videoId={trailerUrl} opts={opts} />
          ) : (
            <h1>Sorry!! No trailer available for this movie</h1>
          )}
        </div>

        <button className="details__addButton bg-info text-white">
          ADD TO FAVORITE
        </button>

        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default Details;
