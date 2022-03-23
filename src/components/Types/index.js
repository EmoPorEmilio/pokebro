import {
  TypesContainer,
  TypeContainer,
  TypeCard,
  VSTitle,
} from './Types.styles';
import { types } from '../../data/types';

export const Types = ({ typesCombinations }) => {
  return (
    <TypesContainer>
      {types[typesCombinations[0]] ? (
        <TypeContainer>
          <TypeCard color={types[typesCombinations[0]].color}>
            {types[typesCombinations[0]].printName}
          </TypeCard>
        </TypeContainer>
      ) : (
        ''
      )}
      <VSTitle>VS</VSTitle>
      <TypeContainer>
        {types[typesCombinations[1]] ? (
          <TypeCard color={types[typesCombinations[1]].color}>
            {types[typesCombinations[1]].printName}
          </TypeCard>
        ) : (
          ''
        )}
        {types[typesCombinations[2]] ? (
          <TypeCard color={types[typesCombinations[2]].color}>
            {types[typesCombinations[2]].printName}
          </TypeCard>
        ) : (
          ''
        )}
      </TypeContainer>
    </TypesContainer>
  );
};
