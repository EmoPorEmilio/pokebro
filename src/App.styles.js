import styled from 'styled-components';
import {theme} from './constants';

export const MainContainer = styled.div`
    background-color: ${theme.background};
    height: 100%;
`;

export const Header = styled.div`
    background-color: ${theme.background};
`;

export const ScoreContainer = styled.div`
    background-color: ${theme.background};
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
`;