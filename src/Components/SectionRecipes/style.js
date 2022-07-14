import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  padding-bottom: 70px;
`

export const ContainerItens = styled.div`
  width: 90%;
  margin-top: 5em;
  text-align: center;
`

export const ContainerCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 300px);
  justify-content: center;
  gap: 5em;
  margin-top: 3em;

  @media (max-width: 785px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
  }
`

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  background-color: #fff;
  box-shadow: -7px 7px 13px 0 rgba(50, 50, 50, 0.22);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }

  @media (max-width: 785px) {
    width: 200px;
    flex-direction: column;
    justify-content: center;
    box-shadow: 7px 7px 13px 0 rgba(50, 50, 50, 0.22);
  }
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  gap: 20px;

  @media (max-width: 785px) {
    padding-bottom: 1.5rem;
  }
`

export const ImageCard = styled.img`
  width: 170px;

  @media (max-width: 785px) {
    width: 200px;
    border-radius: 10px 10px 0 0;
  }
`

export const TextCard = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #1d164d;

  @media (max-width: 785px) {
    font-size: 18px;
    margin-top: 1rem;
    margin-right: 2rem;
  }
`
