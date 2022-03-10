import { OptionsContainer, Option } from './Options.styles';

export const Options = ({pokemonNameOptions}) => {
    return <OptionsContainer>
            {pokemonNameOptions.map((pokemonName, index) =>
                <span key={index}>{pokemonName}</span>
            )}
           </OptionsContainer>
}