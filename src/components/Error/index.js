import { ErrorCard, ErrorContainer } from './Error.styles';

export const Error = ({ message }) => {
  return (
    <ErrorContainer>
      <ErrorCard>
        <span>{message}</span>
      </ErrorCard>
    </ErrorContainer>
  );
};
