import React from 'react';

const MovieCard = ({ movie }) => {
	const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	return (
		<div className="movie-card">
		<img src={posterUrl} alt={movie.title} className="movie-poster" />
	<div className="movie-info">
	<h3 className="movie-title">{movie.title}</h3>
		<span className="movie-rating">⭐️ {movie.vote_average}</span>
	</div>
	</div>
);
};