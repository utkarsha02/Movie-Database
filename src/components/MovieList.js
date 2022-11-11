import React from "react";
import MovieCard from "./MovieCard";
import "../styles/movie-list.css";

export default function MovieList({ movieList, isLoading }) {
  if (isLoading) {
    return "Please wait movie is still loading";
  } else {
    return (
      <div className="movie-list">
        {/* lopp over all the movies */}
        {movieList.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    );
  }
}
