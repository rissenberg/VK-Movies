import React, {useEffect, useRef, useState} from "react";
import cls from './style.module.scss'
import {useQuery} from "@tanstack/react-query";
import {IMovie} from "../../../entities/Movie";
import {searchByTitle} from "../api/searchByTitle";
import {MovieListItem} from "../../../entities/MovieListItem";

export const SearchBar = () => {
	const ref = useRef(null);
	const [searchInput, setSearchInput] = useState<string>('');
	const [showResults, setShowResults] = useState<boolean>(false);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			// @ts-ignore
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setShowResults(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	const {
		data: search_result,
		refetch: search_refetch,
		error: search_error,
		isFetching: search_isFetching
	} = useQuery<IMovie[]>(searchByTitle(searchInput));

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(event.target.value);
		setShowResults(true);
		search_refetch();
	}

	const handleClick = () => {
		setShowResults(prev => !prev);
	}

	return (
		<div ref={ref}>
			<input className={cls.search_input}
						 ref={ref}
						 type="text"
						 placeholder="Поиск"
						 value={searchInput}
						 onInput={handleInput}
					   onClick={handleClick}/>

			{showResults &&
				<div className={cls.search_results} onClick={handleClick}>
					{search_result && search_result.length === 0 &&
							<div className={cls.error_label}>Ничего не найдено</div>
					}

					{search_result && search_result.length > 0 &&
						search_result.map((movie) => (
							<MovieListItem movie={movie} key={movie.id}/>
						))}
				</div>
			}
		</div>
	);
};
