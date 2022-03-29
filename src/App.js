import { MainContainer } from './App.styles';
import { useState } from 'react';
import { PokemonGuesser } from './scenes/PokemonGuesser';
import { Landing } from './scenes/Landing';
import { DamageCalculator } from './scenes/DamageCalculator';

const App = () => {
  const [inGame, setInGame] = useState(false);
  const [inPokemonGuesser, setInPokemonGuesser] = useState(false);
  const [inDamageCalculator, setInDamageCalculator] = useState(false);

  const goToDamageCalculator = () => {
    setInGame(true);
    setInDamageCalculator(true);
  };

  const goToPokemonGuesser = () => {
    setInGame(true);
    setInPokemonGuesser(true);
  };

  const returnToLanding = () => {
    setInGame(false);
    setInPokemonGuesser(false);
    setInDamageCalculator(false);
  };

  return (
    <MainContainer>
      {!inGame && (
        <Landing
          goToPokemonGuesser={goToPokemonGuesser}
          goToDamageCalculator={goToDamageCalculator}
          handleHeaderBack={returnToLanding}
        />
      )}
      {inPokemonGuesser && (
        <PokemonGuesser handleHeaderBack={returnToLanding} />
      )}
      {inDamageCalculator && (
        <DamageCalculator handleHeaderBack={returnToLanding} />
      )}
    </MainContainer>
  );
};

export default App;
