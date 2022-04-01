import { HeaderContainer } from './Header.styles';
import { Logo } from './Logo';
import { Score } from './Score';

export const Header = ({
  HP,
  scorePoints,
  inGame,
  handleHeaderBack,
  timer,
}) => {
  return (
    <HeaderContainer>
      {!inGame && <Logo />}
      {inGame && (
        <Score
          timer={timer}
          handleHeaderBack={handleHeaderBack}
          HP={HP}
          scorePoints={scorePoints}
        />
      )}
    </HeaderContainer>
  );
};
