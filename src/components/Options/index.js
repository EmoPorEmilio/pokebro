import { OptionsContainer, Option, OptionLoader } from './Options.styles';

export const Options = ({loading, pokemonNameOptions, handleClickOption}) => {
    return <OptionsContainer>
            {pokemonNameOptions.map((pokemon, index) =>
                loading? <OptionLoader/> : <Option onClick={()=>handleClickOption(pokemon)} key={index}><span>{pokemon?.name}</span></Option>
            )}
           </OptionsContainer>
}