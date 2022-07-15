import styled from 'styled-components'

export const Container = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;

  .rec.rec-arrow {
    background-color: #badc50;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    border: 2px solid #badc50;
    background-color: #efefef;
    color: #badc30;
  }

  .rec.rec-arrow:disabled {
    display: none;
  }

  .sc-fLlhyt.jwmRJg.rec.rec-item-wrapper {
    width: 100% !important;
    padding: 1em !important;
    margin: 10px !important;
  }

  .sc-cxabCf.gLZsMv.rec.rec-carousel {
    @media (min-width: 1400px) {
      margin-left: 4em;
    }

    @media (min-width: 1700px) {
      margin-left: 60em;
    }
  }
`

export const CardCarousel = styled.div`
  width: 270px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: -7px 7px 13px 0 rgba(50, 50, 50, 0.22);
`

export const ImageCard = styled.img`
  width: 100%;
`

export const ContainerItensCard = styled.div`
  padding: 15px;
`

export const TextCard = styled.p`
  font-size: 22px;
  font-weight: 700;
  text-align: start;
  color: #1d164d;
`

export const ContainerPerson = styled.div`
  margin-top: 35px;
  display: flex;
`

export const ImagePerson = styled.img``

export const NamePerson = styled.p`
  font-size: 16px;
`
