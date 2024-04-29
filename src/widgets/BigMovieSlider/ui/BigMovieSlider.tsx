import React from 'react';
import Slider from 'react-slick';
import cls from './style.module.scss'
import {IMovie} from "../../../entities/Movie";
import {MovieCard} from "../../../entities/MovieCard";
import { useMediaQuery } from 'react-responsive';


interface IProps {
	movies: IMovie[]
}

export const MovieSlider = (props: IProps) => {
	const { movies } = props;

	const isBroadDesktop = useMediaQuery({ minWidth: 1350 });
	const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1349 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
	const isPhone = useMediaQuery({ minWidth: 550, maxWidth: 767 });

	const slidesToShow =  isBroadDesktop ? 5 : isDesktop ? 4 : isTablet ? 3 : isPhone ? 2 : 1;

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow,
		slidesToScroll: slidesToShow,
	};

	return (
		<div className={cls.slider_container}>
			<Slider {...settings} className={cls.slider}>
				{movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</Slider>
		</div>
	);
};
