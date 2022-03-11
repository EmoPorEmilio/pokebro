import { useEffect, useState } from "react"
import { PokemonCard, PokemonContainer } from './Pokemon.styles';
import { pokemonIMGURL } from '../../utils';

import axios from 'axios';

export const Pokemon = ({pokemon}) => {
    const number = pokemon?.number;
    const [src, setSrc] = useState(null);

    const fetchPokemonImage = async () => {
        try {
            let res = await axios.get(pokemonIMGURL(number), {responseType: 'blob'});
            setSrc(URL.createObjectURL(res.data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (number) {
            fetchPokemonImage();
        };
    }, [number]);

    return <PokemonContainer>
            <PokemonCard>
                {src && <img src={src}/>}
            </PokemonCard>
        </PokemonContainer>
}