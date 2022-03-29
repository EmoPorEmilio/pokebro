import { useEffect, useState, useMemo } from 'react';
import pikachuSadGif from '../../resources/pokemon-sad.gif';
import pikachuSadJPG from '../../resources/pokemon-sad.jpg';
import shareTemplate from '../../resources/share-template.png';
import {
  YouLoseCard,
  YouLoseContainer,
  CanvasToExport,
  UIButton,
  UIButtons,
} from './YouLose.styles';
import { SYSTEM_MESSAGES, theme } from './../../constants';
import { b64toBlob } from '../../utils';

export const YouLose = ({ restartGame, scorePoints, difficulty, gameMode }) => {
  const [pikachuSad, setPikachuSad] = useState(null);

  const shareStrokeColor = useMemo(() => '#492635', []);

  useEffect(() => {
    Math.random() >= 0.5
      ? setPikachuSad(pikachuSadGif)
      : setPikachuSad(pikachuSadJPG);

    setupCanvas();
  }, []);

  const setupCanvas = () => {
    let templateIMG = new Image();
    templateIMG.onload = () => {
      let canvas = document.getElementById('canvasToExport');
      let context = canvas.getContext('2d');
      drawTemplate(canvas, context, templateIMG);
      drawGameMode(canvas, context);
      drawDifficulty(canvas, context);
      drawPoints(canvas, context);
    };
    templateIMG.src = shareTemplate;
  };

  const drawTemplate = (canvas, context, templateIMG) => {
    context.drawImage(templateIMG, 0, 0);
  };

  const drawGameMode = (canvas, context) => {
    context.fillStyle = theme.accentHighlight;
    context.strokeStyle = shareStrokeColor;
    context.font = 'normal 800 29px Jost';
    context.textAlign = 'center';
    context.strokeText(gameMode, 196, 263);
    context.fillText(gameMode, 196, 263);
  };

  const drawDifficulty = (canvas, context) => {
    context.fillStyle = theme.accentHighlight;
    context.strokeStyle = shareStrokeColor;
    context.font = 'normal 800 29px Jost';
    context.textAlign = 'center';
    context.strokeText(difficulty, 550, 263);
    context.fillText(difficulty, 550, 263);
  };

  const drawPoints = (canvas, context) => {
    context.fillStyle = theme.correct;
    context.font = 'normal 800 120px Jost';
    context.textAlign = 'center';
    context.fillText(scorePoints, 373, 415);
  };

  const exportAndShare = async () => {
    let canvas = document.getElementById('canvasToExport');
    let base64IMG = canvas.toDataURL('image/png', 1.0);
    //let blobIMG = b64toBlob(base64IMG);
    const blob = await (await fetch(base64IMG)).blob();
    const file = new File([blob], 'fileName.png', { type: blob.type });
    navigator.share({
      title: 'Resultado PokéBro',
      text: 'Me podrás ganar?',
      files: [file],
    });
  };
  return (
    <YouLoseContainer>
      <YouLoseCard>
        <img src={pikachuSad} />
      </YouLoseCard>
      <UIButtons>
        <UIButton onClick={restartGame}>{SYSTEM_MESSAGES.RETRY}</UIButton>
        <UIButton onClick={exportAndShare}>{SYSTEM_MESSAGES.SHARE}</UIButton>
      </UIButtons>
      <CanvasToExport
        id='canvasToExport'
        width='744px'
        height='554px'></CanvasToExport>
    </YouLoseContainer>
  );
};
