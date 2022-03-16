import { HeaderContainer } from './Header.styles';
import { Logo } from './Logo';
import { Score } from './Score';

export const Header = ({ HP, scorePoints, inGame, returnToLanding }) => {
  return (
    <HeaderContainer>
      {!inGame && <Logo />}
      {inGame && (
        <Score
          returnToLanding={returnToLanding}
          HP={HP}
          scorePoints={scorePoints}
        />
      )}
    </HeaderContainer>
  );
};
