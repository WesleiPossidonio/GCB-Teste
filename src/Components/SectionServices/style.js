import styled from 'styled-components'

import ImageServices from '../../Assets/ImageServices.svg'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${ImageServices});
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: contain;

  @media (min-width: 1780px) {
    background-position: 0 100%;
  }

  @media (max-width: 1025px) {
    height: max-content;
    padding: 5px;
  }

  @media (max-width: 877px) {
    background-position: -5em 100%;
  }

  @media (max-width: 626px) {
    background-image: none;
  }
`

export const ContainerItens = styled.div`
  width: 50%;
  margin-left: 30em;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  padding: 5em;
  margin-top: -2em;
  margin-left: 35em;

  @media (min-width: 1780px) {
    margin-left: 60em;
  }

  @media (max-width: 1025px) {
    padding: 2em;
    margin-left: 32em;
  }

  @media (max-width: 1000px) {
    margin-left: 22em;
  }

  @media (max-width: 770px) {
    margin-left: 20em;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding-left: 10px;
    margin-left: 23em;
    margin-top: 1em;
  }

  @media (max-width: 626px) {
    margin: 0 auto;
    width: 70%;
  }
`
