import styled from 'styled-components/macro';

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  align-items: center;
`;

const Title = styled.span`
  white-space: break-spaces;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.2rem;
  color: ${props => props.theme.palette.primary.p700};
`;

const Distance = styled.span`
  white-space: nowrap;
  font-weight: 500;
  font-size: 1.125rem;
  color: ${props => props.theme.palette.primary.p700};
`;

const SeeOnMap = styled.button`
  background-color: transparent;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration-line: underline;
  cursor: pointer;
  outline: none;
  text-align: center;
  user-select: none;
  display: inline-flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${props => props.theme.palette.primary.p700};
  margin-top: 0.5rem;
  padding: 0;

  :focus,
  :active {
    outline: none;
  }
`;

const ContentWrapper = styled.div`
  background-color: ${props => props.theme.palette.secondary.default};
  margin: 1rem 0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  gap: 0.5rem;
`;

const Information = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: ${props => props.theme.palette.secondary.s500};
`;

const Availability = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 1.5rem;
  color: ${props => props.theme.palette.success.s300};
`;

export {
  Wrapper,
  Header,
  Title,
  Distance,
  SeeOnMap,
  ContentWrapper,
  Information,
  Availability,
};
