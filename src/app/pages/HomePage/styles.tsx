import styled from 'styled-components/macro';

const Wrapper = styled.div`
  padding: 2rem 1rem;
  background: ${props => props.theme.palette.secondary.default};
  display: flex;
  justify-content: center;
`;

const Title = styled.span`
  color: ${props => props.theme.palette.primary.p700};
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.2rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export { Wrapper, Title, Main };
