import { useState } from 'react';
import { OptionsContainer, Option, OptionLoader } from './Options.styles';

export const Options = ({
  correctNameOption,
  loading,
  pokemonNameOptions,
  handleClickOption,
  validation,
}) => {
  const [lastClickedOption, setLastClickedOption] = useState(null);

  const handleClick = (pokemon) => {
    if (!validation) {
      setLastClickedOption(pokemon.name);
      handleClickOption(pokemon);
    }
  };

  return (
    <OptionsContainer>
      {!pokemonNameOptions || loading ? (
        <>
          <OptionLoader />
          <OptionLoader />
          <OptionLoader />
          <OptionLoader />
          <OptionLoader />
        </>
      ) : (
        pokemonNameOptions.map((pokemon, index) => (
          <Option
            validation={validation}
            incorrect={
              validation &&
              pokemon.name === lastClickedOption &&
              pokemon.name !== correctNameOption
            }
            correct={validation && pokemon.name === correctNameOption}
            onClick={() => handleClick(pokemon)}
            key={pokemon.name}>
            <span>{pokemon.name}</span>
          </Option>
        ))
      )}
    </OptionsContainer>
  );
};
