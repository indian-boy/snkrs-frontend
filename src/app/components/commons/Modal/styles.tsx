import styled from 'styled-components/macro';

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 5%;
  top: 10%;
  width: 90%;
  height: 80%;
  overflow: auto;
  box-shadow: 0 0 4rem rgb(0 0 0 / 10%);
  background-color: ${props => props.theme.palette.secondary.default};
  border-radius: 10px;
`;

const CloseButton = styled.button`
  position: fixed;
  right: 5%;
  bottom: 3%;

  background-color: transparent;
  cursor: pointer;
  outline: none;
  text-align: center;
  user-select: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0.5rem;
`;

export { Wrapper, CloseButton };
