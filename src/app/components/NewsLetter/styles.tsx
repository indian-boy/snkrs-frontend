import styled from 'styled-components/macro';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.palette.secondary.s200};
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
`;

const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.2rem;
  color: ${props => props.theme.palette.primary.p700};
  margin-bottom: 0.5rem;
`;

const Message = styled.span`
  font-style: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${props => props.theme.palette.primary.p700};
  margin-bottom: 1rem;
`;

export { Content, Title, Message };
