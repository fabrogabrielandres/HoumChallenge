import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../screen/HomeScreen';
import { PokemonScreen } from '../screen/PokemonScreen';

export const PublicRoutes = () => {
	return (
		<Routes>
			<Route path="/home" element={<HomeScreen />} />
			<Route path="/pokemon/:id" element={<PokemonScreen />} />
		</Routes>
	);
};
