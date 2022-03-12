import { OptionsContainer, Option, OptionLoader } from './Options.styles';

export const Options = ({loading, pokemonNameOptions, handleClickOption}) => {
    return <OptionsContainer>
                {(!pokemonNameOptions || loading)? 
                    <><OptionLoader/><OptionLoader/><OptionLoader/><OptionLoader/><OptionLoader/></> 
                    :
                    pokemonNameOptions.map((pokemon, index) =>
                        <Option onClick={()=>handleClickOption(pokemon)} key={index}><span>{pokemon?.name}</span></Option>)}
           </OptionsContainer>
}