import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const ContainerItens = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 15px;

  @media (min-width: 1780px) {
    margin-top: 20em;
  }

  @media (max-width: 749px) {
    margin-top: 6em;
  }
`

export const Title = styled.h1`
  font-size: min(40px, 4vw);
  color: #1d164d;
  margin-bottom: 20px;
  margin-top: 4em;
`

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  margin-left: 3.1em;

  @media (max-width: 1000px) {
    margin-left: 4rem;
  }

  @media (max-width: 753px) {
    margin-left: 9rem;
    gap: 0.5em;
  }

  @media (max-width: 400px) {
    margin-top: 25px;
    margin-left: 10rem;
  }
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

  @media (max-width: 585px) {
    width: 250px;
    font-size: 18px;
  }

  @media (max-width: 350px) {
    width: 200px;
    font-size: 14px;
  }
`

export const Image = styled.img`
  width: 50%;
`
