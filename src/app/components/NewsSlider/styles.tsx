import { ReactComponent as ArrowLeftIcon } from 'assets/svgs/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/svgs/icons/arrow_right.svg';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components/macro';
import { media } from 'styles/media';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.theme.palette.secondary.s200};
  padding: 0.5rem 0;
`;

const CustomizeArrowLeftIconSvg = (component: typeof ArrowLeftIcon) => styled(
  component,
)`
  width: 1rem;
  height: 1rem;
`;

const ArrowLeftIconCustomized = CustomizeArrowLeftIconSvg(ArrowLeftIcon);

const CustomizeArrowRightIconSvg = (component: typeof ArrowLeftIcon) => styled(
  component,
)`
  width: 1rem;
  height: 1rem;
`;

const ArrowRightCustomized = CustomizeArrowRightIconSvg(ArrowRightIcon);

const FadeIn = keyframes`
  0%  { opacity: 0; }
  100% { opacity: 1;}
`;

const Content = styled.div`
  flex-direction: column;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: ${props => props.theme.palette.primary.p700};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  max-width: 40rem;
  text-align: center;

  ${media.medium`
    flex-direction: row;
    gap: 1.5rem;
  `}

  animation: ${FadeIn} 0.6s ease-in-out;
`;

const LinkCustomized = (component: typeof NavLink) => styled(component)`
  text-decoration: underline;
  color: ${props => props.theme.palette.primary.p700};
  font-size: 0.875rem;
  line-height: 1.5rem;
  white-space: nowrap;
`;

const Link = LinkCustomized(NavLink);

const Image = styled.img`
  height: 2rem;
  width: 2rem;
`;

const ArrowButtonWrapper = styled.button`
  background-color: ${props => props.theme.palette.secondary.default};
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 0;
  cursor: pointer;
  outline: none;
  text-align: center;
  text-decoration: none;
  user-select: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

const Message = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;

  ${media.medium`
    gap: 1.5rem;
  `}
`;

export {
  Wrapper,
  ArrowLeftIconCustomized,
  ArrowRightCustomized,
  Content,
  Link,
  Image,
  ArrowButtonWrapper,
  Message,
};
