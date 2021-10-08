import styled from 'styled-components/macro';

const Wrapper = styled.div`
  padding: 1rem;
  border-radius: 0.625rem;
  background-color: ${props => props.theme.palette.secondary.s200};
`;

const Filters = styled.div`
  display: flex;
  justify-content: end;
`;

const List = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export { Wrapper, Filters, List };
