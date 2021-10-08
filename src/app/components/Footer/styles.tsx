import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { media } from 'styles/media';

const SmallScreenWrapper = styled.footer`
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
`;

const MainNavLinks = (
  component: typeof NavLink,
  fontSize: string,
  fontWeight: string,
  textTransform: string,
) => styled(component)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.default};
  text-transform: ${textTransform};
  font-size: ${fontSize};
  font-weight: ${fontWeight};

  :visited {
    color: ${props => props.theme.palette.secondary.s300};
  }
`;

const MainNavLink = MainNavLinks(NavLink, '1rem', 'bold', 'uppercase');

const LinksWrapper = styled.div``;

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
`;

const TermsSmallScreen = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
`;

const TermLinks = component => styled(component)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.default};
  font-size: 0.75rem;
  line-height: 1.5rem;
  white-space: nowrap;

  :visited {
    color: ${props => props.theme.palette.secondary.s300};
  }
`;

const TermLink = TermLinks(NavLink);

const CompanyInfos = styled.span`
  font-size: 0.75rem;
  line-height: 1.5rem;
  text-align: center;
  max-width: 35rem;
  margin: 0 auto;

  ${media.medium`
    margin: initial;
  `}

  color: ${props => props.theme.palette.secondary.s300};
`;

const MediumScreenWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(12.5rem, max-content));
  justify-content: space-between;
`;

const LinksMediumScreen = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const SectionTitleMediumScreen = styled.div`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.default};
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SectionWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;

const SectionNavLink = MainNavLinks(NavLink, '0.75rem', 'normal', 'none');

const MultipleSectionsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

const Hr = styled.hr`
  width: 100%;
  margin: 0;
  border: none;
  border-bottom: 1px solid ${props => props.theme.palette.primary.p600};
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-end: none;
  margin-inline-start: none;
`;

const Wrapper = styled.footer`
  padding: 2rem 2.5rem;
  background: ${props => props.theme.palette.primary.default};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TermsSectionMediumScreen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TermsLinksMediumScreen = styled.div`
  display: flex;
  gap: 4rem;
`;

export {
  TermsSectionMediumScreen,
  TermsLinksMediumScreen,
  SmallScreenWrapper,
  MediumScreenWrapper,
  Wrapper,
  Links,
  LinksMediumScreen,
  SectionTitleMediumScreen,
  SectionWrapper,
  SectionNavLink,
  MultipleSectionsWrapper,
  MainNavLink,
  LinksWrapper,
  SectionLabel,
  SocialMedias,
  SocialMediasOptions,
  PaymentMethods,
  PaymentOptions,
  TermsSmallScreen,
  TermLink,
  CompanyInfos,
  Hr,
};
