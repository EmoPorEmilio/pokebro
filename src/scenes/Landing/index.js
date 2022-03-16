import { Option } from '../../components/Options/Options.styles';
import { LandingContainer } from './Landing.styles';

export const Landing = ({ goToPokemonGuesser, goToDamageCalculator }) => {
  return (
    <LandingContainer>
      <Option onClick={goToPokemonGuesser}>
        <span>¿QUIÉN ES ESE POKÉMON?</span>
      </Option>
      <Option onClick={goToDamageCalculator}>
        <span>¿CUÁNTO PEGA ESO?</span>
      </Option>
    </LandingContainer>
  );
};
