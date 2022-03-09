import logo from './resources/logo.png';
import { MainContainer, Content } from './App.styles';
import { Header } from './components/Header';
import { Pokemon } from './components/Pokemon';
import { useEffect, useState } from 'react';
import { getRandomAvailablePokemonNumber } from './utils';

const App = () => {
  const [unavailablePokes, setUnavailablePokes] = useState([]);
  
  const [currentPokemon, setCurrentPokemon] = useState(null);

  useEffect(() => {
    let newPokes = getRandomAvailablePokemonNumber(unavailablePokes, 5);
    console.log(newPokes);
    setCurrentPokemon(newPokes[0]);
    setUnavailablePokes((pokes) => pokes.concat(newPokes));
  }, []);

  return (
    <MainContainer>
      <Header>
        {/*<Logo>
        </Logo>
        <Score>
        </Score>*/}
      </Header>
      <Content>
        <Pokemon pokemonNumber={currentPokemon}></Pokemon>
        {/*<Options></Options>*/}
      </Content>
    </MainContainer>
  );
}

export default App;
