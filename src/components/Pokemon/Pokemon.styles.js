import styled from 'styled-components';
import { theme } from '../../constants';

export const PokemonCard = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 400px;
    height: 300px;
    background-color: ${theme.cardsBackground};
    border-color: ${theme.accent};
    border-width: 2px;
    border-radius: 20px;
    border-style: solid;
`;