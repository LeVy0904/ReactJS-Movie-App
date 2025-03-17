import React from "react";
import { Spinner } from "./Spinner";
import MovieCard from "./MovieCard";

const MoviesList = ({ isLoading, errorMessage, moviesList }) => {
  return (
    <section className="all-movies">
      <h2 className="mt-10">All Movies</h2>
      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <p className="text-2xl text-red-500">{errorMessage}</p>
      ) : (
        <ul>
          {moviesList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default MoviesList;
