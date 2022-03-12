import { PokemonCard, PokemonContainer, LoadingCard, PokemonIMG } from './Pokemon.styles';

export const Pokemon = ({pokemonSrc, loading}) => {
    return <PokemonContainer>
            <PokemonCard>
                {!loading? (pokemonSrc && <PokemonIMG src={pokemonSrc}/>) : <LoadingCard/>}
            </PokemonCard>
        </PokemonContainer>
}