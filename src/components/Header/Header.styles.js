import styled from 'styled-components';
import { theme } from '../../constants';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid ${theme.accent};
  height: 20%;
`;
