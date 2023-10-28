import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import TMDB_API_KEY from './config';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  }, []);

  return (
    <div className="movie-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-cards">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
