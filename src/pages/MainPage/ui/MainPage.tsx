import cls from './style.module.scss';
import {MovieSlider} from "../../../widgets/MovieSlider";
import {getPopularMovies} from "../api/getPopular";
import {useQuery} from "@tanstack/react-query";
import {IMovie} from "../../../entities/Movie";
import {getTopRatedMovies} from "../api/getTopRated";
import {BigMovieSlider} from "../../../widgets/BigMovieSlider";
import {getNowPlayingMovies} from "../api/getNowPlaying";
import {getUpcomingMovies} from "../api/getUpcoming";

export const MainPage = () => {
	const {
		data: data_nowPlaying,
		error: error_nowPlaying,
		isFetching: isFetching_nowPlaying
	} = useQuery<IMovie[]>(getNowPlayingMovies);

	const {
		data: data_popular,
		error: error_popular,
		isFetching: isFetching_popular
	} = useQuery<IMovie[]>(getPopularMovies);

	const {
		data: data_topRated,
		error: error_topRated,
		isFetching: isFetching_topRated
	} = useQuery<IMovie[]>(getTopRatedMovies);

	const {
		data: data_upcoming,
		error: error_upcoming,
		isFetching: isFetching_upcoming
	} = useQuery<IMovie[]>(getUpcomingMovies);

	return (
		<div className={cls.page}>

			<div className={cls.now_playing_title}>
				Сейчас в кино
			</div>
			<div className={cls.big_slider_container}>
				<BigMovieSlider movies={data_nowPlaying ? data_nowPlaying : []}/>
			</div>

			<div className={cls.list_container}>
				<div className={cls.container_title}>
					Популярные
				</div>
				<MovieSlider movies={data_popular ? data_popular : []}/>
			</div>

			<div className={cls.list_container}>
				<div className={cls.container_title}>
					С наивысшим рейтингом
				</div>
				<MovieSlider movies={data_topRated ? data_topRated : []}/>
			</div>

			<div className={cls.list_container}>
				<div className={cls.container_title}>
					Скоро в прокате
				</div>
				<MovieSlider movies={data_upcoming ? data_upcoming : []}/>
			</div>

		</div>
	);
};
