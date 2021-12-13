import { useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { Atributs } from '../interfaces/interface2';


export const usePokemon = (id?:string) => {
    const [isLoading, setisLoading] = useState(true)
    const [atributs, setAtributs] = useState<Atributs>({} as Atributs)

    const fetchAtributs = async(id?:string)=>{
        setisLoading(true)
        const resp= await pokemonApi.get<Atributs>(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setAtributs(resp.data)
        setisLoading(false)
    }
    useEffect(() => {
        fetchAtributs(id)
    }, [id]);
    return ({atributs,isLoading})
};
