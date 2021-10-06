import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  padding: 2rem 1rem;
  background: ${props => props.theme.palette.primary.default};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.palette.primary.p600};
`;

const MainNavLinks = component => styled(component)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.default};
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;

  :visited {
    color: ${props => props.theme.palette.secondary.s300};
  }
`;

const MainNavLink = MainNavLinks(NavLink);

const LinksWrapper = styled.div`
  padding-bottom: 1rem;
`;

const SectionLabel = styled.div`
  color: ${props => props.theme.palette.secondary.default};
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 0.875rem;
`;

const SocialMedias = styled.div``;

const SocialMediasOptions = styled.div`
  display: flex;
  gap: 1rem;
`;

const PaymentMethods = styled.div``;

const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  gap: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.palette.primary.p600};
  padding-bottom: 2rem;
`;

const Terms = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
`;

const TermLinks = component => styled(component)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.default};
  font-size: 0.75rem;
  line-height: 1.5rem;

  :visited {
    color: ${props => props.theme.palette.secondary.s300};
  }
`;

const TermLink = TermLinks(NavLink);

const CompanyInfos = styled.span`
  font-size: 0.75rem;
  line-height: 1.5rem;
  text-align: center;
  color: ${props => props.theme.palette.secondary.s300};
`;

export {
  Wrapper,
  Links,
  MainNavLink,
  LinksWrapper,
  SectionLabel,
  SocialMedias,
  SocialMediasOptions,
  PaymentMethods,
  PaymentOptions,
  Terms,
  TermLink,
  CompanyInfos,
};
