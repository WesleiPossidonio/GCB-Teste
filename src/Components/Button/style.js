import styled from 'styled-components'

export const ContainerButton = styled.button`
  width: ${({ isButton }) => (isButton ? '65px' : '100px')};
  height: ${({ isButton }) => (isButton ? '60px' : '35px')};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: none;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: white;
  background-color: #badc50;
  cursor: pointer;
  z-index: 2;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
    box-shadow: 8;
  }

  &:active {
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    transform: translateY(4px);
  }

  @media (max-width: 500px) {
    width: ${({ isButton }) => (isButton ? '60px' : '100px')};
    height: ${({ isButton }) => (isButton ? '55px' : '35px')};
  }
`
