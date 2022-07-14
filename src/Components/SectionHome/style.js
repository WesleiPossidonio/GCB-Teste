import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 963px) {
    flex-direction: column;
    height: max-content;
  }
`

export const ContainerText = styled.div`
  width: 100%;
  padding: 35px;
  margin-left: 2em;

  @media (min-width: 1780px) {
    margin-left: 10em;
  }

  @media (max-width: 960px) {
    margin-top: 9em;
    margin-left: -1rem;
  }

  @media (max-width: 520px) {
    margin-top: 7em;
  }

  @media (max-width: 405px) {
    margin-top: 5em;
  }
`

export const Text = styled.h1`
  font-size: min(45px, 6vw);
  color: #1d164d;

  @media (min-width: 1780px) {
    font-size: max(45px, 2.5vw);
  }
`

export const ContainerItens = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 1em;
`

export const Input = styled.input`
  width: 350px;
  padding: 15px;
  border: 1px solid #999db2;
  border-radius: 7px;
  font-size: 20px;

  @media (max-width: 1000px) {
    width: 300px;
  }

  @media (max-width: 425px) {
    width: 250px;
    font-size: 18px;
  }

  @media (max-width: 425px) {
    width: 175px;
    font-size: 14px;
  }
`

export const ContainerImage = styled.div`
  width: 100%;
`

export const Image = styled.img`
  width: 58.4%;
  position: absolute;
  top: 0;
  right: 0;

  @media (min-width: 1780px) {
    width: 45%;
  }

  @media (max-width: 450px) {
    width: 60%;
  }
`
