import heartIcon from '../../../resources/heart-icon.png';
import { ScoreContainer, ScorePoints, HealthPoints, HealthIcon } from './Score.styles';

export const Score = ({HP, scorePoints}) => {
    return  <ScoreContainer>
                <ScorePoints>
                    <span>{scorePoints}</span>
                </ScorePoints>
                <HealthPoints>
                    <HealthIcon off={!(HP > 0)} src={heartIcon}/>
                    <HealthIcon off={!(HP > 1)} src={heartIcon}/>
                    <HealthIcon off={!(HP > 2)} src={heartIcon}/>
                </HealthPoints>
            </ScoreContainer>
}