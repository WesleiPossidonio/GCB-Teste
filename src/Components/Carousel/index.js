import React from 'react'
import Carousel from 'react-elastic-carousel'

import ImageCarouselFour from '../../Assets/ImageCarouselFour.svg'
import ImageCarouselOne from '../../Assets/ImageCarouselOne.svg'
import ImageCarouselTheree from '../../Assets/ImageCarouselThree.svg'
import ImageCarouselTwo from '../../Assets/ImageCarouselTwo.svg'
import {
  Container,
  CardCarousel,
  ImageCard,
  ContainerItensCard,
  TextCard,
  ContainerPerson,
  ImagePerson,
  NamePerson
} from './style'

export const IsCarousel = () => {
  const breakPoints = [
    { width: 850, itemsToShow: 3, pagination: false },
    { width: 1, itemsToShow: 1, itemsToScroll: 2, pagination: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 3, pagination: false },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2, pagination: false },
    { width: 1450, itemsToShow: 5, pagination: false }
  ]
  return (
    <Container>
      <Carousel breakPoints={breakPoints} outerSpacing={12}>
        <CardCarousel>
          <ImageCard src={ImageCarouselOne} alt="imagem-de-alimentos" />
          <ContainerItensCard>
            <TextCard style={{ marginRight: '2em' }}>
              Quick-start guide
              <br />
              to nuts and seeds
            </TextCard>
            <ContainerPerson>
              <ImagePerson />
              <NamePerson>Kevin Ibrahim </NamePerson>
            </ContainerPerson>
          </ContainerItensCard>
        </CardCarousel>

        <CardCarousel>
          <ImageCard src={ImageCarouselTwo} alt="imagem-de-alimentos" />
          <ContainerItensCard>
            <TextCard>
              Nutrition: Tips for <br />
              Improving Your Health
            </TextCard>
            <ContainerPerson>
              <ImagePerson />
              <NamePerson>Mike Jackson</NamePerson>
            </ContainerPerson>
          </ContainerItensCard>
        </CardCarousel>

        <CardCarousel>
          <ImageCard src={ImageCarouselTheree} alt="imagem-de-alimentos" />
          <ContainerItensCard>
            <TextCard style={{ marginRight: '1.2em' }}>
              The top 10 benefits
              <br />
              of eating healthy
            </TextCard>
            <ContainerPerson>
              <ImagePerson />
              <NamePerson>Bryan McGregor</NamePerson>
            </ContainerPerson>
          </ContainerItensCard>
        </CardCarousel>

        <CardCarousel>
          <ImageCard src={ImageCarouselFour} alt="imagem-de-alimentos" />
          <ContainerItensCard>
            <TextCard style={{ marginRight: '3.8em' }}>
              What Makes a <br />
              Healthy Diet
            </TextCard>
            <ContainerPerson>
              <ImagePerson />
              <NamePerson>Jashua</NamePerson>
            </ContainerPerson>
          </ContainerItensCard>
        </CardCarousel>
      </Carousel>
    </Container>
  )
}
