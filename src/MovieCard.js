import React from 'react';

function MovieCard({ movie }) {
  const posterURL = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;

  return (
    <div className="movie-card">
      <img src={posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      
      <a href={movie.downloadLink} download>
        <button>Download Movie</button>
      </a>

    </div>
  );
}

export default MovieCard;
