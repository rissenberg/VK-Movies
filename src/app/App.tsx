import React from 'react';
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainPage } from '../pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import {Navbar} from "../widgets/Navbar/ui/Navbar";
import {MoviePage} from "../pages/MoviePage";

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="/movies/:id" element={<MoviePage/>}/>
			</Routes>
		</div>
	);
};

export default App;
