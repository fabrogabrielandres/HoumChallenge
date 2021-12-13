import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useNavigate,useParams  } from 'react-router-dom';
import { usePokemon } from '../hooks/usePokemon';

export const PokemonScreen = () => {
	let navigate = useNavigate()
	let params = useParams ();
	let id = params.id
	
	const { atributs, isLoading } = usePokemon(id)
	console.log(atributs,isLoading);
	
	return (
		<Flex flexDir={'column'}>
			<Flex bg="red" w={'100%'} h={'30vh'} borderBottomRadius={'full'}>
				hola
			</Flex>
			<Flex w={'100%'} h={'70vh'}>
				chau
			</Flex>
			{
				isLoading ? <h1>cargando....</h1> : <h1>termino</h1>
			}


		</Flex>
	);
};
