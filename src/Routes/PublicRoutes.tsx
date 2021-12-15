import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBar/NavBar';
import { HomeScreen } from '../screen/HomeScreen';
import { PokemonScreen } from '../screen/PokemonScreen';
import { SearchScreen } from '../screen/SearchScreen';

export const PublicRoutes = () => {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/pokemon/:id" element={<PokemonScreen />} />
				<Route path="/search" element={<SearchScreen />} />
			</Routes>
		</div>
	);
};
