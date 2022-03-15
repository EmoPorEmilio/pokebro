import { HeaderContainer } from './Header.styles';
import { Logo } from './Logo';
import { Score } from './Score';

export const Header = ({ HP, scorePoints }) => {
  return (
    <HeaderContainer>
      <Logo />
      <Score HP={HP} scorePoints={scorePoints} />
    </HeaderContainer>
  );
};
