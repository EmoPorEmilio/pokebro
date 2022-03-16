import styled from 'styled-components';
import { theme } from '../../../constants';

export const BackArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ArrowIcon = styled.svg`
  width: auto;
  height: 100%;
  fill: ${theme.accent};
  :hover {
    cursor: pointer;
    fill: ${theme.backgroundLight};
  }
`;

export const ScoreContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 20px;
`;
export const HealthPoints = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const ScorePoints = styled.div`
  color: ${theme.accent};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10vw;
  @media screen and (min-width: 900px) {
    font-size: 100px;
  }
  font-weight: 300;
`;

export const HealthIcon = styled.img`
  width: 5vw;
  max-width: 50px;
  ${(props) => (props.off ? 'opacity: 0.2' : '')}
`;
