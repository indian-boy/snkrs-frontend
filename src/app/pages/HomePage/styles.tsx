import { SearchInput } from 'app/components';
import styled from 'styled-components/macro';
import { media } from 'styles/media';

const Wrapper = styled.div`
  padding: 2rem 1rem;
  background: ${props => props.theme.palette.secondary.default};
  display: flex;
  justify-content: center;

  ${media.medium`
    padding: 2.5rem;
  `}
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
  gap: 2.5rem;
  align-items: center;
  width: 100%;
`;

const SearchInputCustomized = (component: typeof SearchInput) => styled(
  component,
)`
  ${media.medium`
    width: 29rem;
  `}
`;

const HomeSearchInput = SearchInputCustomized(SearchInput);

const SearchWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const ContentWrapperMediumScreen = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  width: 100%;
`;

const ContentWrapperMobileScreen = styled.div`
  height: 100%;
  width: 100%;
`;

const Iframe = styled.iframe`
  border-radius: 0.625rem;
`;

export {
  Wrapper,
  Title,
  Main,
  HomeSearchInput,
  SearchWrapper,
  Iframe,
  ContentWrapperMediumScreen,
  ContentWrapperMobileScreen,
};
