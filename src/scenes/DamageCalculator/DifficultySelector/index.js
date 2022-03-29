import { BodyContainer } from '../../scenes.styles';
import { Option } from '../../../components/Options/Options.styles';
import { DIFFICULTY_LEVELS } from '../../../constants';
export const DifficultySelector = ({ goToGame }) => (
  <>
    <BodyContainer>
      <Option onClick={() => goToGame(DIFFICULTY_LEVELS.EASY)}>
        <span>FÁCIL</span>
      </Option>
      <Option onClick={() => goToGame(DIFFICULTY_LEVELS.HARD)}>
        <span>DÍFICIL</span>
      </Option>
    </BodyContainer>
  </>
);
