import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { Responce, Pokemon } from '../interfaces/interface2';

export const usePokemonPaginated = () => {
    const [loading, setLoading] = useState(true)
	const [ pokemonList, setPokemonList ] = useState<Pokemon[]>([]);
    let nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');
    
	const loadPokemons = async () => {
        setLoading(true)
        let resp = await pokemonApi.get<Responce>(nextPageUrl.current);
        if(!resp.data.next){
            setLoading(false)
        }                
        nextPageUrl.current=resp.data.next
		/* Map de pokemonlist and create pokemon list */
		resp.data.results.forEach(({ name, url }) => {
			console.log(resp.data);
			
			const urlParts = url.split('/');
			const id = urlParts[urlParts.length - 2];
			const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
			setPokemonList((pokemonList) => [ ...pokemonList, { id, name, imageUrl, } ]);
		});

	};
	useEffect(() => {
		loadPokemons();
	}, []);

	return { pokemonList, loadPokemons,loading };
};
