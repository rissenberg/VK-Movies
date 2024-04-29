import React from 'react';
import cls from './style.module.scss'
import {IMovie} from "../../Movie";
import {Link} from "react-router-dom";

interface IProps {
	movie: IMovie
}

export const BigMovieCard = (props: IProps) => {
	const {movie} = props;
	const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
	const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	return (
		<Link to={`/movies/${movie.id}`} className={cls.movie_card} style={{ backgroundImage: `url(${backdropUrl})` }}>
			<div className={cls.movie_content}>
				<img src={posterUrl} alt={movie.title} className={cls.movie_poster} />
				<div className={cls.movie_info}>
					<h2 className={cls.movie_title}>{movie.title}</h2>
					<p className={cls.movie_overview}>{movie.overview}</p>
					<span className={cls.movie_rating}>⭐️ {movie.vote_average}</span>
				</div>
			</div>
		</Link>
	);
};