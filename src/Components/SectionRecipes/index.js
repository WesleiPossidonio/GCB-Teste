import React from 'react'

import ImageCardFour from '../../Assets/ImageCardFour.svg'
import ImageCardOne from '../../Assets/ImageCardOne.svg'
import ImageCardThree from '../../Assets/ImageCardThree.svg'
import ImageCardTwo from '../../Assets/ImageCardTwo.svg'
import { Button, Title, Text } from '../../Components'
import {
  Container,
  ContainerItens,
  ContainerCards,
  Card,
  ContainerText,
  ImageCard,
  TextCard
} from './style'

export const SectionRecipes = () => {
  return (
    <Container id="SectionRecipes">
      <ContainerItens>
        <Title>Our Best Recipes</Title>
        <Text>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </Text>
      </ContainerItens>
      <ContainerCards>
        <Card>
          <ImageCard src={ImageCardOne} />
          <ContainerText>
            <TextCard>
              Broccoli Salad <br /> with Bacon
            </TextCard>
            <Button>See Recipe</Button>
          </ContainerText>
        </Card>
        <Card>
          <ImageCard src={ImageCardTwo} />
          <ContainerText style={{ marginRight: '2em' }}>
            <TextCard>
              Classic Beef
              <br /> Burgers
            </TextCard>
            <Button>See Recipe</Button>
          </ContainerText>
        </Card>
        <Card>
          <ImageCard src={ImageCardThree} />
          <ContainerText>
            <TextCard>
              Classic Potato
              <br /> Salad
            </TextCard>
            <Button>See Recipe</Button>
          </ContainerText>
        </Card>
        <Card>
          <ImageCard src={ImageCardFour} />
          <ContainerText>
            <TextCard>
              Cherry Cobbler
              <br /> on the Grill
            </TextCard>
            <Button>See Recipe</Button>
          </ContainerText>
        </Card>
      </ContainerCards>
    </Container>
  )
}
