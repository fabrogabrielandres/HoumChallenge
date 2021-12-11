import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { Responce, Pokemon } from '../interfaces/interface2';

export const usePokemonPaginated = () => {
	const [ pokemonList, setPokemonList ] = useState<Pokemon[]>([]);
	const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=10');

	const loadPokemons = async () => {
		let resp = await pokemonApi.get<Responce>(nextPageUrl.current);

		/* Map de pokemonlist */
		resp.data.results.forEach((item) => {
			const { name, url } = item;
			const urlParts = item.url.split('/');
			const id = urlParts[urlParts.length - 2];
			const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
			setPokemonList((pokemonList) => [ ...pokemonList, { id, name, imageUrl } ]);
		});
	};
	useEffect(() => {
		loadPokemons();
	}, []);

    return pokemonList;
};
