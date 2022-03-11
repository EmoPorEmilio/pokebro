import styled from 'styled-components';
import { theme } from '../../constants';

export const YouLoseCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 20px;
    background-color: ${theme.cardsBackground};
    border-color: ${theme.accent};
    border-width: 2px;
    border-radius: 20px;
    border-style: solid;
    max-width: 500px;
    width: 100vw;
    margin: 50px;
`;
;

export const YouLoseContainer = styled.div`
    height: 68%;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const YouLoseIMG = styled.img`
    position: absolute;
    width: 100vw;
`;