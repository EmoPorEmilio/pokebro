import styled from 'styled-components';
import { theme } from '../../constants';

export const Option = styled.div`
    display: flex;
    border-radius: 8px;
    height: 50px;
    margin: 10px;
    width: 100%;
    background-color: ${theme.cardsBackground};
    border-color: ${theme.accent};
    color: ${theme.accent};
    border-width: 2px;
    border-style: solid;
    align-items: center;
    justify-content: center;
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 39vh;
    width: 80vw;
    max-width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
`;