import React from 'react';
import cls from './style.module.scss'
import {IMovie} from "../../Movie";
import {Link} from "react-router-dom";

interface IProps {
	movie: IMovie
}

export const MovieListItem = (props: IProps) => {
	const {movie} = props;

	const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	return (
		<Link to={`/movies/${movie.id}`} className={cls.movie_list_item}>
			<img src={posterUrl} alt={movie.title} className={cls.movie_poster} />
			<div className={cls.movie_info}>
				<h3>{movie.title}</h3>
				<p>Рейтинг: ⭐️ {movie.vote_average}</p>
			</div>
		</Link>
	);
};