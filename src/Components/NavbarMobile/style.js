import { Link } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import styled, { css } from 'styled-components'

export const Container = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #badc50;

  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  transform: translateY(50px);

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
    color: #fff;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);

      > svg {
        transform: rotate(0deg);
      }
    `}
`

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const LinkNav = styled(LinkS)`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`

export const LinkRegister = styled(Link)`
  width: 130px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  color: #badc50;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
    box-shadow: 8;
  }

  &:active {
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    transform: translateY(4px);
  }
`
