import { SYSTEM_MESSAGES } from '../../constants';
import { DamageContainer } from './DamageCalculator.styles';
export const DamageCalculator = () => {
  return (
    <DamageContainer>
      <span>{SYSTEM_MESSAGES.UNAVAILABLE}</span>
    </DamageContainer>
  );
};
