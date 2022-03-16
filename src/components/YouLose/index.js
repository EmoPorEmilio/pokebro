import { useEffect, useState } from 'react';
import pikachuSadGif from '../../resources/pokemon-sad.gif';
import pikachuSadJPG from '../../resources/pokemon-sad.jpg';
import { YouLoseCard, YouLoseContainer } from './YouLose.styles';
import { SYSTEM_MESSAGES } from './../../constants';

export const YouLose = ({ restartGame }) => {
  const [pikachuSad, setPikachuSad] = useState(null);

  useEffect(() => {
    Math.random() >= 0.5
      ? setPikachuSad(pikachuSadGif)
      : setPikachuSad(pikachuSadJPG);
  }, []);
  return (
    <YouLoseContainer onClick={restartGame}>
      <span>{SYSTEM_MESSAGES.RETRY}</span>
      <YouLoseCard>
        <img src={pikachuSad} />
      </YouLoseCard>
    </YouLoseContainer>
  );
};
