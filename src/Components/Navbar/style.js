import { Link } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 10;
  padding: 10px;
  background: ${({ colorchange }) => (colorchange ? '#badc50' : 'transparent')};

  nav {
    display: flex;
    gap: 1em;
  }
`

export const Logo = styled(LinkS)`
  cursor: pointer;
  font-size: 25px;
  font-weight: 700;
  color: ${({ color }) => (color ? '#fff' : '#badc50')};

  @media (min-width: 880px) {
    margin-right: 6em;
  }
`

export const LinkNav = styled(LinkS)`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  padding: 15px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;

  &:after {
    content: '';
    width: 0px;
    height: 1px;

    display: block;
    background: #fff;
    transition: 400ms;
  }

  &:hover::after {
    width: 100%;
  }

  @media screen and (max-width: 880px) {
    display: none;
  }
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

  @media screen and (max-width: 880px) {
    display: none;
  }
`
export const Icon = styled.div`
  display: none;

  > svg {
    position: absolute;
    top: 0.5rem;
    right: 0.5em;
    font-size: 35px;
    color: #fff;
    text-align: end;
  }

  @media screen and (max-width: 880px) {
    display: flex;
  }
`
