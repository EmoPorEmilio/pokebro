import styled from 'styled-components';
import { theme } from '../../constants';

export const PokemonCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex: 1;
    width: 400px;
    height: 300px;
    background-color: ${theme.cardsBackground};
    border-color: ${theme.accent};
    border-width: 2px;
    border-radius: 20px;
    border-style: solid;
`;