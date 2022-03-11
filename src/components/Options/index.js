import { OptionsContainer, Option } from './Options.styles';

export const Options = ({pokemonNameOptions, handleClickOption}) => {
    return <OptionsContainer>
            {pokemonNameOptions.map((pokemon, index) =>
                <Option onClick={()=>handleClickOption(pokemon)} key={index}><span>{pokemon?.name}</span></Option>
            )}
           </OptionsContainer>
}