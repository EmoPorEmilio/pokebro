import { MainContainer, Content } from './App.styles';
import { Header } from './components/Header';
import { YouLose } from './components/YouLose';
import { Error } from './components/Error';
import { useEffect, useState } from 'react';
import { PokemonGuesser } from './scenes/PokemonGuesser';
import { Landing } from './scenes/Landing';
import { DamageCalculator } from './scenes/DamageCalculator';

const App = () => {
  const [HP, setHP] = useState(3);
  const [inGame, setInGame] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [scorePoints, setScorePoints] = useState('000');
  const [validationState, setValidationState] = useState(false);
  const [level, setLevel] = useState(0);
  const [inPokemonGuesser, setInPokemonGuesser] = useState(false);
  const [inDamageCalculator, setInDamageCalculator] = useState(false);

  const handleLifeLoss = () => {
    setHP((prevHP) => prevHP - 1);
  };

  const handlePointScored = () =>
    setScorePoints((currentPoints) =>
      (parseInt(currentPoints) + 1).toString().padStart(3, '0')
    );

  const handleAppTap = () => {
    if (validationState) {
      setLevel((prevLevel) => prevLevel + 1);
      setValidationState(false);
      setLoading(true);
    }
  };

  const restartGame = () => {
    setLevel(0);
    setHP(3);
    setScorePoints('000');
    setValidationState(false);
    setLoading(true);
  };

  const isHealthZero = HP === 0;

  const goToDamageCalculator = () => {
    setInGame(true);
    setInDamageCalculator(true);
  };

  const goToPokemonGuesser = () => {
    setInGame(true);
    setInPokemonGuesser(true);
  };

  const returnToLanding = () => {
    setValidationState(false);
    setInGame(false);
    setInPokemonGuesser(false);
    setInDamageCalculator(false);
  };

  useEffect(() => {
    if (HP === 0) setValidationState(false);
  }, [HP]);

  return (
    <MainContainer onClick={handleAppTap}>
      <Header
        returnToLanding={returnToLanding}
        inGame={inGame}
        HP={HP}
        scorePoints={scorePoints}></Header>
      <Content>
        {isHealthZero ? (
          <YouLose restartGame={restartGame} />
        ) : errorMessage ? (
          <Error message={errorMessage}></Error>
        ) : !inGame ? (
          <Landing
            goToPokemonGuesser={goToPokemonGuesser}
            goToDamageCalculator={goToDamageCalculator}
          />
        ) : inPokemonGuesser ? (
          <PokemonGuesser
            level={level}
            loading={loading}
            setLoading={setLoading}
            handleLifeLoss={handleLifeLoss}
            handlePointScored={handlePointScored}
            setErrorMessage={setErrorMessage}
            validationState={validationState}
            setValidationState={setValidationState}
          />
        ) : (
          <DamageCalculator></DamageCalculator>
        )}
      </Content>
    </MainContainer>
  );
};

export default App;
