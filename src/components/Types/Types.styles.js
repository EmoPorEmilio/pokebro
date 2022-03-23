import styled from 'styled-components';
import { theme } from '../../constants';

export const TypeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex: 1;
  padding: 10px;
  margin: 5px;
  background-color: ${(props) => props.color};
  border-color: ${theme.accent};
  color: ${theme.background};
  border-width: 2px;
  border-radius: 50px;
  border-style: solid;
  align-items: center;
`;

export const TypesContainer = styled.div`
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TypeContainer = styled.div``;

export const VSTitle = styled.span`
  color: ${theme.accent};
  font-size: 20px;
`;
