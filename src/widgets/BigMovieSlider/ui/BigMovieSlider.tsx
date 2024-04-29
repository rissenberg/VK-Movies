import React from 'react';
import Slider from 'react-slick';
import cls from './style.module.scss'
import {IMovie} from "../../../entities/Movie";
import {BigMovieCard} from "../../../entities/BigMovieCard";


interface IProps {
	movies: IMovie[]
}

export const BigMovieSlider = (props: IProps) => {
	const { movies } = props;

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
	};

	return (
		<div className={cls.slider_container}>
			<Slider {...settings} className={cls.slider}>
				{movies.map((movie) => (
					<BigMovieCard key={movie.id} movie={movie} />
				))}
			</Slider>
		</div>
	);
};
