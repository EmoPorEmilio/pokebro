import logo from './resources/logo.png';
import { MainContainer, Content } from './App.styles';
import { Header } from './components/Header';
import { Pokemon } from './components/Pokemon';
import { Options } from './components/Options';
import { useEffect, useState } from 'react';
import { getRandomAvailablePokemonNumber } from './utils';

const App = () => {
  const [unavailablePokes, setUnavailablePokes] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [pokemonNameOptions, setPokemonNameOptions] = useState([]);
  const [HP, setHP] = useState(2);
  const [scorePoints, setScorePoints] = useState('000');

  useEffect(() => {
    let newPokes = getRandomAvailablePokemonNumber(unavailablePokes, 5);
    setCurrentPokemon(newPokes[0]);
    setPokemonNameOptions(newPokes.splice(1, 4));
    setUnavailablePokes((previousPokes) => previousPokes.concat(newPokes));
  }, []);

  return (
    <MainContainer>
      <Header HP={HP} scorePoints={scorePoints}>
      </Header>
      <Content>
        <Pokemon pokemonNumber={currentPokemon}></Pokemon>
        <Options pokemonNameOptions={pokemonNameOptions}></Options>
      </Content>
    </MainContainer>
  );
}

export default App;
