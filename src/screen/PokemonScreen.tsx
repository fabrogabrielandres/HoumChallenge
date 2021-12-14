import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useParams  } from 'react-router-dom';
import { usePokemon } from '../hooks/usePokemon';
import { Loader } from '../components/Loader/Loader';
import { AtributsPokemon } from '../components/AtributsPokemon/AtributsPokemon';

export const PokemonScreen = () => {
	let params = useParams ();
	let id = params.id
	
	const { atributs, isLoading } = usePokemon(id)
	
	return (
		<Flex flexDir={'column'}>
		{
				isLoading ? <Loader/> : <AtributsPokemon atributs={atributs}id={id}/>
		}
		</Flex>
	);
};
