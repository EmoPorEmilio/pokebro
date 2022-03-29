import { Option } from '../../components/Options/Options.styles';
import { BodyContainer } from './../scenes.styles';
import { Header } from '../../components/Header';
import { Content } from '../../App.styles';

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
          <span>¿QUIÉN ES ESE POKÉMON?</span>
        </Option>
        <Option onClick={goToDamageCalculator}>
          <span>¿CUÁNTO PEGA ESO?</span>
        </Option>
      </BodyContainer>
    </Content>
  </>
);
