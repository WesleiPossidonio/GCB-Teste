import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 90px;
  padding: 40px 0px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3em;
  }

  @media (max-width: 552px) {
    flex-direction: column;
    gap: 1em;
  }
`

export const Copyrights = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #1d164d;
  cursor: pointer;
`

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #999db2;
`
