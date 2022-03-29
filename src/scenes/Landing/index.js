import { Option } from '../../components/Options/Options.styles';
import { BodyContainer } from './../scenes.styles';
import { Header } from '../../components/Header';
import { Content } from '../../App.styles';
import { GAME_MODES } from './../../constants';

export const Landing = ({
  goToPokemonGuesser,
  goToDamageCalculator,
  handleHeaderBack,
}) => (
  <>
    <Header handleHeaderBack={handleHeaderBack} inGame={false}></Header>
    <Content>
      <BodyContainer>
        <Option onClick={goToPokemonGuesser}>
          <span>{GAME_MODES.POKEMON_GUESSER}</span>
        </Option>
        <Option onClick={goToDamageCalculator}>
          <span>{GAME_MODES.DAMAGE_CALCULATOR}</span>
        </Option>
      </BodyContainer>
    </Content>
  </>
);
