import React from 'react';
import cls from './style.module.scss'
import { IMovie } from '../../../entities/Movie';
import {useQuery} from "@tanstack/react-query";
import {getMovieInfo} from "../api/getMovieInfo";
import {useParams} from "react-router-dom";
import {MovieSlider} from "../../../widgets/MovieSlider";
import {getSimilarMovies} from "../api/getSimilarMovies"; // Импортируем интерфейс

export const MoviePage = () => {
	const params = useParams();

	const {
		data: movie,
		error,
		isFetching
	} = useQuery<IMovie>(getMovieInfo(params.id ? params.id : ''));

	const {
		data: similar_movies,
		error: error_similar,
		isFetching: isFetching_similar
	} = useQuery<IMovie[]>(getSimilarMovies(params.id ? params.id : ''));

	const backdropUrl = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;

	return (
		<>{movie && movie.title ?
			<div className={cls.movie_details_page}
					 style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${backdropUrl})`}}>
				<div className={cls.movie_details_content}>
					<div className={cls.movie_poster}>
						<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
					</div>
					<div className={cls.movie_info}>
						<h1>{movie.title}</h1>
						<p className={cls.movie_overview}>{movie.overview}</p>
						{/* Дополнительная информация */}
						<p>Дата выхода: {movie.release_date}</p>
						<p>Жанры: {movie.genres.map((genre) => genre.name).join(', ')}</p>
						<p>Рейтинг: ⭐️ {movie.vote_average}</p>
						{/* ... другие свойства фильма ... */}
					</div>
				</div>

				<div className={cls.list_container}>
					<div className={cls.container_title}>
						Похожие фильмы
					</div>
					<MovieSlider movies={similar_movies ? similar_movies : []}/>
				</div>

			</div>
			: <div className={cls.error_label}>
				Ничего не нашлось!
			</div>
		}</>
	);
};
