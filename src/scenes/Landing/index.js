import { Option } from '../../components/Options/Options.styles';
import { LandingContainer } from './Landing.styles';
import { Header } from '../../components/Header';
import { Content } from '../../App.styles';

export const Landing = ({
  goToPokemonGuesser,
  goToDamageCalculator,
  returnToLanding,
}) => {
  return (
    <>
      <Header returnToLanding={returnToLanding} inGame={false}></Header>
      <Content>
        <LandingContainer>
          <Option onClick={goToPokemonGuesser}>
            <span>¿QUIÉN ES ESE POKÉMON?</span>
          </Option>
          <Option onClick={goToDamageCalculator}>
            <span>¿CUÁNTO PEGA ESO?</span>
          </Option>
        </LandingContainer>
      </Content>
    </>
  );
};
