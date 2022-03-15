import styled from 'styled-components';
import { theme } from '../../constants';

export const ErrorCard = styled.div`
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
  width: 100%;
  margin: 50px;
  color: ${theme.accent};
  font-weight: 800;
  font-size: 20px;
`;
export const ErrorContainer = styled.div`
  height: 68%;
  max-width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
