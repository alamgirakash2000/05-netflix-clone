import React from "react";
import "./MovieCompo.style.css";
import { useStateValue } from "../../Context API/StateProvider";
import { useHistory } from "react-router-dom";
const base_url = "https://image.tmdb.org/t/p/original";

function MovieCompo({ movie, isLarge }) {
  const [{ movieDetails }, dispatch] = useStateValue();
  const name = movie.name || movie.title;
  const history = useHistory();

  const handleClick = async () => {
    await dispatch({
      type: "SET_MOVIE",
      movie: movie,
    });
    history.push("/details");
  };
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 col-10">
      <div className="movie" onClick={handleClick}>
        <img
          key={movie.id}
          className={`movie-poster ${isLarge && "large-image"}`}
          src={`${base_url}${
            isLarge ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
        />
        <p>{name.length > 15 ? name.slice(0, 12) + "..." : name}</p>
        <small>
          ⭐{movie.vote_average}({movie.vote_count})
        </small>
      </div>
    </div>
  );
}

export default MovieCompo;
