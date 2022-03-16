import styled from 'styled-components';
import { theme } from '../../constants';

export const DamageContainer = styled.div`
  display: flex;
  width: 80vw;
  color: ${theme.accent};
  max-width: 80%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 25px;
  @media screen and (min-width: 350px) {
    font-size: 50px;
  }
`;
