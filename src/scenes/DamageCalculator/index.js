import { SYSTEM_MESSAGES } from '../../constants';
import { Header } from '../../components/Header';
import { Content } from '../../App.styles';
import { DamageContainer } from './DamageCalculator.styles';
import { useState } from 'react';
export const DamageCalculator = ({ returnToLanding }) => {
  const [HP, setHP] = useState(3);
  const [scorePoints, setScorePoints] = useState('000');

  return (
    <>
      <Header
        returnToLanding={returnToLanding}
        inGame={true}
        HP={HP}
        scorePoints={scorePoints}></Header>
      <Content>
        <DamageContainer>
          <span>{SYSTEM_MESSAGES.UNAVAILABLE}</span>
        </DamageContainer>
      </Content>
    </>
  );
};
