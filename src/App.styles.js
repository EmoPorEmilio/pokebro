import styled from 'styled-components';
import { theme } from './constants';

export const MainContainer = styled.div`
  background-color: ${theme.background};
  min-height: 100%;
  min-height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Jost', sans-serif;
`;

export const Header = styled.div`
  background-color: ${theme.background};
`;

export const ScoreContainer = styled.div`
  background-color: ${theme.background};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;
