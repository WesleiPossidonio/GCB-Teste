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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  /* border-radius: 10px 0 0 10px;
  box-shadow: -7px 7px 13px 0 rgba(50, 50, 50, 0.22); */
  background-color: #badc50;

  @media (max-width: 877px) {
    display: none;
  }
`

export const Text = styled.h1`
  margin-top: -11rem;
  margin-left: 5rem;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
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
  /* border-radius: 0 10px 10px 0;
  box-shadow: 7px 7px 13px 0 rgba(50, 50, 50, 0.22); */
`

export const TitleForm = styled.h1`
  margin-top: 2em;
  font-size: min(25px, 5.5vw);
  font-weight: 700;

  color: #badc50;
`

export const TextTitle = styled.p`
  text-align: center;
  font-size: min(13px, 2.8vw);
  margin-top: 13px;
  margin-bottom: 5em;

  color: #5c5c5c;
`
