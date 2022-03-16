import { MainContainer, Content } from './App.styles';
import { Header } from './components/Header';
import { YouLose } from './components/YouLose';
import { Error } from './components/Error';
import { useState } from 'react';
import { PokemonGuesserScene } from './scenes/PokemonGuesser';

const App = () => {
  const [HP, setHP] = useState(3);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [scorePoints, setScorePoints] = useState('000');
  const [validationState, setValidationState] = useState(false);
  const [level, setLevel] = useState(0);

  const handleLifeLoss = () => setHP((prevHP) => prevHP - 1);
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

  return (
    <MainContainer onClick={handleAppTap}>
      <Header HP={HP} scorePoints={scorePoints}></Header>
      <Content>
        {HP === 0 ? (
          <YouLose />
        ) : errorMessage ? (
          <Error message={errorMessage}></Error>
        ) : (
          <PokemonGuesserScene
            level={level}
            setLevel={setLevel}
            loading={loading}
            setLoading={setLoading}
            handleLifeLoss={handleLifeLoss}
            handlePointScored={handlePointScored}
            setErrorMessage={setErrorMessage}
            validationState={validationState}
            setValidationState={setValidationState}
          />
        )}
      </Content>
    </MainContainer>
  );
};

export default App;
