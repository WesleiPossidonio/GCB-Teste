import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ContainerImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: #badc50;

  @media (max-width: 877px) {
    display: none;
  }
`

export const Title = styled.h1`
  color: #fff;
  margin-top: -4rem;
  font-size: 35px;
  margin-left: 10px;
  font-weight: 600;
`

export const Image = styled.img`
  width: 350px;
  margin-top: 4rem;
  align-self: center;
`

export const ContainerItens = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`

export const TitleForm = styled.h1`
  margin-top: 2em;
  font-size: min(25px, 5.5vw);
  font-weight: 700;

  color: #badc50;
`

export const TextTitle = styled.p`
  text-align: center;
  font-size: min(13px, 3.7vw);
  margin-top: 13px;
  margin-bottom: 5em;

  color: #5c5c5c;
`
